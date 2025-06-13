/* PB:363 :  Write react js script to perform the tasks as asked below.
 Add an array of objects which contains name and branch(CSE,IT,CE) of 
students. 
Apply filter to find students who are from CSE branch. And display name of all 
studens of CSE branch using map function.  */

const FilterBranch = ()=>{
    const arr = [{name:'Mariyam' , branch:'CE'},{name:'Fazal',branch:'IT'},{name:'Fatema',branch:'CSE'},{name: 'Abbas',branch:'CSE'}]
    const newarr = arr.filter((value)=>{
        if(value.branch=='CSE') return true
        else return false;
    })
    return(newarr.map((v)=>{
        return <h1>{v.name}</h1>
    }))
}
export default FilterBranch