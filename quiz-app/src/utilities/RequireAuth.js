import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth"

function RequireAuth({ children }) {
    const auth = useAuth();
    const location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{ path: location.pathname }} />;
    }

    return children;
}

export default RequireAuth

// const location = useLocation();

//     const token = localStorage.getItem('token');
//     const config = {
//         headers: { Authorization: `Bearer ${token}` }
//     };

//     let isAuth = 401;

//     axios
//         .get('http://127.0.0.1:8000/api/islogin', config)
//         .then((res) => {

//             isAuth = res.status;

//         })
//         .catch((err) => {
//             console.log(err);

//             isAuth = err.response.status;
//             localStorage.removeItem("token");
//             return <Navigate to="/login" state={{ path: location.pathname }} />;
//         });
//     // return <Navigate to="/login" state={{ path: location.pathname }} />;

//     console.log(isAuth);