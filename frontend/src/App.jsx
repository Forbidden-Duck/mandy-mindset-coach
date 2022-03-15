import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// TODO setup app route

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
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
