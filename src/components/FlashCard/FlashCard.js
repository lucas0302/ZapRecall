import {
    PerguntaFechada,
    PerguntaAberta,
    ContainerBotoes,
    BotaoResposta
} from "./StylesFlashCard";
import play from "../../assets/seta_play.png";

export default function FlashCard({card, index}) {

    return (
        <PerguntaFechada>
            <p> Pergunta {index + 1}</p>
            <img src={play} alt="Icon" />
        </PerguntaFechada>
    );
}