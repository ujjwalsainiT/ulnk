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
                            <div className="d-flex">
                                <span className="dropdown_user_profile p-1">PR</span>
                                <span className="pl-2 pr-2 mt-1">
                                    <div><strong>user profile</strong></div>

                                </span>
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
