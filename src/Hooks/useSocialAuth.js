import { useRef, useState } from "react";
import { useClerk, useSignIn, useSignUp } from "@clerk/react";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import { socialLogin } from "../services/auth.service";

const cookies = new Cookies();

// Opens a centered popup. Must be called directly inside a click handler,
// otherwise the browser will block it.
const openCenteredPopup = () => {
  const width = 500;
  const height = 650;
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2;

  return window.open(
    "about:blank",
    "clerk-social-auth",
    `width=${width},height=${height},left=${left},top=${top}`
  );
};

const useSocialAuth = () => {
  const clerk = useClerk();
  const { signIn } = useSignIn();
  const { signUp } = useSignUp();
  const [loadingProvider, setLoadingProvider] = useState(null);

  // Each click gets a number. If the user clicks again (e.g. they closed the popup),
  // the older attempt notices it is stale and quietly stops.
  const attemptRef = useRef(0);

  // strategy examples: "oauth_google", "oauth_github", "oauth_facebook", "oauth_apple"
  const startSocialAuth = async (strategy) => {
    if (!clerk.loaded || !signIn || !signUp) {
      toast.info("Almost ready, please try again in a moment.");
      return;
    }

    // 1. Open the popup FIRST (synchronously) so it isn't blocked
    const popup = openCenteredPopup();
    if (!popup) {
      toast.error("Popup was blocked. Please allow popups for this site.");
      return;
    }

    const attempt = ++attemptRef.current;
    const isStale = () => attempt !== attemptRef.current;
    setLoadingProvider(strategy);

    try {
      // 2. Clerk sends the popup to Google, then messages this window when done
      const origin = window.location.origin;
      const outcome = await signIn.sso({
        strategy,
        popup,
        redirectUrl: `${origin}/login`,
        redirectCallbackUrl: `${origin}/login`,
      });

      if (isStale()) return; // user clicked again; a newer attempt owns the flow
      if (outcome.error) throw outcome.error;

      // 3. Turn the result into an active Clerk session.
      //    - existing Clerk user  -> sign-in is complete
      //    - brand new Google user -> Clerk says "transferable": convert to a sign-up
      if (signIn.status === "complete") {
        const { error } = await signIn.finalize();
        if (error) throw error;
      } else if (signIn.isTransferable) {
        const { error: createError } = await signUp.create({ transfer: true });
        if (createError) throw createError;

        if (signUp.status !== "complete") {
          throw new Error(
            "Clerk needs more information to finish sign-up. In the Clerk dashboard, make only Email required."
          );
        }

        const { error } = await signUp.finalize();
        if (error) throw error;
      } else {
        throw new Error("Could not complete sign-in. Please try again.");
      }

      // 4. Get Clerk's session token and swap it for YOUR jwt
      const clerkToken = await clerk.session?.getToken();
      if (!clerkToken) throw new Error("No Clerk session found.");

      const response = await socialLogin(clerkToken);
      const { token, data: user } = response.data;

      // 5. From here on it's identical to your normal login
      const decoded = jwtDecode(token);
      cookies.set("token", token, {
        expires: new Date(decoded.exp * 1000),
        path: "/",
        sameSite: "lax",
      });

      // Clerk has done its job; end its session so it can't clash with a future sign-in
      await clerk.signOut(() => {});

      // Full page navigation: App.jsx reads the cookie while rendering,
      // so this guarantees it starts with the new token.
      window.location.assign(user.onboardingCompleted ? "/dashboard" : "/onboard");
    } catch (error) {
      if (isStale()) return;
      console.error("Social auth failed:", error);
      toast.error(
        error?.errors?.[0]?.longMessage ||
          error?.response?.data?.message ||
          error?.message ||
          "Social sign-in failed."
      );

      // If Clerk created a session but our backend step failed, clean it up
      if (clerk.session) {
        try {
          await clerk.signOut(() => {});
        } catch (_) {
          /* ignore */
        }
      }
    } finally {
      // NOTE: we deliberately never read popup.closed - Google's page sends a
      // Cross-Origin-Opener-Policy header, so browsers block that check.
      try {
        popup.close();
      } catch (_) {
        /* ignore */
      }
      if (!isStale()) setLoadingProvider(null);
    }
  };

  return { startSocialAuth, loadingProvider };
};

export default useSocialAuth;