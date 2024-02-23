import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import '../layouts/Root.css'

const Root = () => {
    return (
        <div id="bdy">
            <Navbar></Navbar>
         
            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Root;