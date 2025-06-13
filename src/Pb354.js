/* PB: 354:  We have an array of numbers and we want to multiply each of these numbers
by 5. Create react js app to display these multiplied numbers using map function. */

const Pb354 = () =>{
    const num = [1,2,3,4,5]

    return(<>
       {
         num.map((n)=><h1>{n*5}</h1>)
        }
        </>
    )
}
export default Pb354;