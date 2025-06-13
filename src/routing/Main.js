import Home from "./home";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Shop from "./shop";
import Nopage from "./nopage";
import Contact from "./contact";
function Main(){
      return(
        <div>
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path = '/' element = {<Home/>}></Route>
                <Route path = '/shop' element = {<Shop/>}></Route>
                <Route path = '/contact' element = {<Contact/>}></Route>
                <Route path = '/*' element={<Nopage/>}></Route>
            </Routes>
        </Router>
        </div>
    )
}
export default Main;