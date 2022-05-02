import React from "react";
import { makeStyles } from "@mui/styles";

function SecondaryRibbon() {
    const classes = makeStyles((theme) => ({
        ribbon: {
            position: "fixed",
            backgroundColor: theme.palette.primary.main,
            top: 129,
            left: "-90%",
            width: "200%",
            height: "80px",
            transform: "rotate(130deg)",
            zIndex: -1,
        },
    }))();
    return <div className={classes.ribbon} />;
}

export default SecondaryRibbon;
