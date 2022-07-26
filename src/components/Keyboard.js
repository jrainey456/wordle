import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Keyboard.css";

export default function Keyboard(props) {
  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
    return () => document.removeEventListener("keydown", detectKeyDown, true);
  }, [props.guessArray, props.activeRow]);

  function detectKeyDown(e) {
    handleClick(e.key.toUpperCase(), e.keyCode);
  }

  function handleClick(value, code) {
    props.handleKeyPress(value, code);
  }

  return (
    <React.Fragment>
      <div>
        <Button
          value="Q"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          Q
        </Button>
        <Button
          value="W"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          W
        </Button>
        <Button
          value="E"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          E
        </Button>
        <Button
          value="R"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          R
        </Button>
        <Button
          value="T"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          T
        </Button>
        <Button
          value="Y"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          Y
        </Button>
        <Button
          value="U"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          U
        </Button>
        <Button
          value="I"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          I
        </Button>
        <Button
          value="O"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          O
        </Button>
        <Button
          value="P"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          P
        </Button>
      </div>
      <div>
        <Button
          value="A"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          A
        </Button>
        <Button
          value="S"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          S
        </Button>
        <Button
          value="D"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          D
        </Button>
        <Button
          value="F"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          F
        </Button>
        <Button
          value="G"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          G
        </Button>
        <Button
          value="H"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          H
        </Button>
        <Button
          value="J"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          J
        </Button>
        <Button
          value="K"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          K
        </Button>
        <Button
          value="L"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          L
        </Button>
      </div>
      <div>
        <Button
          value="ENTER"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          ENTER
        </Button>
        <Button
          value="Z"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          Z
        </Button>
        <Button
          value="X"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          X
        </Button>
        <Button
          value="C"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          C
        </Button>
        <Button
          value="V"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          V
        </Button>
        <Button
          value="B"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          B
        </Button>
        <Button
          value="N"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          N
        </Button>
        <Button
          value="M"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          M
        </Button>
        <Button
          value="BACKSPACE"
          variant="dark"
          onClick={(e) => handleClick(e.target.value, "onScreen")}
        >
          DELETE
        </Button>
      </div>
    </React.Fragment>
  );
}
