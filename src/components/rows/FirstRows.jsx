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

    {
        name: "percent",
        icon: "%"
    },

    {
        name: "divident",
        icon: "÷"
    }
]

const FirstRows = ({setDisplay}) => {
  return (
    <div className='w-full flex justify-evenly items-center'>
        {rows.map((row) => (
            <button onClick={() => setDisplay(row.icon)} className="w-15 h-15 p-4 rounded-full text-red-500 cursor-pointer hover:bg-slate-400 shadow-md text-lg m-2 transition ease-out">
                {row.icon}
            </button>
        ))}
    </div>
  )
}

export default FirstRows