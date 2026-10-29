import useSocialAuth from "../Hooks/useSocialAuth";

// Add more providers here (enable them in the Clerk dashboard first):
// { strategy: "oauth_github", label: "Continue with GitHub", icon: "..." }
const PROVIDERS = [
  {
    strategy: "oauth_google",
    label: "Continue with Google",
    icon: "https://www.svgrepo.com/show/475656/google-color.svg",
  },
];

const SocialAuthButtons = () => {
  const { startSocialAuth, loadingProvider } = useSocialAuth();

  return (
    <>
      {/* Clerk uses this for bot protection during sign-up in custom flows */}
      <div id="clerk-captcha" />

      {PROVIDERS.map(({ strategy, label, icon }) => (
        <button
          key={strategy}
          className="google-btn"
          type="button"
          disabled={!!loadingProvider}
          onClick={() => startSocialAuth(strategy)}
        >
          <img src={icon} alt="" />
          <span>{loadingProvider === strategy ? "Connecting..." : label}</span>
        </button>
      ))}
    </>
  );
};

export default SocialAuthButtons;