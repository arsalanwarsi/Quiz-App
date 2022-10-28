import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import logo from "../../assets/images/logo.png";

function Layout() {
    return (<>
        <Navbar title="QUIZ" brandLogo={logo} />
        <Outlet />
    </>);
}

export default Layout