import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

export default function Produto(){

    const {idProduct} = useParams();
    const [product, setProduct] = useState({})
    const { cart, setCart } = useContext(UserContext)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        (async () => {
            try {
          const products = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/products/${idProduct}`);
          setProduct(products.data)
          console.log(product)
            }
            catch(err) {
                console.log(err)
            }
        })()
    }, []);
    
    function incrementCounter(){
        let newCounter = counter + 1;
        setCounter(newCounter)
    }

    function decrementCounter(){
        if (counter > 0) {
            let newCounter = counter - 1;
            setCounter(newCounter)
        }
        else {
            
        }
    }



    return (
        <Container>
           <ProdImage>
                <img src={product.image} />
           </ProdImage>
           <ProdInfo>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <h1>{product.price}</h1>
           </ProdInfo>
           <Separator></Separator>
           <Counter>
            Quantidade
            <div>
            <button onClick={decrementCounter}>-</button>
            {counter}
            <button onClick={incrementCounter}>+</button>
            </div>
           </Counter>
        </Container>
    )
}

const Container = styled.div `
    margin-top: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    `

const ProdImage = styled.div `
        width: 375px;
        height: 240px;
        background: rgba(251, 215, 67, 0.4);
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            max-height: 200px;
            width: auto;
        }
`
const ProdInfo = styled.div `
        font-family: 'Montserrat';
        width: 360px;
        color: #828282;
        line-height: 24px;
        gap: 10px;

        h1 {
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 40px;
            color: #2774BA;
        }
`

const Separator = styled.div`
    width: 327px;
    height: 2px;
    background-color: rgba(130, 130, 130, 0.4);
`

const Counter = styled.div`
    font-family: 'Montserrat';
    width: 350px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 14px;
    color: #2774BA;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        background: #FFFFFF;
        border: 1.44737px solid #2774BA;
        border-radius: 11.5789px;
        width: 80px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 8px;
    }

    button {
        width: 20px;
        height: 20px;
        font-size: 20px;
        background-color: #FFFFFF;
        border: 0px;
        color: #2774BA;
        display: flex;
        align-items: center;
    }
`