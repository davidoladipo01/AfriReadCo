import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import DashboardFooter from "../components/dashboard/DashboardFooter";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();
    
    // Dashboard home uses the special top nav links.
    // Profile and settings should match that same layout.
    const isDashboardHome = [
        "/dashboard",
        "/dashboard/profile",
        "/dashboard/settings",
    ].includes(location.pathname);
    const isClubDashboard = /^\/dashboard\/communities\//.test(location.pathname);

    useEffect(() => {
        setIsSidebarOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const closeOnEscape = (event) => {
            if (event.key === "Escape") setIsSidebarOpen(false);
        };

        document.addEventListener("keydown", closeOnEscape);
        return () => document.removeEventListener("keydown", closeOnEscape);
    }, []);

    return (
        <div className="dashboard-layout">
            <DashboardNavbar
                onToggleSidebar={() => setIsSidebarOpen((open) => !open)}
                isDashboardHome={isDashboardHome}
            />
            <div className="dashboard-body">
                {/* Only show sidebar if NOT on dashboard home OR if sidebar is open (mobile) */}
                {(!isDashboardHome || isSidebarOpen) && (
                    <Sidebar
                        isOpen={isSidebarOpen}
                        onNavigate={() => setIsSidebarOpen(false)}
                    />
                )}
                
                {/* Backdrop only shows when sidebar is open on mobile */}
                <button
                    type="button"
                    className={`sidebar-backdrop ${isSidebarOpen ? "visible" : ""}`}
                    aria-label="Close navigation"
                    onClick={() => setIsSidebarOpen(false)}
                />
                
                <main
                    className={`dashboard-main ${!isDashboardHome ? "with-sidebar" : ""}`}
                >
                    <Outlet />
                    {!isClubDashboard && <DashboardFooter />}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;