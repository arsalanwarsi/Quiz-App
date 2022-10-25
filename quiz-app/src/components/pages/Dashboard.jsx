import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utilities/Auth"

function Dashboard() {
    const auth = useAuth();
    const navigate = useNavigate();

    const logoutUser = () => {
        auth.logout();
        navigate('/');
    }
    return (
        <>
            <div>Dashboard</div>
            <div>Welcome {auth.user}</div>
            <div><button onClick={logoutUser}>Logout</button></div>
        </>
    )
}

export default Dashboard