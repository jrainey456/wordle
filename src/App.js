import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import WordBoxRow from "./components/WordBoxRow";
import Keyboard from "./components/Keyboard";
import Header from "./components/Header";

function App() {
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
      if (activeRow < guessArray.length && guessArray[activeRow].length === 5) {
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

  useEffect(() => {
    document.title = "Rainy Day Development";
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Container>
        <div className="wordBoxContainer">
          <WordBoxRow
            row={0}
            word={guessArray[0]}
            correctWord={correctWord}
            activeRow={activeRow}
          />
          <WordBoxRow
            row={1}
            word={guessArray[1]}
            correctWord={correctWord}
            activeRow={activeRow}
          />
          <WordBoxRow
            row={2}
            word={guessArray[2]}
            correctWord={correctWord}
            activeRow={activeRow}
          />
          <WordBoxRow
            row={3}
            word={guessArray[3]}
            correctWord={correctWord}
            activeRow={activeRow}
          />
          <WordBoxRow
            row={4}
            word={guessArray[4]}
            correctWord={correctWord}
            activeRow={activeRow}
          />
          <WordBoxRow
            row={5}
            word={guessArray[5]}
            correctWord={correctWord}
            activeRow={activeRow}
          />
        </div>
        <div className="keyboardContainer">
          <Keyboard
            handleKeyPress={handleKeyPress}
            guessArray={guessArray}
            activeRow={activeRow}
          />
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
