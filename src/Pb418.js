/*  Write a program to build React app having 2 input text fields (First name and 
last name) and display the entered value on the same page. */

import {useState} from 'react';

const Pb418 = () =>{
    const [fname,setfname] = useState("")
    const [lname,setlname] = useState("")

    // function setf(){
        return(<>
            <input type='text' onChange={(e)=>setfname(e.target.value)}/>
            <input type='text' onChange={(e)=>setlname(e.target.value)}/>
            <h1>First Name : {fname}</h1>
            <h1>Last Name : {lname}</h1>
        </>)
    }
// }
export default Pb418;