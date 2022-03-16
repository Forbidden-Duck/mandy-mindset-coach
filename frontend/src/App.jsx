import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
// TODO setup app route

// TODO downscale images for better performance
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
            <Navbar isMobile={isMobile} />
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
