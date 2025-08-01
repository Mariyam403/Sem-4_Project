/* Create react app to perform tasks as asked.
        First create files as asked below in routing folder
 1.        Home.js - for the home page content
 2.        Shop.js - for the shop page content
 3.        Contact.js - for the contact page content
 4.        Nopage.js - for the page other than mentioned links
 Create Main.js file which contains Links for Home, Shop and Product page. 
Also, add functionality of page routing.
 Finally call Main.js in App.js.  */

import { BrowserRouter as Route,Routes,Router,Link } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import Shop from './Shop';

const Pb357 = () =>{
        return(
    <Router>
        <nav className='nav navbar-expand-lg navbar-dark bg-dark>
                <ul className='nav navbar-nav'>
                        <li><Link to='/'>No page</Link></li>
                        <li><Link to='/Home'>Home</Link></li>
                        <li><Link to='/Shop'>Shop</Link></li>
                        <li><Link to = '/Contact'>Contact</Link></li>
                </ul>
        </nav>
        <Routes>
                <Route path='/' element={<Nopage/>}/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/Shop' element={<Shop/>}/>
        </Routes>
</Router> )
}

export default Pb357
