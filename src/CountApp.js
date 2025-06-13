import React , {use, useState} from 'react';
function CountApp(){
    const [count,setcount] = useState(0);
    return(<>
        <p>You clicked {count} times</p>
        <button onClick = {()=>setcount(count+1)}> Click Me </button>
    </>)
}
export default CountApp;