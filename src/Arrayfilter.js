/* PB: 356:  Write a ReactJS code in which we have apply filter to skip digit “3” from the 
array of 1 to 5 and display all remaining digits of the array */

const Arrayfilter = () =>{
    const arr=[1,2,3,4,5]
    const newarr = arr.filter((num)=>{
        if(num==3) return false;
        else return true;
    })
    return(<>
        <h1>Array after filter: {newarr}</h1>
    </>)
}

export default Arrayfilter;