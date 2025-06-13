/* PB: 419:  Write a program to build React app for task todo list. 
•	Add 1 input field and button and by clicking on button display entered task on 
the same page. 
•	Also, add delete button with each added task to delete the task.   */

import {useState} from 'react';

const Pb419 = () =>{
    const [t1,setT1] = useState([]);
    const [text,settext] = useState("");
    const deletetask = (taskname) =>{
        setT1(t1.filter((task)=>{
            if(task!=taskname) return true;
            else return false;
        }))
    }
    function handletodolist(){
        setT1([...t1,text])
    }
    function handlechange(e){
        settext(e.target.value);
    }
    return(<>
        <input type='text' onChange={handlechange} />
        <button onClick={handletodolist}>ADD</button>
        {
            t1.map((task)=>(<>
                <h1>{task}</h1>
                <button onClick={()=>deletetask(task)}>DELETE</button>
            </>))
        }
    </>)
}
export default Pb419;   