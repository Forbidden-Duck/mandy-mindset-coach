import React from "react";
import { Link } from "react-router-dom";
import { Typography, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";

function Footer() {
    const classes = makeStyles((theme) => ({
        container: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "column",
            boxShadow:
                "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
            padding: "0.8rem 0rem",
        },
        group: {
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
        },
        link: {
            color: "#558db5",
            textDecoration: "none",
            cursor: "pointer",
        },
    }))();

    return (
        <div className={classes.container}>
            <div className={classes.group}>
                <Typography
                    className={classes.link}
                    variant="body2"
                    component={Link}
                    to="/termsofservice"
                >
                    Terms of Service
                </Typography>
                <Typography variant="body2">&nbsp;•&nbsp;</Typography>
                <Typography
                    className={classes.link}
                    variant="body2"
                    component={Link}
                    to="/privacypolicy"
                >
                    Privacy Policy
                </Typography>
            </div>
            <Typography variant="body2">
                Copyright © 2022 Thryve Life Coaching. All rights reserved.
            </Typography>
        </div>
    );
}

export default Footer;
