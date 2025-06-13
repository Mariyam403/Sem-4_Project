import {useState} from 'react';
function ReactForm(){
    const [name,setname] = useState("");
    const [city,setcity] = useState("surat");
    const [gender,setgender] = useState("male");
    const handlesubmit = (e) =>{
        e.preventDefault();
        alert(`name: ${name} , city=${city} , gender=${gender}`)
    }
    return(
    <form onSubmit={handlesubmit}>
        Name: <input type='text' value={name} onChange={(e)=>setname(e.target.value)}></input>
        City: 
        <select value={city} onChange={(e)=>setcity(e.target.value)}>
            <option value="surat">Surat</option>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="vadodara">Vadodara</option>
        </select>
        Gender: 
        <input type='radio' name='r1' value="male" onChange={(e)=>setgender(e.target.value)}/>Male
        <input type='radio' name='r1' value="female" onChange={(e)=>setgender(e.target.value)}/>Female
        
        <input type='submit'/>
    </form>
        
    )
}
export default ReactForm;