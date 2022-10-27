import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../utilities/Auth";

function Navbar(props) {

    const auth = useAuth();
    const navigate = useNavigate();

    const logoutUser = () => {
        auth.logout();
        localStorage.removeItem("token");
        navigate('/');
    }

    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-nav">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/home">
                    <img src={props.brandLogo} alt="quiz" width="50" height="25" class="d-inline-block align-text-top" />
                    {props.title}
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleNavBar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="justify-content-between mx-3 navbar-collapse collapse" id="toggleNavBar">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        <NavLink className="nav-link" to="/quiz">Quiz</NavLink>
                        {auth.user ? <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink> : ''}
                    </div>
                    <div className="logout navbar-nav">
                        {auth.user ? <NavLink className="nav-link" onClick={logoutUser}>Logout</NavLink> : <NavLink className="nav-link" to="/login">Login</NavLink>}
                    </div>
                </div>
            </div>
        </nav>
    </>);
}

export default Navbar