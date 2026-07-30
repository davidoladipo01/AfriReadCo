import { Bell } from "lucide-react";

const notifications = [

    {
        id:1,
        text:"Your reading circle starts in 2 hours.",
        time:"5 mins ago"
    },

    {
        id:2,
        text:"Someone liked your review.",
        time:"1 hour ago"
    },

    {
        id:3,
        text:"New recommendation added.",
        time:"Yesterday"
    }

];

const NotificationDropdown = () => {

    return (

        <div className="notification-dropdown">

            <div className="dropdown-header">

                <Bell size={18}/>

                <h4>Notifications</h4>

            </div>

            <div className="notification-list">

                {
                    notifications.map(item=>(
                        <div
                        className="notification-item"
                        key={item.id}
                        >

                            <p>{item.text}</p>

                            <small>{item.time}</small>

                        </div>
                    ))
                }

            </div>

        </div>

    );

};

export default NotificationDropdown;