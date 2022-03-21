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
            boxShadow: "0px 1px 15px 0px rgb(0 0 0 / 20%)",
            padding: "0.8rem 0rem",
            marginTop: "auto",
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

    const body2Sx = {
        fontSize: "clamp(0rem, 3vw, 0.875rem)",
    };

    return (
        <div className={classes.container}>
            <div className={classes.group}>
                <Typography
                    className={classes.link}
                    variant="body2"
                    component={Link}
                    to="/termsofservice"
                    sx={body2Sx}
                >
                    Terms of Service
                </Typography>
                <Typography variant="body2" sx={body2Sx}>
                    &nbsp;•&nbsp;
                </Typography>
                <Typography
                    className={classes.link}
                    variant="body2"
                    component={Link}
                    to="/privacypolicy"
                    sx={body2Sx}
                >
                    Privacy Policy
                </Typography>
            </div>
            <div className={classes.group}>
                <Typography variant="body2" sx={body2Sx} color="primary.dark">
                    Copyright © 2022 Thryve Life Coaching.&nbsp;
                </Typography>
                <Typography variant="body2" sx={body2Sx}>
                    Created by&nbsp;
                </Typography>
                <Tooltip title="Click me!">
                    <Typography
                        className={classes.link}
                        variant="body2"
                        sx={body2Sx}
                        color="secondary.dark"
                        onClick={() =>
                            window.open("https://harrisonhoward.xyz/")
                        }
                    >
                        Harrison Howard
                    </Typography>
                </Tooltip>
            </div>
        </div>
    );
}

export default Footer;
