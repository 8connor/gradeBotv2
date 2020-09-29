import React from "react";
import Grid from "@material-ui/core/Grid";
import { PromiseProvider } from "mongoose";

function Body(props){
    return(
        <Grid container justify="center" className="main">
            <Grid item>
                {props.children}
            </Grid>
        </Grid>
    )
}

export default Body