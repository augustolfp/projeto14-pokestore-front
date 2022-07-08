import "../assets/styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { useState } from "react";
import HomePage from "./HomePage/HomePage";
import Login from "./Login";
import UserContext from "../contexts/UserContext";

export default function App() {

    const [token, setToken] = useState("");
    const [name, setName] = useState("");
    const contextValue = { token, setToken, name, setName };


    return(
        <UserContext.Provider value={ contextValue } >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}