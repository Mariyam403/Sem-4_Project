import { useContext } from "react";
import { f_color,b_color } from "./P";
const C2= () =>{
    const fc = useContext(f_color);
    const bc = useContext(b_color);
    return(
        <h1 style={{color:fc,backgroundColor:bc}}>Full stack Development</h1>
    )
}
export default C2;