import React, { useState } from 'react';

//material ui appbar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

//css file
import "./Header.css";

//logo
import logo from "./logo.png";

const Header = (props) => {

    /*local state */
    const [Sidebar, setSidebar] = useState(false);

    /*function to open a sidebar */
    const setLoadingnewside = () => {
        document.getElementById("mySidenav").style.width = "250px";
        setSidebar(true)
    };

    /*function to close a sidebar */
    const Closesidebar = () => {
        document.getElementById("mySidenav").style.width = "0px";
        setSidebar(false)
    }
    const redirecthome = () => {
        window.location.href = "/home";
    }
    return (
        <div className="topheader">
            <AppBar position="fixed" className="MainHeader">
                <Toolbar className="header_padding">
                    <div>
                        <img src={logo} alt="" style={{ height: "55px" }} onClick={redirecthome} />
                    </div>
                    <div className="header_grow" />
                    <div className="header_links">
                        <span className="header_link_color" onClick={() => props.history.push("/feature")}>Features</span>
                        <span className="header_link_color">Pricing</span>
                        <span className="header_link_color" onClick={() => props.history.push("/blog")}>Blog</span>
                        <span className="header_link_color" onClick={() => props.history.push("/gallery")}>Gallery</span>
                        <span className="header_link_color">English</span>
                        <span className="header_link_color">
                            <button className="header_button">Login</button>
                        </span>
                        <span className="header_link_color">
                            <button className="header_button">Sign Up</button>
                        </span>
                    </div>
                    <div className="mobile_Burger_Menu">
                        <span
                            className="logout_Pointer_cursor mr-3 text-right mt-2"
                            onClick={!Sidebar ? setLoadingnewside : Closesidebar}
                        >
                            <i class="fa fa-bars"></i>
                        </span>

                        <div id="mySidenav" className="sidenav">
                            <div className="cross_icon_style">
                                <i
                                    class="fa fa-times cursor"
                                    onClick={() => {
                                        document.getElementById("mySidenav").style.width =
                                            "0px";
                                        setSidebar(false);
                                    }}
                                ></i>
                            </div>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/feature")}>
                                Features
                            </span>
                            <span className="logout_Pointer_cursor">
                                Pricing
                            </span>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/blog")}>
                                Blog
                            </span>
                            <span className="logout_Pointer_cursor" onClick={() => props.history.push("/gallery")}>
                                Gallery
                            </span>
                            <span className="logout_Pointer_cursor">
                                English
                            </span>
                            <span className="logout_Pointer_cursor">
                                Login
                            </span>
                            <span className="logout_Pointer_cursor">
                                SignUp
                            </span>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
