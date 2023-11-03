import React from "react";
import "../Css/layout.css"
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <div className="layout">
            <Header />
            <Outlet/>
        </div>
    )
}
export default Layout;