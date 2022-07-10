import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Produto(){

    const {idProduct} = useParams();
    const [myProd, setMyProd] = useState([]);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
          const products = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/products/${idProduct}`);
          console.log(products)
          setProductList(products.data);
            }
            catch(err) {
                console.log(err)
            }
        })()
    }, []);
    



    return (
        <>
            {`PRODUTO NÚMERO ${idProduct}`}
            {productList.map(product => product.name)}
        </>
    )
}