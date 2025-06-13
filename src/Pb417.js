/* PB: 417:  Write a program to build React app having a button which changes image by 
clicking it. (Add two images) */

import img1 from './img2.jpg'
import img2 from  './image3.jpg'
import {useState} from 'react';

const Pb417 = () =>{
    const [img,setimg] = useState(img1)
    function changeimg(){
        if(img === img1){
            setimg(img2)
        }
        else{
            setimg(img1)
        }
    }
    return(<>
        <img src={img} width='200px'></img>
        <button onClick={changeimg}>Change Image</button>
    </>)
}

export default Pb417