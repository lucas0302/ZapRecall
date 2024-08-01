import {
    PerguntaFechada,
    PerguntaAberta,
    ContainerBotoes,
    BotaoResposta
} from "./StylesFlashCard";
import turnedCard from "../../assets/seta_virar.png";
import { useState } from 'react';
import StatusIcon from "../Statusicon/StatusIcon";
import { AMARELO, VERMELHO, VERDE, CINZA } from "../../constants/colors";

export default function FlashCard({ card, index, ConterQuestions }) {
    const [Started, setStarted] = useState(false);
    const [turned, setTurned] = useState(false);
    const [finished, setFinished] = useState(false);
    const [status, setStatus] = useState("not response");


    function showQuestion() {
        if (!finished) {
            setStarted(true)
        }
    }

    function answerquestion(resQuestion) {
        setStarted(false)
        setFinished(true)
        setStatus(resQuestion)
        ConterQuestions()
    }

    return (
        <>
            {!Started ? (
                <PerguntaFechada status={status}>
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
                                <BotaoResposta onClick={() => answerquestion("wrong")} background={VERMELHO}>Não lembrei</BotaoResposta>
                                <BotaoResposta onClick={() => answerquestion("almost")}background={AMARELO}> Quase não lembrei</BotaoResposta>
                                <BotaoResposta onClick={() => answerquestion("correct")} background={VERDE}>Zap</BotaoResposta>
                            </ContainerBotoes>
                        </>
                    )}
                </PerguntaAberta>
            )}
        </>



    );
}