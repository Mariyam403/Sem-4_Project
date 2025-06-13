import { useEffect,useState } from "react";
import axios from 'axios';

const Pb434 = () =>{
    const [img,setimg] = useState(' ')
    useEffect(()=>{
        setInterval(()=>{axios.get('https://dog.ceo/api/breeds/image/random').then((res)=>setimg(res.data)).catch((err)=>console.log(err))},2000)
    },[])
    return(
        <img src = {img.message} height='200px' width='200px'/>
    )
}
export default Pb434;