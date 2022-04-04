import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import DefaultRoute from "./DefaultRoute";

import Home from "../../routes/Home/Home";
import About from "../../routes/About/About";
import Error404 from "../../routes/Errors/404";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence initial={false} exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<DefaultRoute component={Home} />} />
                <Route
                    path="/about"
                    element={<DefaultRoute component={About} />}
                />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
