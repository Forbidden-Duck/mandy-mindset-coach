import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";

import DefaultRoute from "./components/Routes/DefaultRoute";

import Home from "./routes/Home/Home";

import Error404 from "./routes/Errors/404";

const PRELOAD_IMAGE_URLS = [
    "resources/mandy-portrait.jpg",
    "resources/thryve-full-transparent.png",
    "resources/thryve-full-white.png",
    "resources/thryve-logo-transparent.png",
    "resources/thryve-logo-white.png",
];

function App() {
    const isMobile = useMediaQuery("(max-width: 600px)");

    // Have the browser preload the images
    useEffect(() => {
        PRELOAD_IMAGE_URLS.forEach((url) => {
            new Image().src = url;
        });
    }, []);

    // TODO 404 page
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <DefaultRoute isMobile={isMobile} element={<Home />} />
                    }
                />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    );
}

export default App;
