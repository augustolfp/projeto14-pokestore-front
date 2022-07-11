import "../assets/styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { useState } from "react";
import HomePage from "./HomePage";
import Login from "./Login";
import Cadastro from "./Cadastro";
import UserContext from "../contexts/UserContext";

export default function App() {

    const [token, setToken] = useState("");
    const [name, setName] = useState("");
    const [sideBarVisibility, setSideBarVisibility] = useState(false);
    const contextValue = { token, setToken, name, setName, sideBarVisibility, setSideBarVisibility };


    return(
        <UserContext.Provider value={ contextValue } >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}