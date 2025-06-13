/* PB: 372:  Create a React app to perform tasks as asked using functional component:
 1)Create a react Router that includes three routes: Home, Product, and Contact 
and implement navigation between these routes.    2)Create a route that 
displays a Home page, Product details page and Contact details page.   3) 
When a user clicks on Home page it should navigate to home page and display 
“Welcome to LJU” in bold in h1 heading. When a user clicks on a Product 
page, it should navigate to the product detail page and display three products 
information with price and description using props. And when user clicks on 
Contact page it should navigate to contact details page and display contact 
information with blue color font. */

import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './Home'
import Product from'./Product'
import Contact from './Contact';

const Main_pb372=()=>{
    const products=[{information:'This is Mobile',price:'1000$'},{information:'This is Laptop',price:'2000$'},{information:'This is Tablet',price:'3000$'}]
    return(
        <Router>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <ul className='nav navbar-nav'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Product'>Product</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Product' element={<Product products={products}/>}/>
                <Route path='/Contact' lement={<Contact/>}/>
            </Routes>
        </Router>
    )
}
export default Main_pb372