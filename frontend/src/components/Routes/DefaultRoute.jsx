import React from "react";
import { Route, Navigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

/**
 *
 * @param {{isMobile: boolean, element: React.ReactNode}} props
 */
function DefaultRoute(props) {
    return (
        <>
            <Navbar isMobile={props.isMobile} />
            {props.element}
            <Footer />
        </>
    );
}

export default DefaultRoute;
