import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

function Error404() {
    const classes = makeStyles((theme) => ({
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            "& > *:last-child": {
                marginTop: "0.8rem",
            },
        },
        group: {
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
        },
        shake: {
            animation: "$shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
            perspective: "1000px",
        },
        "@keyframes shake": {
            "10%, 90%": {
                transform: "translate3d(-2px, 0, 0)",
            },

            "20%, 80%": {
                transform: "translate3d(3px, 0, 0)",
            },

            "30%, 50%, 70%": {
                transform: "translate3d(-5px, 0, 0)",
            },

            "40%, 60%": {
                transform: "translate3d(5px, 0, 0)",
            },
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
            <div className={`${classes.group} ${classes.shake}`}>
                <Typography
                    variant="h1"
                    color="primary.main"
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
            </div>
            <Typography variant="h4" fontWeight={300} sx={h4Sx}>
                Sorry, I couldn't find the page you were looking for
            </Typography>
            <Typography variant="h5" fontWeight={100} sx={h5Sx}>
                Are you sure the URL exists?
            </Typography>
            <Button variant="outlined" size="medium" component={Link} to="/">
                Go home
            </Button>
        </div>
    );
}

export default Error404;
