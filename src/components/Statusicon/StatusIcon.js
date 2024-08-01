import iconcoreto from "../../assets/icone_certo.png";
import quaseicon from "../../assets/icone_quase.png";
import erroicon from "../../assets/icone_erro.png";
import play from "../../assets/seta_play.png";

export default function StatusIcon({ status, showQuestion }) {

    return (
        <>
            {status === "wrong" && <img src={erroicon} alt="Icon"  /> }
            {status === "almost" && <img src={quaseicon} alt="Icon"  /> }
            {status === "correct" && <img src={iconcoreto} alt="Icon"  /> }
            {status === "not response" && <img src={play} alt="Icon" onClick={showQuestion} /> }
        </>
    );
}