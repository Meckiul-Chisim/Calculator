import React from 'react'

const rows = [
    {
        name: "allClear",
        icon: "AC"
    },

    {
        name: "delete",
        icon: "↶"
    },
]

const percent = {
    name: "percent",
    icon: "%"
}

const divide = {
    name: "divide",
    icon: "÷"
}

const FirstRows = ({setDisplay, setResult, handleOperator}) => {
  return (
    <div className='w-full flex justify-evenly items-center'>
        {rows.map((row) => (
            <button onClick={() => {
                if(row.name === "allClear"){
                    setDisplay("00");
                    setResult("")
                } else if (row.name === "delete"){
                    setDisplay((display) => {
                        const newDisplay = display.slice(0, -1)
                        return newDisplay || "00";
                    })
                } else {
                    setDisplay(display => display + row.icon)
                }
            }} 
            className="w-15 h-15 p-4 rounded-full text-red-500 cursor-pointer hover:bg-slate-400 shadow-md text-lg m-2 transition ease-out">
                {row.icon}
            </button>
        ))}

        <button onClick={() => handleOperator(percent.icon)} className="w-15 h-15 p-4 rounded-full text-red-500 cursor-pointer hover:bg-slate-400 shadow-md text-lg m-2 transition ease-out">
            {percent.icon}
        </button>

        <button onClick={() => handleOperator(divide.icon)} className="w-15 h-15 p-4 rounded-full text-red-500 cursor-pointer hover:bg-slate-400 shadow-md text-lg m-2 transition ease-out">
            {divide.icon}
        </button>
    </div>
  )
}

export default FirstRows