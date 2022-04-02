import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

/**
 *
 * @param {{element?: React.ReactNode, component?: JSX.Element}} props
 */
function DefaultRoute(props) {
    const isMobile = useMediaQuery("(max-width: 600px)");

    return (
        <>
            <Navbar isMobile={props.isMobile} />
            {!!props.element && props.element}
            {!!props.component && <props.component />}
            <Footer />
        </>
    );
}

export default DefaultRoute;
