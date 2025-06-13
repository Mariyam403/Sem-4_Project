import {useState} from "react";
const Pb415 = ()=>{
    const [num,setNum] = useState(0)
    return(<>
        <h1>{num}</h1>
        <button onClick = {()=>{
            if(num<10){
                setNum(num+1)
            }
        }}>Increment </button>
        <button onClick={()=>{
            if(num>0){
                setNum(num-1)
            }
        }}>Decrement</button>
    </>)
}
export default Pb415;