import styled from "styled-components";
import React from "react";
import logo from "../assets/img/logo.png";
import {IoMenu} from 'react-icons/io5';

export default function TopBar(props) {
    return (
        <Container>
            <div>
                <IoMenu/>
                <img src={logo} />
            </div>
            {props.children}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #FBD743;
    color: #2774BA;
`