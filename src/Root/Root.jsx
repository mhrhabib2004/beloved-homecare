import { Outlet } from "react-router-dom";
import Navber from "../Component/Navber/Navber";
import Footer from "../Component/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;