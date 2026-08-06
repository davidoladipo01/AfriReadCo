// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DashboardSectionPage from "./pages/DashboardSectionPage";
import Onboarding from "./pages/Onboarding";
import Cookies from "universal-cookie";
import Authguard from "./auth/Authguard";
import DashboardLayout from "./layouts/DashboardLayout";
import { DashboardProvider } from "./context/DashboardContext";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Reader from "./pages/Reader";

function App() {
  const cookies = new Cookies();
  const token = cookies.get("token");
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
            <Route
              path="communities"
              element={<DashboardSectionPage title="Communities" />}
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
          </Route>
          <Route path="/onboard" element={<Onboarding />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
