import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState("");
  const [number1, setNumber1] = useState(undefined);
  const [number2, setNumber2] = useState(undefined);
  const [result, setResult] = useState(0);
  const [numberInput1, setNumberInput1] = useState(undefined);
  const [numberInput2, setNumberInput2] = useState(undefined);
  const [resultInput, setResultInput] = useState(0);


  function handleClick(number) {
    setDisplay(display + number);
  }

  function handleAdd() {
    if (number1 === undefined) {
      setNumber1(parseInt(display));
    }
    else {
      setNumber2(parseInt(display));
    }

    setDisplay("");
  }

  function handleCalc() {
    setResult(number1 + number2);
  }

  function handleInput1(ev){
    setNumberInput1(parseInt(ev.target.value));
  }

  function handleInput2(ev){
    setNumberInput2(parseInt(ev.target.value));
  }

  function handleResultInput(){
    setResultInput(numberInput1 + numberInput2);
  }

  const btns = [];
  for (let i = 0; i <= 9; i++) {
    btns.push(<button key={i} onClick={() => handleClick(i)}>{i}</button>);
  }

  return (
    <>
      <div>{display}</div>
      {btns}
      <button onClick={handleAdd}>+</button>
      <button onClick={handleCalc}>=</button>
      <div>{number1} + {number2} = {result}</div>

      <input onChange={handleInput1} type='number'></input>
      +
      <input onChange={handleInput2} type='number'></input>
      =
      {resultInput}
      <button onClick={handleResultInput}>=</button>
    </>
  );
}

export default App;
