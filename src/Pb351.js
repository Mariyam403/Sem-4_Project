/* PB: 351:  Write react js script to display alert box with text “welcome to lju” only on double click button */

const Pb351 = () =>{
    function handledouble(){
        alert("Welcome to lju")
    }
    return(
        <button onDoubleClick={handledouble}>Double Click</button>
    )
}
export default Pb351;