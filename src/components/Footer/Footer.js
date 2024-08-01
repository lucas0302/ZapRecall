import {
    FooterConcluidos
} from "./StylesFooter";

export default function Footer({ children, totalquestion, questionCouter }) {
    return (
        <FooterConcluidos>
         {questionCouter}/{totalquestion} Concluídos
        </FooterConcluidos>
    )
}


