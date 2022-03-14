import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// TODO import reducer from store

import { ThemeProvider, createTheme } from "@mui/styles";

// Message for those who are looking at the console
console.log("Welcome to the console!");

// TODO configure store
const theme = createTheme({});

ReactDOM.render(
    <StrictMode>
        {/* TODO add store to provider */}
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </StrictMode>,
    document.getElementById("root")
);
