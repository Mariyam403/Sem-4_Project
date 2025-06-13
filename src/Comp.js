/* PB: 425:  Write a reactJS program to perform the tasks as asked below.
 •	Create one main file (parent file) name Comp.js and other 3 component files 
Comp1.js, Comp2.js, Comp3.js. 
•	Pass Number1 and Number 2 from Comp.js file to Comp3.js file. Calculate 
multiplication of the numbers using useContext. */

import { createContext} from 'react';
import Comp1 from './Comp1'
// import Comp2 from './Comp2';

const number1 = createContext();
const number2 = createContext();

const Comp = () => {
    return(
        <number1.Provider value={10}>
            <number2.Provider value={20}>
                <Comp1/>
                {/* <Comp2/> */}
            </number2.Provider>
        </number1.Provider>
    )
}
export default Comp;
export {number1,number2}