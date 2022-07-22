import React from "react";
import { Button } from "react-bootstrap";
import "./Keyboard.css";

export default function Keyboard(props) {
  function handleClick(value) {
    props.setKeyboardPress(value);
    console.log(value);
  }
  return (
    <React.Fragment>
      <div>
        <Button value="Q" variant="dark" onClick={(e) => handleClick(e.target.value)}>Q</Button>
        <Button value="W" variant="dark" onClick={(e) => handleClick(e.target.value)}>W</Button>
        <Button value="E" variant="dark" onClick={(e) => handleClick(e.target.value)}>E</Button>
        <Button value="R" variant="dark" onClick={(e) => handleClick(e.target.value)}>R</Button>
        <Button value="T" variant="dark" onClick={(e) => handleClick(e.target.value)}>T</Button>
        <Button value="Y" variant="dark" onClick={(e) => handleClick(e.target.value)}>Y</Button>
        <Button value="U" variant="dark" onClick={(e) => handleClick(e.target.value)}>U</Button>
        <Button value="I" variant="dark" onClick={(e) => handleClick(e.target.value)}>I</Button>
        <Button value="O" variant="dark" onClick={(e) => handleClick(e.target.value)}>O</Button>
        <Button value="P" variant="dark" onClick={(e) => handleClick(e.target.value)}>P</Button>
      </div>
      <div>
        <Button value="A" variant="dark" onClick={(e) => handleClick(e.target.value)}>A</Button>
        <Button value="S" variant="dark" onClick={(e) => handleClick(e.target.value)}>S</Button>
        <Button value="D" variant="dark" onClick={(e) => handleClick(e.target.value)}>D</Button>
        <Button value="F" variant="dark" onClick={(e) => handleClick(e.target.value)}>F</Button>
        <Button value="G" variant="dark" onClick={(e) => handleClick(e.target.value)}>G</Button>
        <Button value="H" variant="dark" onClick={(e) => handleClick(e.target.value)}>H</Button>
        <Button value="J" variant="dark" onClick={(e) => handleClick(e.target.value)}>J</Button>
        <Button value="K" variant="dark" onClick={(e) => handleClick(e.target.value)}>K</Button>
        <Button value="L" variant="dark" onClick={(e) => handleClick(e.target.value)}>L</Button>
      </div>
      <div>
        <Button value="ENTER" variant="dark" onClick={(e) => handleClick(e.target.value)}>ENTER</Button>
        <Button value="Z" variant="dark" onClick={(e) => handleClick(e.target.value)}>Z</Button>
        <Button value="X" variant="dark" onClick={(e) => handleClick(e.target.value)}>X</Button>
        <Button value="C" variant="dark" onClick={(e) => handleClick(e.target.value)}>C</Button>
        <Button value="V" variant="dark" onClick={(e) => handleClick(e.target.value)}>V</Button>
        <Button value="B" variant="dark" onClick={(e) => handleClick(e.target.value)}>B</Button>
        <Button value="N" variant="dark" onClick={(e) => handleClick(e.target.value)}>N</Button>
        <Button value="M" variant="dark" onClick={(e) => handleClick(e.target.value)}>M</Button>
        <Button value="DELETE" variant="dark" onClick={(e) => handleClick(e.target.value)}>DELETE</Button>
      </div>
    </React.Fragment>
  );
}
