/* PB: 350:  Write react js script to display values in console while changing it in text box. */

const Pb350 = () =>{
    function handlechange(e){
        console.log(e.target.value);
    }
    return(
        // <div>
            <input type="text" onChange={handlechange}/>
        /* </div> */
    )
}

export default Pb350;