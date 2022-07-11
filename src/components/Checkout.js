import TopBar from "./TopBar";
import SideBar from "./SideBar/SideBar";
import { useEffect, useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {IoCart} from 'react-icons/io5';


export default function Checkout() {

    const navigate = useNavigate();
    const {sideBarVisibility, setSideBarVisibility} = useContext(UserContext);

    useEffect( async () => {
          const products = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/checkout`);
        }, []);

    return(
        <h1>Checkout</h1>
    );

}