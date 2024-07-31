import {
    PerguntaFechada,
    PerguntaAberta,
    ContainerBotoes,
    BotaoResposta
} from "./StylesFlashCard";
import play from "../../assets/seta_play.png";

export default function FlashCard() {

    return (
        <PerguntaFechada>
            <p> Pergunt x</p>
            <img src={play} alt="Icon" />
        </PerguntaFechada>
    );
}