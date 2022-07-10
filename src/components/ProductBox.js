import styled from "styled-components";
import React from "react";

export default function ProductBox(props) {
    return (
        <Container>
            <PhotoBackground>
                <img src={props.photo} />
            </PhotoBackground>
            <h2>{props.name}</h2>
            <h3>R$ {props.price}</h3>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 184px;
    width: 160px;
`

const PhotoBackground = styled.div`
    width: 156px;
    height: 128px;
    border-radius: 16px;
    background-color: #FDEFB4;
`