import TopBar from "./TopBar";
import ProductBox from "./ProductBox";

export default function HomePage() {
    return(
        <>
        <TopBar>
            <button>Botao generico</button>
        </TopBar>
        <h1>HOMEPAGE</h1>
        <ProductBox photo="noPhoto" price="150,00" name="Pokebola"/>
        </>
    );
}