import stylesBigLayout from "./biglayout.module.css"

import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function BigLayout() {
    return (
        <div className={stylesBigLayout.container}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default BigLayout;