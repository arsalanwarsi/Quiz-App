import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/quiz">Quiz</NavLink>
            <NavLink to="/login">Login</NavLink>
        </nav>
    )
}

export default Navbar