import React from 'react'

const rows = [
    {
        name: "one",
        icon: "1"
    },

    {
        name: "two",
        icon: "2"
    },

    {
        name: "three",
        icon: "3"
    },
]

const plus = {
    name: "Plus",
    icon: "+"
}

const FourthRow = () => {
  return (
    <div className='w-full flex justify-evenly items-center'>
        {rows.map((row) => (
            <button className="w-15 h-15 p-4 rounded-full cursor-pointer text-slate-900 hover:bg-slate-400 shadow-md text-lg m-1.5 transition ease-out">
                {row.icon}
            </button>
        ))}
        <button className="w-15 h-15 p-4 rounded-full cursor-pointer text-red-500 hover:bg-slate-400 shadow-md text-lg m-1.5 transition ease-out">
            {plus.icon}
        </button>
    </div>
  )
}

export default FourthRow