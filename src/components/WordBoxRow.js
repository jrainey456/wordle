import React, { useEffect, useState } from "react";
import "./WordBoxRow.css";
import { Button, Card } from "react-bootstrap";

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
  /*
  const [animationClassArray, setAnimationClassArray] = useState([
    "incorrect-card-flip",
    "incorrect-card-flip",
    "incorrect-card-flip",
    "incorrect-card-flip",
    "incorrect-card-flip",
  ]);
*/

  var animationClassArray = [
    "incorrect-card-flip",
    "incorrect-card-flip",
    "incorrect-card-flip",
    "incorrect-card-flip",
    "incorrect-card-flip",
  ];

  /*
  const [endClassArray, setEndClassArray] = useState([
    "incorrect-card",
    "incorrect-card",
    "incorrect-card",
    "incorrect-card",
    "incorrect-card",
  ]);
*/

  var endClassArray = [
    "incorrect-card-flip",
    "incorrect-card-flip",
    "incorrect-card-flip",
    "incorrect-card-flip",
    "incorrect-card-flip",
  ];

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
      setCurrentColorArray([
        "default-card",
        "default-card",
        "default-card",
        "default-card",
        "default-card",
      ]);
    }
  }

  function handleShake() {
    setCurrentColorArray([
      "default-card-shake",
      "default-card-shake",
      "default-card-shake",
      "default-card-shake",
      "default-card-shake",
    ]);
    setTimeout(() => {
      setCurrentColorArray([
        "default-card",
        "default-card",
        "default-card",
        "default-card",
        "default-card",
      ]);
    }, 500);
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function checkWord() {
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
      if (props.word === "" || props.word.length === 5) {
        if (props.word[i] === props.correctWord[i]) {
          localAnimationArray[i] = "position-correct-card-flip";
          localEndArray[i] = "position-correct-card";
        }
      }
    }
    //setAnimationClassArray(localAnimationArray);
    animationClassArray = localAnimationArray;
    //setEndClassArray(localEndArray);
    endClassArray = localEndArray;
  }

  function startAnimation(array, index) {
    var localArray = [];
    var localAnimationClass = [];
    var localEndClass = [];

    var delay = 0;

    if (index !== 0) {
      delay = 500;
    }

    array.map((data) => {
      localArray.push(data);
    });

    animationClassArray.map((data) => {
      localAnimationClass.push(data);
    });

    endClassArray.map((data) => {
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
    //  setCurrentColorArray([endClass, endClass, endClass, endClass, endClass]);
  }

  function handleSubmit() {
    checkWord();
    startAnimation(currentColorArray, 0);
  }
  /*
  function handleCorrectLetter() {
    setCurrentColorArray([
      "letter-correct-card-flip",
      "letter-correct-card-flip",
      "letter-correct-card-flip",
      "letter-correct-card-flip",
      "letter-correct-card-flip",
    ]);
    setTimeout(() => {
      setCurrentColorArray([
        "letter-correct-card",
        "letter-correct-card",
        "letter-correct-card",
        "letter-correct-card",
        "letter-correct-card",
      ]);
    }, 1000);
  }

  function handleCorrectPosition() {
    setCurrentColorArray([
      "position-correct-card-flip",
      "position-correct-card-flip",
      "position-correct-card-flip",
      "position-correct-card-flip",
      "position-correct-card-flip",
    ]);
    setTimeout(() => {
      setCurrentColorArray([
        "position-correct-card",
        "position-correct-card",
        "position-correct-card",
        "position-correct-card",
        "position-correct-card",
      ]);
    }, 1000);
  }
*/
  useEffect(() => {
    setLocalWord(props.word);
    setLocalColor(props.guessNumber);
  }, [props.word]);

  return (
    <div className="word-box">
      <Button variant="dark" onClick={() => handleShake()}>
        Shake/Reset
      </Button>
      <Button variant="dark" onClick={() => handleSubmit()}>
        Submit
      </Button>
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
