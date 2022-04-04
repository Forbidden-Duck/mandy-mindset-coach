import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import fadeInOut from "../../animations/fadeInOut";

function About() {
    const classes = makeStyles((theme) => ({
        container: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
        },
    }))();

    return (
        <motion.div className={classes.container} {...fadeInOut()}>
            <Typography>Test content</Typography>
        </motion.div>
    );
}

export default About;
