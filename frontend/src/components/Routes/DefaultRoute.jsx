import React from "react";
import { Route, Navigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

/**
 *
 * @param {{isMobile: boolean, element: React.ReactNode}} props
 */
function DefaultRoute(props) {
    return (
        <>
            <Navbar isMobile={props.isMobile} />
            {props.element}
        </>
    );
}

export default DefaultRoute;
