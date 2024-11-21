import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Welcome from "./welcomeMessage/Welcome";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Welcome></Welcome>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;