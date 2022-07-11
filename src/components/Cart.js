import TopBar from "./TopBar";
import SideBar from "./SideBar/SideBar";
import { useEffect, useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";


export default function Cart() {

    const [productList, setProductList] = useState([]);
    const [total, setTotal] = useState(0);
    const {sideBarVisibility, setSideBarVisibility, token} = useContext(UserContext);
    const navigate = useNavigate();

    const headers = {
        Authorization: `Bearer ${token}`,
    }

    useEffect(() => {
        (async () => {
          const products = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/carrinho`, {headers});
          console.log(products)
          setProductList(products.data);
          let t = 0;
          for (let elt of products.data) {
            t += elt.quantity * elt.price
          }
          setTotal(t)
        })()
    }, []);

    async function deleteItem(id){
        const product = {
            id
        }
        try {
            await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/carrinho`, product, {headers});
            navigate("/cart")
        }
        catch(err) {
            alert("Algo deu errado!")
        }
    }


    return(
        <>

            <TopBar>
                <button>Botao generico</button>
            </TopBar>            
            {sideBarVisibility && <SideBar />}
            <Title>
                Meu carrinho
            </Title>
            <Container>
                <ProductList>
                    {  productList.map(product => 
                    <>
                        <Separator></Separator> 
                        <Item>                            
                            <Link to={`product/${product.id}`} >
                                <ProdImage><img src={product.image} /></ProdImage>
                            </Link>
                            <div>
                            <ProdName>{product.name}</ProdName>
                            <ProdPrice>{`$${product.price}`}</ProdPrice>
                            </div>
                            <div>
                            <ion-icon name="trash-outline" id={product.id} onClick={(e) => deleteItem(e.target.id)}></ion-icon>
                            <div>{`Quantidade: ${product.quantity}`}</div>
                            </div>
                        </Item> 
                    </>)}                 
                </ProductList>
                <Footer>
                    <div>
                    {`Valor total: $${total}`}
                    <Link to ="/checkout"><button>Checkout</button></Link></div>
                </Footer>
            </Container>
        </>
    );
}

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    font-family: "Montserrat";

    input {
        width: 329px;
        background: rgba(251, 215, 67, 0.4);
        border-radius: 8px;
        height: 30px;
        color: #2774BA;
        border: 0px;
        padding: 20px;
        margin-top: 15px;
    }

    a, a:visited {
        text-decoration: none;
    }
`

const Title = styled.div `
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #2774BA;
    margin: 21px 0px;
`
const ProductList = styled.div `
    display: flex;
    flex-direction: column;
    width: 330px;
    height: calc(100vh-80px);    
    overflow-y: scroll;
    font-family: 'Montserrat';
    gap: 14px;
`

const Item = styled.div `
    width: 156px;
    height: 120px;
    margin: 5px 0;
    display: flex;
    gap: 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 12px;
    color: #2774BA;

    ion-icon {
        margin-top: 10px;
        font-size: 14px;
    }

    div {
        gap: 10px;
        margin: 10px 0px;
    }
`

const ProdImage = styled.div `
        width: 100px;
        height: 80px;
        background: rgba(251, 215, 67, 0.4);
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            max-height: 70px;
            width: auto;
        }
`
const ProdName = styled.div `
    width: 100px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #222222;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 12px;
    color: #2774BA;
`
const ProdPrice = styled.div `
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 12px;
    color: #2774BA;
`

const Footer = styled.div`
    background-color: #FBD743;
    position: fixed;
    bottom: 0;
    height: 80px;
    width: 100%;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 12px;
    color: #2774BA;
    
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 375px;
        padding: 0 10px;
        height: 80px;
        align-self: center;
    }
    
    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 56px;
        background: #2774BA;
        border-radius: 14px;
        color: #FFFFFF;
        border: 0px;
        cursor: pointer;
    }
`

const Separator = styled.div`
    width: 327px;
    height: 2px;
    background-color: rgba(130, 130, 130, 0.4);
`