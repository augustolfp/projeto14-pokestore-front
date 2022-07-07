import "../assets/styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./HomePage/HomePage";
import UserContext from "../contexts/UserContext";

export default function App() {

    const contextValue = {};

    return(
        <UserContext.Provider value={ contextValue } >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}