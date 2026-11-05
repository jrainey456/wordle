import React, { useEffect, useState, useCallback, useRef } from "react";
import "./WordBoxRow.css";
import { Card } from "react-bootstrap";

export default function GuessRow(props) {
  const [letter0, setLetter0] = useState("");
  const [letter1, setLetter1] = useState("");
  const [letter2, setLetter2] = useState("");
  const [letter3, setLetter3] = useState("");
  const [letter4, setLetter4] = useState("");

  const [currentColorArray, setCurrentColorArray] = useState([
    "default-card",
    "default-card",
    "default-card",
    "default-card",
    "default-card",
  ]);

  const animationClassArrayRef = useRef([
    "incorrect-card-flip",
    "incorrect-card-flip",
    "incorrect-card-flip",
    "incorrect-card-flip",
    "incorrect-card-flip",
  ]);

  const endClassArrayRef = useRef([
    "incorrect-card-flip",
    "incorrect-card-flip",
    "incorrect-card-flip",
    "incorrect-card-flip",
    "incorrect-card-flip",
  ]);

  function checkLetter(word, index) {
    if (typeof word[index] === "undefined") {
      return "";
    } else {
      return word[index];
    }
  }

  const setLocalWord = useCallback(
    (word) => {
      setLetter0(checkLetter(word, 0));
      setLetter1(checkLetter(word, 1));
      setLetter2(checkLetter(word, 2));
      setLetter3(checkLetter(word, 3));
      setLetter4(checkLetter(word, 4));
    },
    []
  );

  const checkWord = useCallback(() => {
    console.log("Word Checked: " + props.word);
    console.log("Correct Word: " + props.correctWord);

    var localAnimationArray = [
      "default-card",
      "default-card",
      "default-card",
      "default-card",
      "default-card",
    ];
    var localEndArray = [
      "default-card",
      "default-card",
      "default-card",
      "default-card",
      "default-card",
    ];

    for (var i = 0; i < props.correctWord.length; i++) {
      if (props.word !== "" && props.word.length === 5) {
        if (props.word[i] === props.correctWord[i]) {
          localAnimationArray[i] = "position-correct-card-flip";
          localEndArray[i] = "position-correct-card";
        } else if (props.correctWord.includes(props.word[i])) {
          localAnimationArray[i] = "letter-correct-card-flip";
          localEndArray[i] = "letter-correct-card";
        } else {
          localAnimationArray[i] = "incorrect-card-flip";
          localEndArray[i] = "incorrect-card";
        }
      }
    }
    animationClassArrayRef.current = localAnimationArray;
    endClassArrayRef.current = localEndArray;
  }, [props.word, props.correctWord]);

  const currentColorArrayRef = useRef(currentColorArray);

  useEffect(() => {
    currentColorArrayRef.current = currentColorArray;
  }, [currentColorArray]);

  const startAnimation = useCallback(
    (array, index) => {
      var localArray = [];
      var localAnimationClass = [];
      var localEndClass = [];

      var delay = 0;

      if (index !== 0) {
        delay = 500;
      }

      array.forEach((data) => {
        localArray.push(data);
      });

      animationClassArrayRef.current.forEach((data) => {
        localAnimationClass.push(data);
      });

      endClassArrayRef.current.forEach((data) => {
        localEndClass.push(data);
      });

      localArray[index] = localAnimationClass[index];

      if (index < array.length) {
        setTimeout(() => {
          setCurrentColorArray(localArray, startAnimation(localArray, index + 1));
        }, delay);
      } else {
        setTimeout(() => {
          setCurrentColorArray(localEndClass);
        }, delay + delay);
      }
    },
    []
  );

  const handleSubmit = useCallback(() => {
    checkWord();
    startAnimation(currentColorArrayRef.current, 0);
  }, [checkWord, startAnimation]);

  useEffect(() => {
    setLocalWord(props.word);
  }, [props.word, setLocalWord]);

  useEffect(() => {
    if (props.activeRow === props.row + 1) {
      handleSubmit();
    }
  }, [props.activeRow, props.row, handleSubmit]);

  return (
    <div className="word-box">
      <Card id="1" className={currentColorArray[0]}>
        <Card.Body>{letter0}</Card.Body>
      </Card>
      <Card id="2" className={currentColorArray[1]}>
        <Card.Body>{letter1}</Card.Body>
      </Card>
      <Card id="3" className={currentColorArray[2]}>
        <Card.Body>{letter2}</Card.Body>
      </Card>
      <Card id="4" className={currentColorArray[3]}>
        <Card.Body>{letter3}</Card.Body>
      </Card>
      <Card id="5" className={currentColorArray[4]}>
        <Card.Body>{letter4}</Card.Body>
      </Card>
    </div>
  );
}

/*
      <Button variant="dark" onClick={() => handleShake()}>
        Shake/Reset
      </Button>
      <Button variant="dark" onClick={() => handleSubmit()}>
        Submit
      </Button>
*/
