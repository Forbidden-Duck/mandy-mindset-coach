import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

import fadeInOut from "../../animations/fadeInOut";
import slideLeft from "../../animations/slideLeft";
import slideUp from "../../animations/slideUp";

function Error404() {
    const classes = makeStyles((theme) => ({
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            height: "100%",
            width: "100%",
            overflow: "hidden",
            "& > *:last-child": {
                marginTop: "0.8rem",
            },
        },
        group: {
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
        },
        maxWidth: {
            width: "100%",
        },
    }))();

    const h1Sx = {
        fontSize: "clamp(0rem, 12.2vw, 6rem)",
    };
    const h4Sx = {
        fontSize: "clamp(0rem, 4.3vw, 2.125rem)",
    };
    const h5Sx = {
        fontSize: "clamp(0rem, 3.03vw, 1.5rem)",
    };

    const theme = useTheme();

    return (
        <div className={classes.container}>
            <motion.div
                className={`${classes.group} ${classes.shake}`}
                {...{
                    ...fadeInOut(),
                    animate: {
                        opacity: 1,
                        x: [0, -20, 20, -20, 20, 0],
                        transition: {
                            duration: 0.5,
                            x: {
                                duration: 0.6,
                            },
                        },
                    },
                }}
            >
                <Typography
                    variant="h1"
                    color="primary.dark"
                    fontWeight={500}
                    sx={h1Sx}
                >
                    Opps!
                </Typography>
                <Typography
                    variant="h1"
                    color="secondary.dark"
                    fontWeight={500}
                    sx={{
                        marginLeft: "1rem",
                        padding: "0rem 0.5rem",
                        backgroundColor: "secondary.light",
                        ...h1Sx,
                    }}
                >
                    404
                </Typography>
            </motion.div>
            <motion.div
                className={classes.maxWidth}
                {...slideLeft()}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <Typography variant="h4" fontWeight={300} sx={h4Sx}>
                    Sorry, I couldn't find the page you were looking for
                </Typography>
            </motion.div>
            <motion.div
                className={classes.maxWidth}
                {...slideLeft()}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <Typography variant="h5" fontWeight={100} sx={h5Sx}>
                    Are you sure the URL exists?
                </Typography>
            </motion.div>
            <motion.div
                {...slideUp(false, true, "vw")}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <Button
                    variant="outlined"
                    color="primary"
                    size="medium"
                    component={Link}
                    to="/"
                >
                    Go home
                </Button>
            </motion.div>
        </div>
    );
}

export default Error404;
