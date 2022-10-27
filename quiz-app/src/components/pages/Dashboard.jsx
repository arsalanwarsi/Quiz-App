import { Link, Outlet } from "react-router-dom";

function Dashboard() {

    return (<>
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