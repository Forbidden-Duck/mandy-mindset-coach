import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/Routes/AnimatedRoutes";

const PRELOAD_IMAGE_URLS = [
    "resources/mandy-portrait.jpg",
    "resources/thryve-full-transparent.png",
    "resources/thryve-full-white.png",
    "resources/thryve-logo-transparent.png",
    "resources/thryve-logo-white.png",
];

function App() {
    // Have the browser preload the images
    useEffect(() => {
        PRELOAD_IMAGE_URLS.forEach((url) => {
            new Image().src = url;
        });
    }, []);

    return (
        <Router>
            <AnimatedRoutes />
        </Router>
    );
}

export default App;
