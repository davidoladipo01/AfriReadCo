import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import DashboardFooter from "../components/dashboard/DashboardFooter";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

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
            />
            <div className="dashboard-body">
                <Sidebar
                    isOpen={isSidebarOpen}
                    onNavigate={() => setIsSidebarOpen(false)}
                />
                <button
                    type="button"
                    className={`sidebar-backdrop ${isSidebarOpen ? "visible" : ""}`}
                    aria-label="Close navigation"
                    onClick={() => setIsSidebarOpen(false)}
                />
                <main
                    className="dashboard-main"
                >
                    <Outlet />
                    <DashboardFooter />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
