import "../assets/styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { useState } from "react";
import HomePage from "./HomePage";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Produto from "./Produto";
import Cart from "./Cart";
import UserContext from "../contexts/UserContext";
import Checkout from "./Checkout";

export default function App() {

    const [token, setToken] = useState("");
    const [name, setName] = useState("");
    const [cart, setCart] = useState([]);
    const [sideBarVisibility, setSideBarVisibility] = useState(false);
    
    const contextValue = { token, setToken, name, setName, sideBarVisibility, setSideBarVisibility, cart, setCart };



    return(
        <UserContext.Provider value={ contextValue } >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/product/:idProduct" element={<Produto />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}