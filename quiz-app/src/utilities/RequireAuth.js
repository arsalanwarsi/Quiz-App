import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
    const location = useLocation();
    const userAuth = localStorage.getItem("token");

    if (userAuth == null) {
        return <Navigate to="/login" state={{ path: location.pathname }} />;
    }

    return children;
}

export default RequireAuth