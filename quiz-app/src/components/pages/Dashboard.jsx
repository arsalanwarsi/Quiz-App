import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../utilities/Auth"

function Dashboard() {

    const auth = useAuth();

    return (<>
        <div>Dashboard</div>
        <div>Welcome {auth.user}</div>
        <nav className="navbar-expand navbar-dark bg-nav">
            <div className="container">
                <div>
                    <div className="d-flex justify-content-around navbar-nav navbar-nav">
                        <Link className="nav-link" to='question/add'>Add Question</Link>
                        <Link className="nav-link" to='question/edit'>Edit Question</Link>
                        <Link className="nav-link" to='question/delete'>Delete Question</Link>
                    </div>
                </div>
            </div>
        </nav>
        <Outlet />
    </>);
}

export default Dashboard