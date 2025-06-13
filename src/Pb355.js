/* PB: 355: Create react app which displays 3 images using map function. */

const Pb355 = () =>{
    const images = ['image1.jpg','image2.jpg','i3.jpg']
    return(
        <>{
            images.map((v)=>{
                return(
                    <img src={v}/>
                )
            })
        }</>
    )
}
export default Pb355;