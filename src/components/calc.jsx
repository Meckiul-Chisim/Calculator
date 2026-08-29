import React, { useState } from 'react'
import FirstRows from './rows/FirstRows'
import DisplayOutput from './DisplayOutput'
import SecRows from './rows/SecRows'
import ThirdRow from './rows/ThirdRow'
import FourthRow from './rows/FourthRow'
import FiftRow from './rows/FiftRow'

const Calc = () => {

  const [display, setDisplay] = useState("00")
  return (
    <div className='w-screen h-screen justify-center items-center flex'>
        <div className="w-auto flex flex-col justify-center items-center h-auto p-4 rounded-xl shadow-lg bg-slate-200">
            <DisplayOutput display={display}/>
            <FirstRows display={setDisplay}/>
            <SecRows display={setDisplay} />
            <ThirdRow display={setDisplay} />
            <FourthRow display={setDisplay}/>
            <FiftRow display={setDisplay}/>
        </div>
    </div>
  )
}

export default Calc