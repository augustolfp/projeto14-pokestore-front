import TopBar from "./TopBar";
import ProductBox from "./ProductBox";
import SideBar from "./SideBar/SideBar";
import React, {useContext} from "react";
import UserContext from "../contexts/UserContext";

export default function HomePage() {
    const {sideBarVisibility, setSideBarVisibility} = useContext(UserContext);
    return(
        <>
        <TopBar>
            <button>Botao generico</button>
        </TopBar>
        {sideBarVisibility && <SideBar />}
        <h1>HOMEPAGE</h1>
        <ProductBox photo="noPhoto" price="150,00" name="Pokebola"/>
        </>
    );
}