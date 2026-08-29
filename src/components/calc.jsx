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
    try{
      const expression = display
      .replaceAll("×", "*")
      const evalResult = eval(expression);
      setResult(evalResult);
    } catch (error) {
      console.error("Error calculating result:", error);
    }
  }

  const handleOperator = (operator) => {
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
            <DisplayOutput display={display}/>
            <FirstRows setDisplay={setDisplay} handleOperator={handleOperator}/>
            <SecRows setDisplay={setDisplay} handleOperator={handleOperator} />
            <ThirdRow setDisplay={setDisplay} handleOperator={handleOperator} />
            <FourthRow setDisplay={setDisplay} handleOperator={handleOperator}/>
            <FiftRow setDisplay={setDisplay} handleOperator={handleOperator }/>
        </div>
    </div>
  )
}

export default Calc