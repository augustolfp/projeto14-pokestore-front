import styled from "styled-components";
import React from "react";
import {IoMenu} from 'react-icons/io5';
import SideBarControlPanel from "./SideBarControlPanel";

export default function SideBar() {
    return (
        <Container>
        <SideBarControlPanel />
            <h2>alguma coisa</h2>
            <h2>Outra coisa</h2>
        </Container>
    );
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    width: 292px;
    height: 100vh;
`