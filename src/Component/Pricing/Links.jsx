import React from 'react'
import { Grid, Card } from '@material-ui/core';
function Links() {
    const linkArr = [
        { data: "Unlimited Links" },
        { data: "Unlimited Links" },
        { data: "Unlimited Links" },
        { data: "Unlimited Links" },
        { data: "Unlimited Links" },
        { data: "Unlimited Links" },
        { data: "Unlimited Links" },
        { data: "Unlimited Links" },
        { data: "Unlimited Links" },
    ]
    return (
        <>
            <Grid className="Component_main_grid p-2 ">
                <Grid item md={8} >
                    <div className="home_content">LINKS</div>
                </Grid>
                <Grid item md={2} >
                    <div className="Links_content">Free <br />Sign Up for Free</div>
                </Grid>
                <Grid item md={2} >
                    <div className="Links_content">Pro <br /> Join the pro's</div>
                </Grid>
            </Grid>


            <Card className="Card_shadow linksborder">
                {linkArr.map((item, index) => (
                    <div>
                        <Grid className="Component_main_grid p-2 ">
                            <Grid item md={8} >
                                <div className="ml-2">{item.data}</div>
                            </Grid>
                            <Grid item md={2} >
                                <div className="text-center"><i className="fa fa-check" /></div>
                            </Grid>
                            <Grid item md={2} >
                                <div className="text-center"><i className="fa fa-check" /></div>
                            </Grid>
                        </Grid>
                    </div>
                ))}
            </Card>


        </>
    )
}

export default Links
