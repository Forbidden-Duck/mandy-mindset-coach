import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AnimatePresence, motion } from "framer-motion";
import fontawesome from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faHouse,
    faCircleInfo,
    faCircleQuestion,
    faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import NavButton from "./NavButton";

const MIN_NAV_HEIGHT = 88;
const LOGO_WIDTH = 200;
const LOGO_RATIO = 0.60606060606060606060606060606061;

/**
 *
 * @param {{ isMobile: boolean, animation: object, stop: boolean }} props
 * @returns
 */
function DesktopNavbar(props) {
    const classes = makeStyles((theme) => ({
        toolbar: {
            justifyContent: "space-between",
            height: MIN_NAV_HEIGHT,
            background: "#fff",
            overflow: "hidden",
        },
        logo: {
            backgroundImage: "url(resources/mandy-logo-transparent.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: LOGO_WIDTH,
            height: LOGO_WIDTH * LOGO_RATIO,
            transform: "translateY(0px)",
            "&:hover": {
                cursor: "pointer",
            },
        },
        menuButtons: {
            marginRight: theme.spacing(1),
            display: "flex",
            minHeight: MIN_NAV_HEIGHT,
            alignItems: "center",
            "& *:not(:last-child)": {
                marginRight: theme.spacing(3),
            },
        },
        mobileMenuButtons: {
            margin: theme.spacing(0.7),
        },
    }))();

    const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <AnimatePresence>
            <motion.div
                {...props.animation}
                animate={props.stop ? "exit" : "animate"}
            >
                <AppBar position="static">
                    <Toolbar className={classes.toolbar}>
                        <div
                            className={classes.logo}
                            onClick={() => navigate("/")}
                        />
                        {props.isMobile ? (
                            <>
                                <IconButton
                                    onClick={handleDrawer}
                                    sx={{ color: "#2f2f2f" }}
                                >
                                    <FontAwesomeIcon icon={faBars} />
                                </IconButton>
                                <Drawer
                                    anchor="right"
                                    open={isDrawerOpen}
                                    onClose={closeDrawer}
                                >
                                    <div className={classes.mobileMenuButtons}>
                                        <MenuItem
                                            onClick={closeDrawer}
                                            component={Link}
                                            to="/"
                                        >
                                            <Typography variant="body1">
                                                <FontAwesomeIcon
                                                    size="lg"
                                                    icon={faHouse}
                                                />
                                                &nbsp; Home
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={closeDrawer}
                                            component={Link}
                                            to="/about"
                                        >
                                            <Typography variant="body1">
                                                <FontAwesomeIcon
                                                    size="lg"
                                                    icon={faCircleInfo}
                                                />
                                                &nbsp; About
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={closeDrawer}
                                            component={Link}
                                            to="/faq"
                                        >
                                            <Typography variant="body1">
                                                <FontAwesomeIcon
                                                    size="lg"
                                                    icon={faCircleQuestion}
                                                />
                                                &nbsp; FAQ
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={closeDrawer}
                                            component={Link}
                                            to="/services"
                                        >
                                            <Typography variant="body1">
                                                <FontAwesomeIcon
                                                    size="lg"
                                                    icon={faShoppingBag}
                                                />
                                                &nbsp; Services
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={closeDrawer}
                                            component={Link}
                                            to="/book"
                                        >
                                            <Typography variant="body1">
                                                {/* Fontawesome pro icon message-dollar */}
                                                <svg
                                                    style={{ width: 20 }}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 640 512"
                                                >
                                                    <path d="M576 128H448v128c0 52.87-43.13 95.99-96 95.99l-96 .0013v31.98c0 35.25 28.75 63.1 63.1 63.1l125.8-.0073l82.75 62.12C534.9 514.8 544 510.2 544 502.2v-54.24h32c35.25 0 64-28.75 64-63.1V191.1C640 156.7 611.3 128 576 128zM416 256V63.1C416 28.75 387.3 0 352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.2 28.75 320 64 320l32 .0106v54.25c0 7.998 9.125 12.62 15.5 7.875l82.75-62.12L352 319.9C387.3 320 416 291.2 416 256zM269.8 202.3C266.2 223.2 250.4 236.1 228 241.7V252c0 11.03-8.953 20-20 20s-20-8.969-20-20V241.2c-8.682-1.922-17.3-4.723-25.06-7.512l-4.266-1.5C148.3 228.5 142.8 217.1 146.5 206.7c3.688-10.41 15.11-15.81 25.52-12.22l4.469 1.625c7.844 2.812 16.72 6 23.66 7.031C213.8 205.3 229 203.3 230.4 195.5C231.3 190.4 231.8 187.6 202.5 179.2L196.7 177.5c-17.33-5.094-57.92-17-50.52-59.84C149.8 96.75 165.6 82.76 188 77.99V68c0-11.03 8.953-20 20-20s20 8.969 20 20v10.63c5.453 1.195 11.34 2.789 18.56 5.273C257 87.53 262.5 98.94 258.9 109.4C255.3 119.8 243.8 125.3 233.4 121.7c-5.859-2.031-12-4-17.59-4.844C202.2 114.8 186.1 116.7 185.6 124.5C184.8 128.1 184.3 132.2 207.1 139.2L213.5 140.8C235.8 147.1 277.3 159 269.8 202.3z" />
                                                </svg>
                                                &nbsp; Book
                                            </Typography>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={closeDrawer}
                                            component={Link}
                                            to="/inquiry"
                                        >
                                            <Typography variant="body1">
                                                {/* FontAwesome pro icon messages-question */}
                                                <svg
                                                    style={{ width: 20 }}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 640 512"
                                                >
                                                    <path d="M576 128H448v128c0 52.87-43.13 95.99-96 95.99l-96 .0013v31.98c0 35.25 28.75 63.1 63.1 63.1l125.8-.0073l82.75 62.12C534.9 514.8 544 510.2 544 502.2v-54.24h32c35.25 0 64-28.75 64-63.1V191.1C640 156.7 611.3 128 576 128zM416 256V63.1C416 28.75 387.3 0 352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.2 28.75 320 64 320l32 .0106v54.25c0 7.998 9.125 12.62 15.5 7.875l82.75-62.12L352 319.9C387.3 320 416 291.2 416 256zM208.5 268.5C194.7 268.5 184 257.8 184 244c0-13.77 10.71-24.47 24.47-24.47c13.77 0 24.47 10.71 24.47 24.47C232.9 257.8 222.2 268.5 208.5 268.5zM261.1 158.9l-35.18 21.41v1.529c0 9.941-8.412 18.35-18.35 18.35S190.1 191.8 190.1 181.9V169.6c0-6.117 3.059-12.23 9.176-16.06l43.59-26c5.354-3.059 8.412-8.412 8.412-14.53c0-9.178-7.648-16.82-16.82-16.82H194.7c-9.178 0-16.82 7.646-16.82 16.82c0 9.941-8.412 18.35-18.35 18.35c-9.941 0-18.35-8.412-18.35-18.35c0-29.82 23.71-53.53 53.53-53.53h39.76C264.3 59.53 288 83.23 288 113.1C288 131.4 278.1 149 261.1 158.9z" />
                                                </svg>
                                                &nbsp; Inquiry
                                            </Typography>
                                        </MenuItem>
                                    </div>
                                </Drawer>
                            </>
                        ) : (
                            <div className={classes.menuButtons}>
                                <NavButton to="/" minHeight={MIN_NAV_HEIGHT}>
                                    Home
                                </NavButton>
                                <NavButton
                                    to="/about"
                                    minHeight={MIN_NAV_HEIGHT}
                                >
                                    About
                                </NavButton>
                                <NavButton to="/faq" minHeight={MIN_NAV_HEIGHT}>
                                    FAQ
                                </NavButton>
                                <NavButton
                                    to="/services"
                                    minHeight={MIN_NAV_HEIGHT}
                                >
                                    Services
                                </NavButton>
                                <NavButton
                                    to="/book"
                                    minHeight={MIN_NAV_HEIGHT}
                                >
                                    Book
                                </NavButton>
                                <NavButton
                                    to="/inquiry"
                                    minHeight={MIN_NAV_HEIGHT}
                                >
                                    Inquiry
                                </NavButton>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </motion.div>
        </AnimatePresence>
    );
}

export default DesktopNavbar;
