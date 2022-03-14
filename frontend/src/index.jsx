import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reducer from "./store";

import { ThemeProvider, createTheme } from "@mui/material/styles";

// Message for those who are looking at the console
console.log("Welcome to the console!");

const store = configureStore({ reducer });
const theme = createTheme({});

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </StrictMode>,
    document.getElementById("root")
);
