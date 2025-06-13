/* function Football(){
    const shoot = ()=>{
        alert('Great Shot!')
    }
    return (
        <button onClick={shoot}>Take a shot</button>
    )
}
export default Football;  */

/*function Football(){
    const shoot = (a)=>{
        alert(a)
    }
    return (
        <button onClick={()=>shoot('Great Shot!')}>Take a shot</button>
    )
}
export default Football;  */

//--------------------OnDoubleClick-----------------------
function Football(){
    const shoot = (a)=>{
        alert(a)
    }
    return (
        <button onDoubleClick={()=>shoot('Great Shot!')}>Take a shot</button>
    )
}
export default Football;

