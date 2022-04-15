import React from "react";
import { Route, Navigate, useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import slideDown from "../../animations/slideDown";
import slideUp from "../../animations/slideUp";

/**
 *
 * @param {{element?: React.ReactNode, component?: JSX.Element, paths?: string[]}} props
 */
function DefaultRoute(props) {
    const isMobile = useMediaQuery("(max-width: 650px)");
    const location = useLocation();

    // If the path doesn't exist remove animations from nav and footer
    let animation = {
        nav: { ...slideDown(false), transition: { duration: 0.4 } },
        footer: { ...slideUp(false), transition: { duration: 0.4 } },
    };
    if (props.paths.includes(location.pathname))
        animation = { nav: {}, footer: {} };

    return (
        <>
            <Navbar isMobile={isMobile} animation={animation.nav} />
            {!!props.element && props.element}
            {!!props.component && <props.component />}
            <Footer animation={animation.footer} />
        </>
    );
}

export default DefaultRoute;
