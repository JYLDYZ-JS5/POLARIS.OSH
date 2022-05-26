import v1 from '../визитка/1c9f4725-ce6f-40bb-83f3-12f566699b5a.jpg'
import v2 from '../визитка/04cdb46e-e0c5-466d-ac6d-c1687cd74c10.jpg'
import v3 from '../визитка/Безымянный-1.png'
import v4 from '../визитка/a7ef8268-9d03-4847-b70c-c45bc4c25085.jpg'
import v5 from '../визитка/b65f3e55-f83d-4b96-a458-67cf2dd729ef.jpg'
import v6 from '../визитка/c80814ce-280c-4ac4-91eb-7ce1d9c3dc70.jpg'
import v7 from '../визитка/e95e6f4d-dce6-4e65-8fc7-3b2271ca2d1a.jpg'
import v8 from '../визитка/fa022881-8c6e-4d36-b355-697772f428c3.jpg'
import './morePhots.css'
const Vizitki=()=>{
    const vizitki=[v1,v2,v3,v4,v5,v6,v7,v8]
    return(
        <div className='vizitki-div'>
            {vizitki.map((src)=>(
                <img src={src} />
            ))}
        </div>
    )
}
export default Vizitki