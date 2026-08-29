import React from 'react'

const DisplayOutput = ({display, result}) => {
  return (
    <div>
        <div className="p-2 rounded-xl w-72 h-37 bg-slate-300 flex justify-end align-bottom overflow-y-auto">
            <div className="w-full h-full flex flex-col gap-3 justify-end items-end align-right shrink-0 text-2xl">
                <div>{display}</div>
                <div className="text-xl">{result}</div>
            </div>
        </div>
    </div>
  )
}

export default DisplayOutput