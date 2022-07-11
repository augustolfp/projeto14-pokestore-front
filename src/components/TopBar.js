import styled from "styled-components";
import React, { useContext } from "react";
import logo from "../assets/img/logo.png";
import {IoMenu} from 'react-icons/io5';
import UserContext from "../contexts/UserContext";

export default function TopBar(props) {
    const {sideBarVisibility, setSideBarVisibility} = useContext(UserContext);
    return (
        <Container>
            <div>
                <HamburgerMenu onClick={() => setSideBarVisibility(!sideBarVisibility)}><IoMenu/></HamburgerMenu>
                <img src={logo} />
            </div>
            {props.children}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FBD743;
    color: #2774BA;
    height: 64px;

    div {
        display: flex;
        align-items: center;

        * {
            margin-left: 8px;
        }
    }
`

const HamburgerMenu = styled.div`
    color: #2774BA;

    > svg {
            width: 32px;
            height: 32px;
        }
`