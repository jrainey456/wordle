import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import WordBoxRow from "./components/WordBoxRow";
import Keyboard from "./components/Keyboard";

function App() {
  const [keyboardPress, setKeyboardPress] = useState("");
  const [activeRow, setActiveRow] = useState(0);

  const [guessArray, setGuessArray] = useState();

  const [guess1, setGuess1] = useState("Test");
  const [guess2, setGuess2] = useState("");
  const [guess3, setGuess3] = useState("");
  const [guess4, setGuess4] = useState("");
  const [guess5, setGuess5] = useState("");
  const [guess6, setGuess6] = useState("");

  useEffect(() => {
    setGuess1(keyboardPress);
  }, [keyboardPress]);

  return (
    <Container>
      <header>Wurdle</header>
      <div className="wordBoxContainer">
        <WordBoxRow word={guess1} />
        <WordBoxRow word={guess2} />
        <WordBoxRow word={guess3} />
        <WordBoxRow word={guess4} />
        <WordBoxRow word={guess5} />
        <WordBoxRow word={guess6} />
      </div>
      <h4>{keyboardPress}</h4>
      <div>
        <Keyboard setKeyboardPress={setKeyboardPress} />
      </div>
    </Container>
  );
}

export default App;
