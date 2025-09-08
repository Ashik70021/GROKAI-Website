import Navbar from "../components/header/Navbar"
import Footer from "../components/footer/Footer"
import { Outlet } from "react-router-dom";
const MainLayout = () => {
    return (
        <div className="w-full overflow-x-hidden">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="min-h-screen w-full">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;