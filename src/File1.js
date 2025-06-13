/* PB: 374:  Create a React function component named File1 that receives two props, 
productName and price. The component should display the product name and 
price. Additionally, add a button labeled "Add to cart" to the component. When 
the button is clicked onClick event triggered and an alert should be displayed 
with the message "Your Product is Added to cart!".  */

function File1(props){
    const handleClick=()=>{
        alert('Your item is added to cart')
    }
    return(<>
        <h1>Productname: {props.productname}</h1>
        <h1>Price: {props.price}</h1>
        <button onClick={handleClick}>Add to cart</button>
    </>)
}
export default File1;