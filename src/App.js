import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import WordBoxRow from "./components/WordBoxRow";
import Keyboard from "./components/Keyboard";

function App() {
  const [KeyboardPress, setKeyboardPress] = useState("");
  const [guess1, setGuess1] = useState("");
  const [guess2, setGuess2] = useState("");
  const [guess3, setGuess3] = useState("");
  const [guess4, setGuess4] = useState("");
  const [guess5, setGuess5] = useState("");
  const [guess6, setGuess6] = useState("");

  return (
    <Container>
      <header>Wordle</header>
      <h4>{KeyboardPress}</h4>
      <div>
        <WordBoxRow word={guess1} setWord={setGuess1} />
        <WordBoxRow word={guess2} setWord={setGuess2} />
        <WordBoxRow word={guess3} setWord={setGuess3} />
        <WordBoxRow word={guess4} setWord={setGuess4} />
        <WordBoxRow word={guess5} setWord={setGuess5} />
        <WordBoxRow word={guess6} setWord={setGuess6} />
      </div>
      <div>
        <Keyboard setKeyboardPress={setKeyboardPress} />
      </div>
    </Container>
  );
}

export default App;
