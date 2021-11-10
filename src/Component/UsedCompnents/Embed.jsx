import React from 'react'
import { Grid } from '@material-ui/core';

import "./Monitize.css";

//used image
import embided from "../images/embided.png"

function Embed() {
    return (
        <>
            <div>
                <Grid className="Component_main_grid p-3 ">
                    <Grid item md={6} className="p-3">
                        <div className="text-center">
                            <img src={embided} alt="" className="image_height" />
                        </div>
                    </Grid>
                    <Grid item md={6} className="p-3">
                        <div className="page_heading">Embed Everywhere</div>
                        <div className="data_fomtting_image mt-5">ULNK helps creators, influencers, entrepreneurs, and brands drive their trafic to 
                        the things they're pomoting, and onnect thirr followers.
                        </div>
                        <div className="text-right mt-3 mb-3">
                            <button className="Home_page_button">Try for Free <i className="fa fa-arrow-right" /></button>
                        </div>
                    </Grid>

                </Grid>


            </div>
        </>
    )
}

export default Embed
