import FlashCard from "./FlashCard";
import Footer from "./Footer";
import logo from "../assets/logo.png";

export default function DeckScreen (){

    return(
        <div>
            <img src={logo} alt="Logo"/>
            <h1>ZapRecall</h1>

            <FlashCard/>
            <FlashCard/> 
            <FlashCard/> 
            <FlashCard/> 
            <Footer/>  
        </div>
    );
}