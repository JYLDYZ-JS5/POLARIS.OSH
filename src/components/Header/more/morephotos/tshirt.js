import shirt from '../футболки/linning.jpg'
import shirt1 from '../футболки/b1d147b9-c218-4ea0-b6ec-44f0688fe8b1.jpg'
import shirt2 from '../футболки/588b87a7-8c24-46c6-88cf-b6dcc5174547.jpg'
import './morePhots.css'


const Termopechat=()=>{
    const shirts=[shirt2,shirt1,shirt]
    return<div className='termo-div'>
        {shirts.map((src)=>(
            <img src={src}  alt="shirts"/> 
        ))}
    </div>
}
export default Termopechat