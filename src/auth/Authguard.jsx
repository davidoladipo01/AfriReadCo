import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

function Authguard({ redirectPath = "/login", children }) {
    const token = new Cookies().get("token");

    if (!token) {
        return <Navigate to={redirectPath} replace />;
    }

    return children || <Outlet />;
}

export default Authguard;