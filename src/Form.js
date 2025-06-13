const Form = ()=>{
    const handlesubmit = (e)=>{
        e.preventDefault();
        alert('You clicked submit')
    }
    return(<>
        <form onSubmit={handlesubmit}>
            <button type="submit">Submit</button>
        </form>
    </>)
}
export default Form;