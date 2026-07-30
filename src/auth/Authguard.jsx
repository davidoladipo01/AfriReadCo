import { Navigate, Outlet } from "react-router-dom";

function Authguard({
    isAuth,
    redirectPath = "/login",
    children,
}) {

    if (!isAuth) {
        return <Navigate to={redirectPath} replace />;
    }

    return children || <Outlet />;
}

export default Authguard;