import FlashCard from "../FlashCard/FlashCard";
import Footer from "../Footer/Footer";
import logo from "../../assets/logo.png";

import {
    ScreenContaier,
    LogoContainer,
    StatusPerguntas,
    Finalizacao
} from "./StylesDeckScreen";

export default function DeckScreen() {

    return (
        <ScreenContaier>
            <LogoContainer>
                <img src={logo} alt="Logo" />
                <h1>ZapRecall</h1>
            </LogoContainer>

            <FlashCard />
            <FlashCard />
            <FlashCard />
            <FlashCard />
            <Footer />
        </ScreenContaier>
    );
}