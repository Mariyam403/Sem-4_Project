function Event2(){
    const handleChange=(event)=>{
        console.log(event.target.value)
    }
    return (
        <input type='text' name='firstname' onChange={handleChange} />
    )
}

export default Event2