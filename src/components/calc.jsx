import React, { useState } from 'react'
import FirstRows from './rows/FirstRows'
import DisplayOutput from './DisplayOutput'
import SecRows from './rows/SecRows'
import ThirdRow from './rows/ThirdRow'
import FourthRow from './rows/FourthRow'
import FiftRow from './rows/FiftRow'

const Calc = () => {

  const [display, setDisplay] = useState("00");
  const [lastInput, setLastInput] = useState("number");
  const [result, setResult] = useState("");

  const calculateResult = () => {
    try {
        const expression = display
            .replaceAll("×", "*")
            .replaceAll("÷", "/")

        const answer = Function(`"use strict"; return (${expression})`)();

        setResult(answer.toString());
    } catch {
        setResult("Error");
    }
  }

  const handleNumber = (number) => {
    setDisplay(display => display === "00" ? number : display + number);
    setLastInput("number");
  }

  const handleDecimal = () => {
    setDisplay(display => {
      if (display === "00") {
        return "0.";
      }

      const currentNumber = display.split(/[+\-×÷%]/).pop();

      if (currentNumber.includes(".")) {
        return display;
      }

      return display + ".";
    });
    setLastInput("number");
  }

  const handleClear = () => {
    setDisplay("00");
    setResult("");
    setLastInput("number");
  }

  const handleDelete = () => {
    setDisplay(display => {
      const newDisplay = display.slice(0, -1);
      return newDisplay || "00";
    });
    setLastInput("number");
  }

  const handleOperator = (operator) => {
    if (display === "00") {
      return;
    }

    if (lastInput === "operator") {
      setDisplay(display => display.slice(0, -1) + operator);
    } else {
      setDisplay(display => display + operator);
    }

    setLastInput("operator");
  }

  return (
    <div className='w-screen h-screen justify-center items-center flex'>
        <div className="w-auto flex flex-col justify-center items-center h-auto p-4 rounded-xl shadow-lg bg-slate-200">
            <DisplayOutput display={display} result={result}/>
            <FirstRows handleClear={handleClear} handleDelete={handleDelete} handleOperator={handleOperator}/>
            <SecRows handleNumber={handleNumber} handleOperator={handleOperator} />
            <ThirdRow handleNumber={handleNumber} handleOperator={handleOperator} />
            <FourthRow handleNumber={handleNumber} handleOperator={handleOperator}/>
            <FiftRow handleNumber={handleNumber} handleDecimal={handleDecimal} calculateResult={calculateResult}/>
        </div>
    </div>
  )
}

export default Calc