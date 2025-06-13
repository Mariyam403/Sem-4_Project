/* PB: 349:  Write react js script to display alert box with text “Welcome to LJU” by 
clicking on button */

const Pb349 = () =>{
    function handleclick(){
        alert("Welcome to LJU")
    }
    return(
        <button onClick={handleclick}>Click me</button>
    )
}
export default Pb349;