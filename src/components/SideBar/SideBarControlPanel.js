import styled from "styled-components";
import React from "react";
import {IoPersonCircleOutline, IoSettings, IoBag, IoCart, IoCloseCircle} from 'react-icons/io5';

export default function SideBarControlPanel() {
    return (
        <Container>
            <LoginBox>
                <div>
                    <IoPersonCircleOutline size={32}/>
                    <h3>Entre ou cadastre-se</h3>
                </div>
                <IoCloseCircle/>
            </LoginBox>
            <OptionsBox>
                <div>
                    <IoSettings/>
                    <h3>Minha conta</h3>
                </div>
                <div>
                    <IoBag/>
                    <h3>Meus pedidos</h3>
                </div>
                <div>
                    <IoCart/>
                    <h3>Meu carrinho</h3>
                </div>
            </OptionsBox>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    background-color: #FBD743;
    width: 100%;
    height: 92px;
    font-family: 'Inter', sans-serif;
`

const LoginBox = styled.div`
    display: flex;
    color: #2774BA;
    align-items: center;
    justify-content: space-between;
    font-size: 14;
    font-weight: 700;
    size: 32px;

    div {
        display: flex;
        align-items: center;

        * {
            margin-left: 8px;
        }
    }

    > svg {
        width: 30px;
        height: 30px;
    }
`

const OptionsBox = styled.div`
    font-weight: 600;
    font-size: 10px;
    color: #2774BA;
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    div {
        display: flex;
        align-items: center;

        h3 {
            margin-left: 4px;
        }

        > svg {
            width: 20px;
            height: 20px;
        }
    }
`