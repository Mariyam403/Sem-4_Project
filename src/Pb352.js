/* PB: 352: Create react js app to display all array elements in h2 tag using map function */

const Pb352 = () => {
    const arr = ['Mariyam','Fatema','Fazal','Abbas']
    return(
        arr.map((value)=>{
            return(
                <h2>{value}</h2>
            )
        })
    )
}
export default Pb352