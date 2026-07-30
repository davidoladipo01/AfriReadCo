import { User, Settings, LogOut } from "lucide-react";

const UserDropdown = () => {

    return(

        <div className="user-dropdown">

            <button>

                <User size={18}/>

                Profile

            </button>

            <button>

                <Settings size={18}/>

                Settings

            </button>

            <hr/>

            <button className="logout">

                <LogOut size={18}/>

                Logout

            </button>

        </div>

    );

};

export default UserDropdown;