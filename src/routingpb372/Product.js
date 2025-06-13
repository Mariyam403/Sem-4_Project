import React from "react";
import App from "../App";

function Product({products}){
    return(
        products.map((product)=>{
            return(
               <>
                <h1>Information: {product.information}</h1>
                <h1>Price: {product.price}</h1>
               </> 
            )
        })
    )
}
export default Product;