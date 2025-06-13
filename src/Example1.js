/* QB: 358:  Create React app to pass student name, roll number, t1 marks and t2 marks  of 
2 students to component and read the information and display in table format. 
Use Props. */

import Students from './Students'
function Example1(){
    const students = [
        {name:'ABC',rollno :'001' , t1:'25' , t2:'24'},
        {name:'PQR',rollno :'002' , t1:'22' , t2:'24'}
    ]
    return (
    <Students value={students}/>)
}
export default Example1