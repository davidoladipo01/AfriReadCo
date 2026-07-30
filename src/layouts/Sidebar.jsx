import { NavLink } from "react-router-dom";
import SidebarLinks from "../components/dashboard/SidebarLinks";
import Logo from "../components/Logo";

const Sidebar = ({ isOpen, onNavigate, collapsed }) => {
    return (
        <aside
            className={`dashboard-sidebar ${isOpen ? "open" : ""}`}
        >
            <nav>

                {SidebarLinks.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={onNavigate}
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-link active"
                                : "sidebar-link"
                        }
                    >
                        <span className="material-symbols-outlined">
                            {link.icon}
                        </span>

                        {!collapsed && (
                            <span className="sidebar-title">
                                {link.title}
                            </span>
                        )}
                    </NavLink>
                ))}

            </nav>
        </aside>
    );
};

export default Sidebar;
