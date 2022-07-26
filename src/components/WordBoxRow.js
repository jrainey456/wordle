import React, { useEffect, useState } from "react";
import "./WordBoxRow.css";
import { Button, Card } from "react-bootstrap";

export default function GuessRow(props) {
  const [letter0, setLetter0] = useState("");
  const [letter1, setLetter1] = useState("");
  const [letter2, setLetter2] = useState("");
  const [letter3, setLetter3] = useState("");
  const [letter4, setLetter4] = useState("");

  const [guessColorArray, setGuessColorArray] = useState([
    "default-card",
    "default-card",
    "default-card",
    "default-card",
    "default-card",
  ]);

  function checkLetter(word, index) {
    if (typeof word[index] === "undefined") {
      return "";
    } else {
      return word[index];
    }
  }

  function setLocalWord(word) {
    setLetter0(checkLetter(word, 0));
    setLetter1(checkLetter(word, 1));
    setLetter2(checkLetter(word, 2));
    setLetter3(checkLetter(word, 3));
    setLetter4(checkLetter(word, 4));
  }

  function setLocalColor(correctWord) {
    if (correctWord === 2) {
      setGuessColorArray([
        "default-card",
        "default-card",
        "default-card",
        "default-card",
        "default-card",
      ]);
    }
  }

  function handleShake() {
    setGuessColorArray([
      "default-card-shake",
      "default-card-shake",
      "default-card-shake",
      "default-card-shake",
      "default-card-shake",
    ]);
    setTimeout(() => {
      setGuessColorArray([
        "default-card",
        "default-card",
        "default-card",
        "default-card",
        "default-card",
      ]);
    }, 500);
  }

  function handleCorrectLetter() {
    setGuessColorArray([
      "letter-correct-card-flip",
      "letter-correct-card-flip",
      "letter-correct-card-flip",
      "letter-correct-card-flip",
      "letter-correct-card-flip",
    ]);
    setTimeout(() => {
      setGuessColorArray([
        "letter-correct-card",
        "letter-correct-card",
        "letter-correct-card",
        "letter-correct-card",
        "letter-correct-card",
      ]);
    }, 1000);
  }

  function handleCorrectPosition() {
    setGuessColorArray([
      "position-correct-card-flip",
      "position-correct-card-flip",
      "position-correct-card-flip",
      "position-correct-card-flip",
      "position-correct-card-flip",
    ]);
    setTimeout(() => {
      setGuessColorArray([
        "position-correct-card",
        "position-correct-card",
        "position-correct-card",
        "position-correct-card",
        "position-correct-card",
      ]);
    }, 1000);
  }

  useEffect(() => {
    setLocalWord(props.word);
    setLocalColor(props.guessNumber);
  }, [props.word]);

  return (
    <div className="word-box">
      <Button variant="dark" onClick={() => handleShake()}>
        Shake/Reset
      </Button>
      <Button variant="dark" onClick={() => handleCorrectLetter()}>
        Correct Letter
      </Button>
      <Button variant="dark" onClick={() => handleCorrectPosition()}>
        Correct Position
      </Button>
      <Card id="1" className={guessColorArray[0]}>
        <Card.Body>{letter0}</Card.Body>
      </Card>
      <Card id="2" className={guessColorArray[1]}>
        <Card.Body>{letter1}</Card.Body>
      </Card>
      <Card id="3" className={guessColorArray[2]}>
        <Card.Body>{letter2}</Card.Body>
      </Card>
      <Card id="4" className={guessColorArray[3]}>
        <Card.Body>{letter3}</Card.Body>
      </Card>
      <Card id="5" className={guessColorArray[4]}>
        <Card.Body>{letter4}</Card.Body>
      </Card>
    </div>
  );
}
