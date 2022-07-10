import styled from "styled-components";
import React from "react";
import {IoPersonCircleOutline, IoSettings, IoBag, IoCart} from 'react-icons/io5';

export default function SideBarControlPanel() {
    return (
        <Container>
            <LoginBox>
                <IoPersonCircleOutline/>
                Entre ou cadastre-se
            </LoginBox>
            <OptionsBox>
                <div>
                    <IoSettings/>
                    Minha conta
                </div>
                <div>
                    <IoBag/>
                    Meus pedidos
                </div>
                <div>
                    <IoCart/>
                    Meu carrinho
                </div>
            </OptionsBox>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FBD743;
    width: 100%;
    height: 92px;
`

const LoginBox = styled.button`
    display: flex;
    color: #2774BA;
`

const OptionsBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    div {
        display: flex;
    }
`