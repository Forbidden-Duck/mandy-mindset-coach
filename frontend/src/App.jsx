import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

import Navbar from "./components/Navbar/Navbar";
import DefaultRoute from "./components/Routes/DefaultRoute";

import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Error404 from "./routes/Errors/404";

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
                <Route path="/" element={<DefaultRoute component={Home} />} />
                <Route
                    path="/about"
                    element={<DefaultRoute component={About} />}
                />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    );
}

export default App;
