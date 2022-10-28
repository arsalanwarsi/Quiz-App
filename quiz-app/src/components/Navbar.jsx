import { NavLink, useNavigate } from "react-router-dom";

function Navbar(props) {

    const userAuth = localStorage.getItem("token");
    const navigate = useNavigate();

    const logoutUser = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate('/');
    }

    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-nav">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/home">
                    <img src={props.brandLogo} alt="quiz" width="50" height="25" className="d-inline-block align-text-top" />
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
                        {(userAuth != null) ? <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink> : ''}
                    </div>
                    <div className="logged-user navbar-nav">
                        {/* <b className="nav-link" >{localStorage.getItem("user")}</b> */}
                        {(userAuth != null) ? <NavLink className="nav-link" onClick={logoutUser}>Logout</NavLink> : <NavLink className="nav-link" to="/login">Login</NavLink>}
                    </div>
                </div>
            </div>
        </nav>
    </>);
}

export default Navbar