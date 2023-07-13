import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [firstOperand, setFristOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [symbol, setSymbol] = useState("");
  const [output, setOutput] = useState("");

  const handleNumber = (value) => {
    setOutput((prevValue) => prevValue + value);
    if (!symbol) {
      setFristOperand((prevValue) => prevValue + value);
      return;
    }
    setSecondOperand((prevValue) => prevValue + value);
  };

  const handleSymbol = (value) => {
    if (!symbol) {
      setSymbol(value);
      setOutput("");
    }
  };

  const handleDot = () => {
    setOutput((prevValue) => prevValue + ".");
    if (!symbol) {
      setFristOperand((prevValue) => prevValue + ".");
      return;
    }
    setSecondOperand((prevValue) => prevValue + ".");
  };

  const handleDelete = () => {
    if (!symbol && firstOperand) {
      setOutput(output.toString().slice(0, -1));
      setFristOperand(output.toString().slice(0, -1));
      return;
    }
    if (symbol && secondOperand) {
      setOutput(output.toString().slice(0, -1));
      setSecondOperand(output.toString().slice(0, -1));
      return;
    }
  };

  const handleEquals = () => {
    switch (symbol) {
      case "+":
        const additionResult =
          parseFloat(firstOperand) + parseFloat(secondOperand);
        setOutput(additionResult);
        setFristOperand(additionResult);
        setSecondOperand("");
        setSymbol("");
        break;
      case "-":
        const subtractionResult =
          parseFloat(firstOperand) - parseFloat(secondOperand);
        setOutput(subtractionResult);
        setFristOperand(subtractionResult);
        setSecondOperand("");
        setSymbol("");
        break;
      case "*":
        const multiplicationResult =
          parseFloat(firstOperand) * parseFloat(secondOperand);
        setOutput(multiplicationResult);
        setFristOperand(multiplicationResult);
        setSecondOperand("");
        setSymbol("");
        break;
      case "/":
        if (secondOperand === "0") {
          setOutput("Error");
          break;
        }
        const divisionResult =
          parseFloat(firstOperand) / parseFloat(secondOperand);
        setOutput(divisionResult);
        setFristOperand(divisionResult);
        setSecondOperand("");
        setSymbol("");
        break;
      default:
        setOutput("Error");
    }
  };

  const handleAc = () => {
    setSymbol("");
    setFristOperand("");
    setSecondOperand("");
    setOutput("");
  };

  return (
    <div className="calculator">
      <div className="output">{output}</div>
      <div className="previous-operand"></div>
      <div className="current-operand"></div>
      <div className="keypad">
        <button className="span-two" onClick={() => handleAc()}>
          AC
        </button>
        <button onClick={() => handleDelete()}>DEL</button>
        <button>MEM</button>
        <button onClick={() => handleSymbol("/")}>/</button>
        <button onClick={() => handleNumber(7)}>7</button>
        <button onClick={() => handleNumber(8)}>8</button>
        <button onClick={() => handleNumber(9)}>9</button>
        <button onClick={() => handleSymbol("*")}>*</button>
        <button onClick={() => handleNumber(4)}>4</button>
        <button onClick={() => handleNumber(5)}>5</button>
        <button onClick={() => handleNumber(6)}>6</button>
        <button onClick={() => handleSymbol("+")}>+</button>
        <button onClick={() => handleNumber(1)}>1</button>
        <button onClick={() => handleNumber(2)}>2</button>
        <button onClick={() => handleNumber(3)}>3</button>
        <button onClick={() => handleSymbol("-")}>-</button>
        <button onClick={() => handleDot()}>.</button>
        <button onClick={() => handleNumber(0)}>0</button>
        <button className="span-two" onClick={() => handleEquals()}>
          =
        </button>
      </div>
    </div>
  );
};

export default App;
