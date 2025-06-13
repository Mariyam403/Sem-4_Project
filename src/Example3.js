/* PB: 375: Write react js script to perform the task as below using function component:
 •	Create array of objects which have id, name & city of person.
 •	Display id & name of persons having city name “Ahmedabad” by using map 
function.
 No need to write App.js file  */

function Example3(){
    const arr = [{id:1,name:'Mariyam',city:'Ahmedabad'},{id:2,name:'Fazal',city:'Palanpur'}]
    const newarr =  arr.filter((value)=>{
        if(value.city=='Ahmedabad') return true
        else return false
    })
    return(
        newarr.map((value)=>{
            return (<>
                    <h1>Id: {value.id}</h1>
                    <h1>Name: {value.name}</h1>
            </>)
        })
    )
}
export default Example3;