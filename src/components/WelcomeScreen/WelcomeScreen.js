import logo from "../../assets/logo.png";
import {
    ScreenContainer,
    Logo,
    Titulo,
    BotaoIniciar
} from "./StylesWelcome";
export default function WelcomeScreen({setWelcome}){

    return(
        <ScreenContainer>
        <Logo src={logo} alt="Logo"/>
        <Titulo>ZapRecall</Titulo>
        <BotaoIniciar onClick={()=>setWelcome(false)}>Começar</BotaoIniciar>
        </ScreenContainer>
    );
}