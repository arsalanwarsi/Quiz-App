import { NavLink } from "react-router-dom";

function Navbar(props) {
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
                <div className="collapse navbar-collapse ms-3" id="toggleNavBar">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        <NavLink className="nav-link" to="/quiz">Quiz</NavLink>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    </>);
}

export default Navbar