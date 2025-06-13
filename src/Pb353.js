import React from 'react'

const Pb353 = () => {
    const arr = ['a','b','c','d','e']
  return (
    <div>
        {arr.map((value)=>{
            return <h1>array values = {value.toUpperCase()}</h1>
        })}
    </div>
    )
}

export default Pb353