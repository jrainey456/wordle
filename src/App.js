import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import WordBoxRow from "./components/WordBoxRow";
import Keyboard from "./components/Keyboard";

function App() {
  // const [keyboardPress, setKeyboardPress] = useState("");
  const [correctWord, setCorrectWord] = useState("AUDIO");

  const [activeRow, setActiveRow] = useState(0);

  const [guessArray, setGuessArray] = useState(["", "", "", "", "", ""]);

  function updateGuessArray(word, index) {
    var array = [];

    guessArray.map((data) => {
      array.push(data);
    });

    array[index] = word;
    setGuessArray(array);
  }

  function handleKeyPress(key, keyCode) {
    console.log("--------------------------------------");
    console.log(guessArray[activeRow].length);
    console.log("Keypress is: " + key);
    console.log("KeyCode is: " + keyCode);
    console.log("Array is :" + guessArray[activeRow]);
    console.log("Combined :" + guessArray[activeRow] + key);
    if (key === "ENTER") {
      if (
        activeRow < guessArray.length - 1 &&
        guessArray[activeRow].length === 5
      ) {
        setActiveRow(activeRow + 1);
      }
    } else if (key === "BACKSPACE" && guessArray[activeRow].length >= 0) {
      updateGuessArray(
        guessArray[activeRow].substring(0, guessArray[activeRow].length - 1),
        activeRow
      );
    } else if (
      key !== "BACKSPACE" &&
      guessArray[activeRow].length < 5 &&
      (keyCode === "onScreen" || (keyCode >= 65 && keyCode <= 90))
    ) {
      updateGuessArray(guessArray[activeRow] + key, activeRow);
    }
  }

  return (
    <Container>
      <header>Rainy Day Wordle</header>
      <div className="wordBoxContainer">
        <WordBoxRow
          word={guessArray[0]}
          correctWord={correctWord}
          guessNumber={1}
        />
        <WordBoxRow
          word={guessArray[1]}
          correctWord={correctWord}
          guessNumber={2}
        />
        <WordBoxRow
          word={guessArray[2]}
          correctWord={correctWord}
          guessNumber={3}
        />
        <WordBoxRow
          word={guessArray[3]}
          correctWord={correctWord}
          guessNumber={4}
        />
        <WordBoxRow
          word={guessArray[4]}
          correctWord={correctWord}
          guessNumber={5}
        />
        <WordBoxRow
          word={guessArray[5]}
          correctWord={correctWord}
          guessNumber={6}
        />
      </div>
      <div>
        <Keyboard
          handleKeyPress={handleKeyPress}
          guessArray={guessArray}
          activeRow={activeRow}
        />
      </div>
    </Container>
  );
}

export default App;
