import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/Routes/AnimatedRoutes";

const PRELOAD_IMAGE_URLS = [
    "resources/mandy-portrait.jpg",
    "resources/thryve-full-transparent.png",
    "resources/thryve-full-white.png",
    "resources/thryve-logo-transparent.png",
    "resources/thryve-logo-white.png",
    "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822__340.jpg",
    "https://cdn.pixabay.com/photo/2018/03/03/20/02/laptop-3196481__340.jpg",
    "https://cdn.pixabay.com/photo/2016/08/23/12/37/files-1614223__340.jpg",
    "https://cdn.pixabay.com/photo/2016/08/29/08/55/work-1627703__340.jpg",
    "https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333__480.jpg",
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
