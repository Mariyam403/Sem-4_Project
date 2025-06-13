/* PB: 416:  Write a program to build React app to perform the tasks as asked below.
 •	Add three buttons “Change Text”, “Change Color”, “Hide/Show”.
 •	Add heading “LJ University” in red color(initial) and also add “React Js 
Hooks” text in h2 tag.
 •	By clicking on “Change text” button text should be changed to “Welcome 
students” and vice versa. 
•	By clicking on “Change Color” button change color of text to “blue” and vice 
versa. This color change should be performed while double clicking on the 
button.
 •	Initially button text should be “Hide”. While clicking on it the button text 
should be changed to “Show” and text “React Js Hooks” will not be shown.  */

import React ,{useState} from 'react';
const Pb416 = () =>{
    const [c1,setc1] = useState('green')
    const [c2,setc2] = useState('normal')
    const[text,settext] = useState("")
    const [buttontext,setbuttontext] = useState('Show')

    const updatebutton = () =>{
        if(buttontext=='Show'){
            setbuttontext('Hide')
            settext('LJ University')
        }
        else{
            setbuttontext('Show')
            settext('')
        }
    }
    function changefont(){
        setc2('italic')
    }
    function changecolor(){
       if(c1=='red'){
        setc1('blue')
       }
       else{
        setc1('red')
       }
    }
    return(<>
        <h1 style={{color:c1,fontStyle:c2}}>LJ University</h1>
        <button onClick={changefont}>Change Font</button>
        <button onClick={changecolor}>Change Color</button>

        <h1>{text}</h1>
        <button onClick={updatebutton}>{buttontext}</button>
    </>)

}
export default Pb416;