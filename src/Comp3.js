import { useContext } from "react";
import { number1,number2 } from "./Comp";

const Comp3 = () => {
    const num1 = useContext(number1);
    const num2 = useContext(number2);
    return(
        num1 * num2
    )
}
export default Comp3;