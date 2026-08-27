// App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Cookies from "universal-cookie";
import { getCurrentUser } from "./services/user.services"; // <-- Import your existing user service

// Auth & Layouts
import Authguard from "./auth/Authguard";
import DashboardLayout from "./layouts/DashboardLayout";
import { DashboardProvider } from "./context/DashboardContext";
import { SocketProvider } from "./context/SocketContext";
import LoadingState from "./components/common/LoadingState";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DashboardSectionPage from "./pages/DashboardSectionPage";
import Onboarding from "./pages/Onboarding";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Reader from "./pages/Reader";
import ClubDashboard from "./components/club/ClubDashboard";

// Club Components / Pages
import ClubList from "./components/club/ClubList";
import CreateClub from "./components/club/CreateClub";
import Profile from "./pages/Profile";

function App() {
  const cookies = new Cookies();
  const token = cookies.get("token");

  const [currentUser, setCurrentUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  // Fetch real authenticated user from /api/auth/me
  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const res = await getCurrentUser();
          // Adjust based on your API response structure (e.g., res.data.user or res.data)
          const userData = res.data?.data || res.data?.user || res.data;
          console.log("Fetched User Data:", userData);
          setCurrentUser(userData);
        } catch (err) {
          console.error("Failed to fetch user:", err);
          setCurrentUser(null);
        }
      } else {
        setCurrentUser(null);
      }
      setLoadingUser(false);
    };

    fetchUser();
  }, [token]);

  if (loadingUser && token) {
    return <LoadingState message="Loading application..." />; // Prevents socket connecting before user state resolves
  }

  return (
    <SocketProvider user={currentUser}>
      <div>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route element={<Authguard isAuth={token} />}>
            <Route path="/dashboard/read/:id" element={<Reader />} />

            <Route
              path="/dashboard"
              element={
                <DashboardProvider>
                  <DashboardLayout />
                </DashboardProvider>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="books" element={<Books />} />
              <Route path="books/:id" element={<BookDetails />} />

              {/* Real Club & Community Routes */}
              <Route path="communities" element={<ClubList user={currentUser} />} />
              <Route path="communities/create" element={<CreateClub user={currentUser} />} />
              <Route
                path="communities/:clubId"
                element={<ClubDashboard user={currentUser} />}
              />

              <Route
                path="discover"
                element={<DashboardSectionPage title="Discover" />}
              />
              <Route
                path="analytics"
                element={<DashboardSectionPage title="Analytics" />}
              />
              <Route
                path="settings"
                element={<DashboardSectionPage title="Settings" />}
              />
              <Route path="profile" element={<Profile />} />
            </Route>

            <Route path="/onboard" element={<Onboarding />} />
          </Route>
        </Routes>
      </div>
    </SocketProvider>
  );
}

export default App;
