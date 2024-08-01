import iconcoreto from "../../assets/icone_certo.png";
import quaseicon from "../../assets/icone_quase.png";
import erroicon from "../../assets/icone_erro.png";
import play from "../../assets/seta_play.png";

export default function StatusIcon({ status, showQuestion }) {

    function selectIcon() {
        switch (status) {
            case "wrong":
                return erroicon
            case "almost":
                return quaseicon
            case "correct":
                return iconcoreto
            default:
                return play
        }
    }

    return (
        <>
            <img src={selectIcon()} alt="Icon" onClick={showQuestion} />
        </>
    );
}