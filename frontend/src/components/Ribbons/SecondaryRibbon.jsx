import React from "react";
import { makeStyles } from "@mui/styles";

function SecondaryRibbon() {
    const classes = makeStyles((theme) => ({
        ribbon: {
            position: "fixed",
            backgroundColor: theme.palette.secondary.main,
            top: 253,
            left: "-140%",
            width: "300%",
            height: "80px",
            transform: "rotate(130deg)",
            zIndex: -1,
        },
    }))();
    return <div className={classes.ribbon} />;
}

export default SecondaryRibbon;
