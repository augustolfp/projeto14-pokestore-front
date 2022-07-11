import TopBar from "./TopBar";
import ProductBox from "./ProductBox";
import SideBar from "./SideBar/SideBar";
import { useEffect, useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";


export default function HomePage() {

    const [search, setSearch] = useState("");
    const [productList, setProductList] = useState([]);
    const {sideBarVisibility, setSideBarVisibility} = useContext(UserContext);

    useEffect( async () => {
          const products = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/products`);
          console.log(products)
          setProductList(products.data); 
        }, []);


    return(
        <>
            <TopBar>
                <button>Botao generico</button>
            </TopBar>

            {sideBarVisibility && <SideBar />}

            <Container>
                <div>
                    <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <Highlights>
                    IMAGENS EM DESTAQUI AQUI
                </Highlights>
                <ProductList>
                    {
                        productList.length > 0 ? (
                            productList.map((product, index) =>  
                                <Link key={index} to={`product/${product.id}`}>
                                    <Item> 
                                        <ProdImage>
                                            <img src={product.image} />
                                        </ProdImage>
                                        <ProdName>
                                            <h1>{product.name}</h1>
                                        </ProdName>
                                        <ProdPrice>
                                            <h1>{product.price}</h1>
                                        </ProdPrice>
                                    </Item>
                                </Link>
                            )
                        ) : (
                            <h4>Não há nenhum produto no momento!</h4>
                        )
                    } 
                </ProductList>
            </Container>
        </>
    );
}

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

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

const Highlights = styled.div `

`
const ProductList = styled.div `
    display: flex;
    width: 330px;
    height: 100vh;    
    overflow-y: scroll;
    flex-wrap: wrap;
    font-family: 'Montserrat';
    gap: 14px;
`

const Item = styled.div `
    width: 156px;
    height: 174px;
    margin: 5px 0;
`

const ProdImage = styled.div `
        width: 156px;
        height: 128px;
        background: rgba(251, 215, 67, 0.4);
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            max-height: 90px;
            width: auto;
        }
`
const ProdName = styled.div `
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #222222;
    margin: 6px 0;
`
const ProdPrice = styled.div `
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 10px;
    color: #828282;
`