import React, { useState } from 'react';

//material ui appbar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

//css file
import "./Header.css";

//logo
import logo from "./logo.png";

const HeaderAfterLogin = (props) => {

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

    return (
        <div className="topheader">
            <AppBar position="fixed" className="MainHeader">
                <Toolbar className="header_padding">
                    <div>
                        <img src={logo} alt="" style={{ height: "55px" }} />
                    </div>
                    <div className="header_grow" />
                    <div className="header_links">
                        <span className="header_link_color">Links</span>
                        <span className="header_link_color">Styles</span>
                        <span className="header_link_color">Statistics</span>
                        <span className="header_link_color">Setting</span>
                        <span className="header_link_color">Free Trail</span>
                        <span className="header_link_color">
                            <div className="dropdown">
                                <span><span className="user_image p-2 mr-2">PR</span>Profile Name</span>
                                <div className="dropdown-content">

                                    <div className="mt-3" >Profile Title</div>
                                    <hr />
                                    <div className="mt-1" onClick={() => props.history.push("/my-account")}>Account</div>
                                    <div className="mt-1" >Billing</div>
                                    <div className="mt-1" onClick={() => {
                                        localStorage.clear();
                                        window.location.href = "/home"
                                    }}>Logout</div>
                                </div>
                            </div>


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
                            <span className="logout_Pointer_cursor">
                                Links
                            </span>
                            <span className="logout_Pointer_cursor">
                                Styles
                            </span>
                            <span className="logout_Pointer_cursor">
                                Statistics
                            </span>
                            <span className="logout_Pointer_cursor">
                                Setting
                            </span>
                            <span className="logout_Pointer_cursor">
                                Free Trail
                            </span>

                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default HeaderAfterLogin