import React from 'react'

const rows = [
    {
        name: "four",
        icon: "4"
    },

    {
        name: "five",
        icon: "5"
    },

    {
        name: "six",
        icon: "6"
    },
]

const minus = {
    name: "Minus",
    icon: "-"
}

const ThirdRow = ({setDisplay, handleOperator}) => {
  return (
    <div className='w-full flex justify-evenly items-center'>
        {rows.map((row) => (
            <button onClick={() => setDisplay(display => display === "00" ? row.icon : display + row.icon)} className="w-15 h-15 p-4 cursor-pointer rounded-full text-slate-900 hover:bg-slate-400 shadow-md text-lg m-1.5 transition ease-out">
                {row.icon}
            </button>
        ))}
        <button onClick={() => handleOperator(minus.icon)} className="w-15 h-15 p-4 rounded-full cursor-pointer text-red-500 hover:bg-slate-400 shadow-md text-lg m-1.5 transition ease-out">
            {minus.icon}
        </button>
    </div>
  )
}

export default ThirdRow