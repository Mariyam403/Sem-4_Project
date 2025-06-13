/* PB: 365: Create react app to pass product image, name and price as properties from one 
component to another component. Add an array of objects with pic, name and 
price properties of 2 products. Display Image name and price of the products 
in browser using map method.  */

import Productcard from './Productcard'

const Productlist = () => {
    const products = [{
        title:'iphone 15 pro',
        price:'$999',
        image:'iphone.jpg'
    },
    {
        title:'samsung galaxy s23',
        price:'$899',
        image:'samsung.jpg'
    }]
  return (<>
    <Productcard list = {products}/>
  </>)
}

export default Productlist