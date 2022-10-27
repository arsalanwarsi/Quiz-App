import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {

    return (<>
        <nav className="navbar-expand navbar-dark bg-menu">
            <div className="container">
                <div>
                    <div className="d-flex justify-content-around navbar-nav navbar-nav">
                        <NavLink className="nav-link" to='question/add'>Add Question</NavLink>
                        <NavLink className="nav-link" to='question/edit'>Edit Question</NavLink>
                        <NavLink className="nav-link" to='question/delete'>Delete Question</NavLink>
                    </div>
                </div>
            </div>
        </nav>
        <Outlet />
    </>);
}

export default Dashboard