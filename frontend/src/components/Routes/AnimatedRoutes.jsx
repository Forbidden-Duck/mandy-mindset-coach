import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import DefaultRoute from "./DefaultRoute";

import Home from "../../routes/Home/Home";
import About from "../../routes/About/About";
import Error404 from "../../routes/Errors/404";

const routesDir = [
    { path: "/", element: Home, routeComponent: DefaultRoute },
    { path: "/about", element: About, routeComponent: DefaultRoute },
];

function AnimatedRoutes() {
    const location = useLocation();
    const pathsAvailable = routesDir.map((routeProps) => routeProps.path);

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                {routesDir.map((routeProps) => (
                    <Route
                        key={routeProps.path}
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
    );
}

export default AnimatedRoutes;
