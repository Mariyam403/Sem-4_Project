/* PB: 362:Write react js script to perform the tasks as asked below.
 Add an array of objects which contains name and age of people. 
Apply filter to find people with age less than 40. And display name of all 
people using map function.  . */

const Filterage = () =>{
    const arr = [{name:'Mariyam', age: 19},{name:'Fazal',age:20},{name:'Ayesha',age:45},{name:'Raza',age:50}]
    const newarr = arr.filter((value=>{
        if(value.age>40) return false
        else return true;
    }))
    return(newarr.map((v)=>{
        return <h1>{v.name}</h1>
    }))
}
export default Filterage;