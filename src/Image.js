import img1 from './image1.jpg';
import img2 from './image2.jpg';
import img3 from './image3.jpg';

const Image=()=>{
    const arr = [img1,img2,img3]
    return (<div>
        <h1>using arraymap function</h1>
        {
            arr.map((value)=>{
                return <img src={value} height='200px' width='200px'/>
            })
        }
    </div>)
}
export default Image;