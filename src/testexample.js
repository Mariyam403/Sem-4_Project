// fat arrow function ---> rafce

import Ex from './Ex';
function Test(){
    var n = 'ABC'
    return (<div>
        <Ex name={n} rollno={123}></Ex>
        <Ex name='XYZ' rollno={456}></Ex>
    </div>
    )
}
export default Test