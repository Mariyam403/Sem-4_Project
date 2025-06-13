/* PB: 358:  Create React app to pass student name, roll number, t1 marks and t2 marks  of 
2 students to component and read the information and display in table format. 
Use Props.   */

const Students = (props) =>{
    return (<>
        <table border='1'>
            <tr>
                <th>Name</th>
                <th>Roll no</th>
                <th>T1</th>
                <th>T2</th>
            </tr>
            {props.value.map((v)=>
                <tr>
                    <td>{v.name}</td>
                    <td>{v.rollno}</td>
                    <td>{v.t1}</td>
                    <td>{v.t2}</td>
                </tr>
           ) }
        </table>
    </>)
}

export default Students;