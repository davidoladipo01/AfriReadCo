import { User, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/user.services";

const UserDropdown = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logoutUser();

        navigate("/");
    };

    return (

        <div className="user-dropdown">

            <button>

                <User size={18} />

                Profile

            </button>

            <button>

                <Settings size={18} />

                Settings

            </button>

            <hr />

            <button className="logout" onClick={handleLogout}>

                <LogOut size={18} />

                Logout

            </button>

        </div>

    );

};

export default UserDropdown;