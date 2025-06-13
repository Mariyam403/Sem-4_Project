import {useState,useEffect} from 'react';
const Exampleee = () =>{
    const [count,setcount] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{setcount(count+1)},1000)
    })
    return(
        <h1>I have rendered {count} times</h1>
    )
}
export default Exampleee;