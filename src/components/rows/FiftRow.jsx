import React from 'react'

const rows = [
    {
        name: "showMore",
        icon: "⋯"
    },

    {
        name: "zero",
        icon: "0"
    },

    {
        name: "point",
        icon: "."
    },
]

const equal = {
    name: "equal",
    icon: "="
}

const FiftRow = ({setDisplay, calculateResult, setLastInput}) => {
  return (
    <div className='w-full flex justify-evenly items-center'>
        {rows.map((row) => (
            <button onClick={() => {
                if(row.name === "point"){
                    setDisplay(display => {
                        if(display.includes(".")){
                            return display
                        }

                        return display === "00" ? "0." : display + "."
                    })
                } else {
                    setDisplay(display => display === "00" ? row.icon : display + row.icon)
                }
            }}
            className="w-15 h-15 p-4 rounded-full text-slate-900 hover:bg-slate-400 shadow-md text-lg m-1.5 transition ease-out cursor-pointer">
                {row.icon}
            </button>
        ))}
        <button onClick={calculateResult} className="w-15 h-15 p-4 rounded-full text-red-500 hover:bg-slate-400 shadow-md text-lg m-1.5 transition ease-out cursor-pointer">
            {equal.icon}
        </button>
    </div>
  )
}

export default FiftRow