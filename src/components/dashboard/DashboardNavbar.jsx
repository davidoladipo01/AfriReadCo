import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import NotificationDropdown from "../../layouts/NotificationDropdown";
import UserDropdown from "../../layouts/UserDropdown";
import Logo from "../Logo";
import SidebarLinks from "../dashboard/SidebarLinks";
import { useDashboard } from "../../context/DashboardContext";
// import { logoutUser } from "../../services/user.services";

// const avatarUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBvsvDCf_YxcG_F8cy0MUGDG2dJKYRdX-hmPGyxz67CvOZhfc384WD0dtgPAxZgkIJriiKXyz29zUS78LUNrd5oT3ppiCRuQs5xkxXbkfAxyJ2DZpl9sp-AoOTlLNAOa-oAiXbPkM0q-daxdJ9Jw5_cZt6UlJEPViutESmnXkfYKt28boRaZA_I1KKxHw2ZwMGzVMr-mVM98Xlf-BlIOYUTeqolC9L5JBvuye3tMybkFByGduQnCRI";

const DashboardNavbar = ({ onToggleSidebar, isDashboardHome }) => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const notificationRef = useRef(null);
    const userRef = useRef(null);

    const { user } = useDashboard();
    const navigate = useNavigate()

    useEffect(() => {
        const closeDropdowns = (event) => {
            if (!notificationRef.current?.contains(event.target)) setShowNotifications(false);
            if (!userRef.current?.contains(event.target)) setShowUserMenu(false);
        };

        document.addEventListener("mousedown", closeDropdowns);
        return () => document.removeEventListener("mousedown", closeDropdowns);
    }, []);



    return (
        <header className="dashboard-navbar bg-surface/40 dark:bg-surface-dim/40 backdrop-blur-md docked full-width top-0 sticky z-50 border-b border-outline-variant/30 shadow-[0px_10px_30px_rgba(90,62,43,0.08)] h-20">
            <div className="dashboard-navbar-container">
                {/* Hamburger menu - always visible on mobile */}
                <button
                    type="button"
                    className="dashboard-menu-button"
                    aria-label="Toggle navigation"
                    onClick={onToggleSidebar}
                >
                    <Menu size={24} />
                </button>

                {/* Logo - extreme left */}
                <div className="navbar-logo-wrapper">
                    <Logo
                        width={180}
                        height={60}
                        bookColor="#5A3E2B"
                        textColor="#2B2B2B"
                        accentColor="#C65D3B"
                    />
                </div>

                {/* Show nav links on dashboard home (desktop) */}
                {isDashboardHome && (
                    <nav className="dashboard-nav-links">
                        {SidebarLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.path === "/dashboard"}
                                className={({ isActive }) =>
                                    isActive ? "nav-link active" : "nav-link"
                                }
                            >
                                {link.title}
                            </NavLink>
                        ))}
                    </nav>
                )}

                {/* Search bar - hidden on dashboard home */}
                {!isDashboardHome && (
                    <div className="dashboard-search">
                        <div className="relative w-full">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                            <input
                                className="w-full bg-surface-container-low border-none rounded-full py-2.5 pl-12 pr-4 focus:ring-2 focus:ring-primary text-body-md"
                                placeholder="Search for books, authors, circles..."
                                type="search"
                            />
                        </div>
                    </div>
                )}

                {/* Right side items */}
                <div className="dashboard-navbar-right">
                    <div className="notification-wrapper" ref={notificationRef}>
                        <button
                            type="button"
                            className="notification-btn"
                            aria-label="Open notifications"
                            aria-expanded={showNotifications}
                            onClick={() => setShowNotifications((open) => !open)}
                        >
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="notification-dot" />
                        </button>
                        {showNotifications && <NotificationDropdown />}
                    </div>

                    <div className="user-wrapper" ref={userRef}>
                        <button
                            type="button"
                            className="dashboard-user"
                            aria-label="Open user menu"
                            aria-expanded={showUserMenu}
                            onClick={() => setShowUserMenu((open) => !open)}
                        >
                            <img
                                src={user?.avatar || "/default-avatar.png"}
                                alt={user?.firstName}
                            />
                            <span>{user?.firstName}</span>
                        </button>
                        {showUserMenu && <UserDropdown />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardNavbar;