/* PB: 423:  Write a ReactJS script to create a digital clock running continuously. 
(useEffect) */

import { useState,useEffect } from "react";
 
const Pb423 = () =>{
    const [date,setDate] = useState(new Date());
    useEffect(()=>{
        setInterval(()=>{setDate(new Date())},1000)
    },[])
    return (<>
        <h1>Hours:Min:Sec</h1>
        <h2>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</h2>
    </>)
}
export default Pb423;