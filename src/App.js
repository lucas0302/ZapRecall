import { useState } from "react";
import DeckScreen from "./components/DeckScreen/DeckScreen";
import WelcomeScreen from "./components/WelcomeScreen/WelcomeScreen";
function App() {

  const [welcome, setWelcome] =useState(true)
  return (
    <>
    {welcome ? <WelcomeScreen setWelcome={setWelcome}/> : <DeckScreen/>}
    

    </>
  );
}

export default App;
