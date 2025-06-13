import car from './Pb348car';

function Pb348test(){
    const carinfo = {name:'fond' , model:'mustang'}
    return(<>
        <h1>Car Details</h1>
        <car brand = {carinfo} />
    </>)
}
export default Pb348test;