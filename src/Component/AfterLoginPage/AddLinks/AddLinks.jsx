import React from 'react'
import HOC1 from "../../../Common/HOC1.jsx"
import { Grid, Button } from '@material-ui/core';
import "./AddLinks.css"

import user from "../../images/user.jpg"

//tab pannel
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AddlinkExamples from './AddlinkExamples.jsx';

function AddLinks() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div className="home_background_color">
                <div className="padding_from_top">
                    <Grid className="Component_main_grid p-3 ">
                        <Grid item md={7} className="p-3">
                            <div className="border_right_links">
                                <div className="tabs text-center userdaboard_color">
                                    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                                        <Tab label="Example" {...a11yProps(0)} className="button_login_decoration  tabs_text_formatting" />
                                        <Tab label="Link" {...a11yProps(1)} className="button_login_decoration  tabs_text_formatting" />
                                        <Tab label="Icons" {...a11yProps(2)} className="button_login_decoration  tabs_text_formatting" />
                                    </Tabs>
                                </div>

                                <div className="mt-1">
                                    {/* first tab data*/}
                                    <div className="tab_pannel_data">
                                        <TabPanel value={value} index={0}>
                                            <AddlinkExamples />
                                        </TabPanel>
                                    </div>

                                    {/* second tab data*/}
                                    <TabPanel value={value} index={1}>
                                        aNNUALLY
                                    </TabPanel>

                                    {/* third tab data*/}
                                    <TabPanel value={value} index={3}>
                                        aNNUALLY
                                    </TabPanel>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={5} className="p-3">
                            <div className="p-2 userdaboard_color d-flex justify-content-between">
                                <div className="add_link_heading">MY ULNK HUB LINK: <span className="link_color">abcd.bio/userprofile</span></div>
                                <div className="add_link_heading">

                                    <span>
                                        <Button
                                            variant="contained"
                                            className="button_formatting mr-2"
                                        >
                                            Edit
                                        </Button>
                                    </span>
                                    <span>
                                        <Button
                                            variant="contained"
                                            className="button_formatting"
                                        >
                                            Copy
                                        </Button>
                                    </span>
                                </div>

                            </div>

                            <div className="phoneborder_afterlogin p-2 mt-5">
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
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
export default HOC1(AddLinks)
