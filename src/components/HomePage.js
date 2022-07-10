import TopBar from "./TopBar";
import ProductBox from "./ProductBox";
import SideBar from "./SideBar/SideBar";

export default function HomePage() {
    return(
        <>
        <SideBar />
        <TopBar>
            <button>Botao generico</button>
        </TopBar>
        <h1>HOMEPAGE</h1>
        <ProductBox photo="noPhoto" price="150,00" name="Pokebola"/>
        </>
    );
}