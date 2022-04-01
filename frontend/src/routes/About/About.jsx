import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

function About() {
    const classes = makeStyles((theme) => ({
        container: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
        },
    }))();

    return (
        <div className={classes.container}>
            <Typography>Test content</Typography>
        </div>
    );
}

export default About;
