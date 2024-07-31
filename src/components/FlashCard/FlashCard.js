import {
    PerguntaFechada,
    PerguntaAberta,
    ContainerBotoes,
    BotaoResposta
} from "./StylesFlashCard";
import play from "../../assets/seta_play.png";
import turnedCard from "../../assets/seta_virar.png";
import { useState } from 'react';

export default function FlashCard({ card, index }) {
    const [Started, setStarted] = useState(false);
    const [turned, setTurned] = useState(false);
    const [finished, setFinished] = useState(false);

    function showQuestion() {
        if(!finished){
            setStarted(true)
        }
    }

    function answerquestion() {
            setStarted(false)
            setFinished(true)
    }
    return (
        <>
            {!Started ? (
                <PerguntaFechada>
                    <p> Pergunta {index + 1}</p>
                    <img src={play} alt="Icon" onClick={showQuestion}/>
                </PerguntaFechada>
            ) : (
                <PerguntaAberta>
                    {!turned ? (
                        <>
                            {card.question}
                            <img src={turnedCard} alt="icon de virar o card" onClick={()=> setTurned(true)}/>
                        </>
                    ) : (
                        <>
                            {card.answer}
                            <ContainerBotoes>
                                <button onClick={answerquestion}>Não lembrei</button>
                                <button onClick={answerquestion}> Quase não lembrei</button>
                                <button onClick={answerquestion}>Zap</button>
                            </ContainerBotoes>
                        </>
                    )}
                </PerguntaAberta>
            )}
        </>



    );
}