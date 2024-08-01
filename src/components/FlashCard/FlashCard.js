import {
    PerguntaFechada,
    PerguntaAberta,
    ContainerBotoes,
    BotaoResposta
} from "./StylesFlashCard";
import turnedCard from "../../assets/seta_virar.png";
import { useState } from 'react';
import StatusIcon from "../Statusicon/StatusIcon";

export default function FlashCard({ card, index }) {
    const [Started, setStarted] = useState(false);
    const [turned, setTurned] = useState(false);
    const [finished, setFinished] = useState(false);
    const [status, setStatus] = useState("Sem reposta");


    function showQuestion() {
        if (!finished) {
            setStarted(true)
        }
    }

    function answerquestion(resQuestion) {
        setStarted(false)
        setFinished(true)
        setStatus(resQuestion)
    }


    return (
        <>
            {!Started ? (
                <PerguntaFechada>
                    <p> Pergunta {index + 1}</p>
                    <StatusIcon showQuestion={showQuestion} status={status}/>
                </PerguntaFechada>
            ) : (
                <PerguntaAberta>
                    {!turned ? (
                        <>
                            {card.question}
                            <img src={turnedCard} alt="icon de virar o card" onClick={() => setTurned(true)} />
                        </>
                    ) : (
                        <>
                            {card.answer}
                            <ContainerBotoes>
                                <button onClick={() => answerquestion("wrong")}>Não lembrei</button>
                                <button onClick={() => answerquestion("almost")}> Quase não lembrei</button>
                                <button onClick={() => answerquestion("correct")}>Zap</button>
                            </ContainerBotoes>
                        </>
                    )}
                </PerguntaAberta>
            )}
        </>



    );
}