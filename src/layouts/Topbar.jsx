import { useState, useRef, useEffect } from "react";
import { Menu, Bell } from "lucide-react";
import NotificationDropdown from "./NotificationDropdown";
import UserDropdown from "./UserDropdown";

const Topbar = ({
  title = "Dashboard",
  user,
  onToggleSidebar,
}) => {

  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const notificationRef = useRef(null);
  const userRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }

      if (userRef.current && !userRef.current.contains(e.target)) {
        setShowUserMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="dashboard-topbar">

      <div className="topbar-left">

        <button
          className="mobile-menu-btn"
          onClick={onToggleSidebar}
        >
          <Menu size={22}/>
        </button>

        <div>

          <h2>{title}</h2>

          <p>
            Welcome back,
            <span> {user?.firstName || "Reader"} 👋</span>
          </p>

        </div>

      </div>

      <div className="topbar-right">

        <div
          className="notification-wrapper"
          ref={notificationRef}
        >

          <button
            className="icon-btn"
            onClick={() =>
              setShowNotifications(!showNotifications)
            }
          >

            <Bell size={20}/>

            <span className="notification-dot"></span>

          </button>

          {showNotifications && (
            <NotificationDropdown/>
          )}

        </div>

        <div
          className="user-wrapper"
          ref={userRef}
        >

          <button
            className="user-button"
            onClick={() =>
              setShowUserMenu(!showUserMenu)
            }
          >

            <img
              src={user?.avatar}
              alt=""
            />

            <div>

              <h4>
                {user?.firstName}
              </h4>

              <small>
                Reader
              </small>

            </div>

          </button>

          {showUserMenu && (
            <UserDropdown/>
          )}

        </div>

      </div>

    </header>
  );
};

export default Topbar;