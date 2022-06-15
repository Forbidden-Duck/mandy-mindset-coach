import React from "react";
import { Link } from "react-router-dom";
import { Typography, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AnimatePresence, motion } from "framer-motion";

/**
 *
 * @param {{ animation: object, stop: boolean }} props
 * @returns
 */
function Footer(props) {
    const classes = makeStyles((theme) => ({
        container: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: "0px 1px 15px 0px rgb(0 0 0 / 20%)",
            padding: "0.8rem 0rem",
            marginTop: "auto",
            background: "white",
        },
        group: {
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
        },
        link: {
            color: "hsl(205, 39%, 52%)",
            textDecoration: "none",
            cursor: "pointer",
        },
    }))();

    const body2Sx = {
        fontSize: "clamp(0rem, 3vw, 0.875rem)",
    };

    const onLinkMouseEvent = (hsl) => {
        return (evt) => (evt.target.style.color = `hsl(${hsl})`);
    };

    return (
        <AnimatePresence>
            <motion.div
                className={classes.container}
                {...props.animation}
                animate={props.stop ? "exit" : "animate"}
            >
                <div className={classes.group}>
                    <Typography
                        className={classes.link}
                        variant="body2"
                        component={Link}
                        to="/termsofservice"
                        onMouseEnter={onLinkMouseEvent("205, 39%, 37%")}
                        onMouseDown={onLinkMouseEvent("205, 39%, 22%")}
                        onMouseOut={onLinkMouseEvent("205, 39%, 52%")}
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
                        onMouseEnter={onLinkMouseEvent("205, 39%, 42%")}
                        onMouseDown={onLinkMouseEvent("205, 39%, 22%")}
                        onMouseOut={onLinkMouseEvent("205, 39%, 52%")}
                        sx={body2Sx}
                    >
                        Privacy Policy
                    </Typography>
                </div>
                <div className={classes.group}>
                    <Typography
                        variant="body2"
                        sx={body2Sx}
                        color="primary.dark"
                    >
                        Copyright © 2022 Mandy Watene Mindset Coach.&nbsp;
                    </Typography>
                    <Typography variant="body2" sx={body2Sx}>
                        Created by&nbsp;
                    </Typography>
                    <Tooltip title="Click me!" arrow>
                        <Typography
                            className={classes.link}
                            variant="body2"
                            sx={body2Sx}
                            color="secondary.dark"
                            onMouseEnter={onLinkMouseEvent("34, 92%, 32%")}
                            onMouseDown={onLinkMouseEvent("34, 92%, 12%")}
                            onMouseOut={onLinkMouseEvent("34, 92%, 42%")}
                            onClick={() =>
                                window.open("https://harrisonhoward.xyz/")
                            }
                        >
                            Harrison Howard
                        </Typography>
                    </Tooltip>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default Footer;
