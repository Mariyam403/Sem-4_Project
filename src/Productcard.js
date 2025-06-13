/* PB: 365: Create react app to pass product image, name and price as properties from one 
component to another component. Add an array of objects with pic, name and 
price properties of 2 products. Display Image name and price of the products 
in browser using map method.  */

function Productcard(props){
    return(<>
        {
            props.list.map((value)=>
                <>
                    <img src = {value.image}/>
                    <h2>{value.title}</h2>
                    <p>Price: {value.price}</p>
                </>
            )
        }
    </>)
}
export default Productcard