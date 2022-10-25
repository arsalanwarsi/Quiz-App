import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/quiz">Quiz</Link>
                <Link to="/login">Login</Link>
            </nav>
        </>
    )
}

export default Navbar