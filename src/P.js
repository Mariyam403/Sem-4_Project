/* PB: 438: Create a React app with three components: parent component P.js and two 
child components C1.js, C2.js.
 Use useContext hook to pass two colors from the Parent component P.js to the 
Child component C2.js. (Yellow color as font color and Blue color as 
background color)
 In Child component C1.js import child component C2.js .
 In C2.js display “Full stack Development” text in h1 heading with above 
mentioned background color and font color using context.  */ 

import { createContext } from "react";
import C1 from './C1'
const f_color = createContext();
const b_color = createContext();
const P = () =>{
    return (
        <f_color.Provider value='yellow'>
            <b_color.Provider value='blue'>
                <C1/>
            </b_color.Provider>
        </f_color.Provider>
    )
}
export default P;
export {f_color,b_color};