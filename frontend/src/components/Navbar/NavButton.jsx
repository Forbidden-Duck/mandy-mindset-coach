import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const BUTTON_ACTIVE_COLOUR = "#2f2f2f";
const BUTTON_INACTIVE_COLOUR = "#858585";

/**
 *
 * @param {{ to: string, minHeight?: number }} props
 */
function NavButton(props) {
    const location = useLocation();
    const navigate = useNavigate();

    const classes = makeStyles((theme) => ({
        container: {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            minHeight: props.minHeight || "initial",
            "&:hover": {
                cursor: "pointer",
            },
        },
        clearText: {
            textDecoration: "none",
        },
        navButton: {
            color: `${
                location.pathname === props.to
                    ? BUTTON_ACTIVE_COLOUR
                    : BUTTON_INACTIVE_COLOUR
            }`,
            userSelect: "none",
            transition: "color 0.2s ease-in-out",
        },
        animateBox: {
            position: "absolute",
            width: `${location.pathname === props.to ? "100%" : "0"}`,
            height: "3px",
            background: "black",
            transform: "translateY(-1.2rem)",
            transition: "width 0.5s ease-in-out",
        },
    }))();

    const textRef = useRef(null);
    const animationBox = useRef(null);
    const onMouseEnter = () => {
        if (location.pathname === props.to) return;
        animationBox.current.style.width = "100%";
        textRef.current.style.color = BUTTON_ACTIVE_COLOUR;
    };
    const onMouseLeave = () => {
        if (location.pathname === props.to) return;
        animationBox.current.style.width = "0";
        textRef.current.style.color = BUTTON_INACTIVE_COLOUR;
    };
    const onClick = () => {
        navigate(props.to);
    };

    useEffect(() => {
        if (location.pathname === props.to) {
            animationBox.current.style.width = "100%";
            textRef.current.style.color = BUTTON_ACTIVE_COLOUR;
        } else {
            animationBox.current.style.width = "0";
            textRef.current.style.color = BUTTON_INACTIVE_COLOUR;
        }
    }, [location]);

    return (
        <div
            className={classes.container}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className={classes.animateBox} ref={animationBox} />
            <Typography
                className={`${classes.clearText} ${classes.navButton}`}
                variant="body1"
                ref={textRef}
            >
                {props.children}
            </Typography>
        </div>
    );
}

export default NavButton;
