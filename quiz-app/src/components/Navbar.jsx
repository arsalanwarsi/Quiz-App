import { NavLink } from "react-router-dom"

function Navbar() {
    return (<>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleNavBar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="toggleNavBar">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        <NavLink className="nav-link" to="/quiz">Quiz</NavLink>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    </>)
}

export default Navbar