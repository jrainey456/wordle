import React, { useEffect, useState } from "react";
import "./WordBoxRow.css";
import { Card } from "react-bootstrap";

export default function GuessRow(props) {
  const [letter0, setLetter0] = useState("");
  const [letter1, setLetter1] = useState("");
  const [letter2, setLetter2] = useState("");
  const [letter3, setLetter3] = useState("");
  const [letter4, setLetter4] = useState("");

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

  useEffect(() => {
    setLocalWord(props.word);
  }, [props.word]);

  return (
    <div className="wordBox">
      <Card id="1" className="defaultCard">
        <Card.Body>{letter0}</Card.Body>
      </Card>
      <Card id="2" className="defaultCard">
        <Card.Body>{letter1}</Card.Body>
      </Card>
      <Card id="3" className="defaultCard">
        <Card.Body>{letter2}</Card.Body>
      </Card>
      <Card id="4" className="defaultCard">
        <Card.Body>{letter3}</Card.Body>
      </Card>
      <Card id="5" className="defaultCard">
        <Card.Body>{letter4}</Card.Body>
      </Card>
    </div>
  );
}
