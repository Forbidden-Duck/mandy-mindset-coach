import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { AnimatePresence } from "framer-motion";

import DefaultRoute from "./DefaultRoute";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import Home from "../../routes/Home/Home";
import About from "../../routes/About/About";
import FAQ from "../../routes/FAQ/FAQ";
import Error404 from "../../routes/Errors/404";

import slideDown from "../../animations/slideDown";
import slideUp from "../../animations/slideUp";

const routesDir = [
    { path: "/", element: Home, routeComponent: DefaultRoute },
    { path: "/about", element: About, routeComponent: DefaultRoute },
    { path: "/faq", element: FAQ, routeComponent: DefaultRoute },
];

function AnimatedRoutes() {
    const isMobile = useMediaQuery("(max-width: 650px)");
    const location = useLocation();
    const pathsAvailable = routesDir.map((routeProps) => routeProps.path);

    const animation = {
        nav: {
            variants: slideDown(false),
            initial: "initial",
            animate: "animate",
            transition: { duration: 0.5 },
        },
        footer: {
            variants: slideUp(false),
            initial: "initial",
            animate: "animate",
            transition: { duration: 0.5 },
        },
    };

    return (
        <>
            <Navbar
                key="navbar"
                isMobile={isMobile}
                animation={animation.nav}
                stop={!pathsAvailable.includes(location.pathname)}
            />
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    {routesDir.map((routeProps) => (
                        <Route
                            key={`path/${routeProps.path}`}
                            path={routeProps.path}
                            element={
                                <routeProps.routeComponent
                                    component={routeProps.element}
                                    paths={pathsAvailable}
                                />
                            }
                        />
                    ))}
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </AnimatePresence>
            <Footer
                key="footer"
                animation={animation.footer}
                stop={!pathsAvailable.includes(location.pathname)}
            />
        </>
    );
}

export default AnimatedRoutes;
