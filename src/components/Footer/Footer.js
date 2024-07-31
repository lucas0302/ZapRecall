import {
    FooterConcluidos
} from "./StylesFooter";

export default function Footer({ children, totalquestion, questionCouter }) {
    return (
        <FooterConcluidos>
            {/* {children} */} {questionCouter}/{totalquestion} Concluídos
        </FooterConcluidos>
    )
}


