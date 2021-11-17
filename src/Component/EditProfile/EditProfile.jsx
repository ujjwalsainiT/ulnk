import React from 'react'
import HOC from "../../Common/HOC";
import { Card } from "@material-ui/core";

function EditProfile() {
    return (
        <>
            <div className="home_background_color">
                <div className="content_padding">
                    <Card className="pt-2 pb-2 Card_shadow  mt-2">

                    </Card>
                </div>
            </div>

        </>
    )
}

export default HOC(EditProfile)
