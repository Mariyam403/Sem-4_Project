/* PB: 360: Write a ReactJS code in which we have apply filter to skip digits which are less 
than “10” from the array and display all remaining digits of the array 
[3,5,11,4,17,8,21,2,26,13,8] */

const Filterless = ()=>{
    const arr = [3,5,11,4,17,8,21,2,26,13,8];
    const newarr = arr.filter((value)=>{
        if(value>=10){
            return false
        }
        else return true
    })
    return <h1>Array after filter: {newarr}</h1>
}

export default Filterless