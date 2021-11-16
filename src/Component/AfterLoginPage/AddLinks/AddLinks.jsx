import React from 'react'
import HOC1 from "../../../Common/HOC1.jsx"
import { Grid } from '@material-ui/core';
import "./AddLinks.css"

import user from "../../images/user.jpg"

function AddLinks() {
    return (
        <>
            <div className="home_background_color">
                <div className="padding_from_top">
                    <Grid className="Component_main_grid p-3 ">
                        <Grid item md={8} className="p-3">
                            <div className="border_right_links">
                               
                            </div>
                        </Grid>
                        <Grid item md={4} className="p-3">
                            <div className="phoneborder_afterlogin p-2">
                                <div className="text-center">
                                    <div className="mt-3">
                                        <img src={user} alt="" className="user_Image" />
                                    </div>
                                    <div>User Name</div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default HOC1(AddLinks)
