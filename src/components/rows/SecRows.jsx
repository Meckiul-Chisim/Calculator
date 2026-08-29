import React from 'react'

const rows = [
    {
        name: "seven",
        icon: "7"
    },

    {
        name: "eight",
        icon: "8"
    },

    {
        name: "nine",
        icon: "9"
    },
]

const multiply = {
    name: "Multifly",
    icon: "×"
}

const SecRows = ({setDisplay}) => {
  return (
    <div className='w-full flex justify-evenly items-center'>
        {rows.map((row) => (
            <button onClick={() => setDisplay(row.icon)} className="w-15 h-15 p-4 rounded-full cursor-pointer text-slate-900 hover:bg-slate-400 shadow-md text-lg m-1.5 transition ease-out">
                {row.icon}
            </button>
        ))}
        <button onClick={() => setDisplay(multiply.icon)} className="w-15 h-15 p-4 rounded-full cursor-pointer text-red-500 hover:bg-slate-400 shadow-md text-lg m-1.5 transition ease-out">
            {multiply.icon}
        </button>
    </div>
  )
}

export default SecRows