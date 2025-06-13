import React from 'react';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Contact from './Contact';
const Main1=()=>{
    return(
        <Router>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Product'>Product</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
            </ul>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Product' element={<Product/>}/>
                <Route path='/Contact' element={<Contact/>}/>
            </Routes>
        </Router>
    )
}
export default Main1;