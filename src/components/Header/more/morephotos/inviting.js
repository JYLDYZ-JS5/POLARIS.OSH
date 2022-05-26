import inv from '../пригласительные/cdd5a449-d081-4b42-aa24-7cb3c3721fcf.jpg'
import inv1 from '../пригласительные/b517edcb-eff8-40b8-8f29-b770c50c9ca1.jpg'
import inv2 from '../пригласительные/632c44d6-7924-4897-9efb-89efcbf9be06.jpg'
import inv3 from '../пригласительные/40cb186c-8c34-424f-bfb3-d582b2a86cf7.jpg'
import './morePhots.css'

const Inviting=()=>{
    const invitings=[inv,inv1,inv2,inv3]
    return<div className="invite-div">
        {invitings.map((src)=>(
            <img src={src} />
        ))}
    </div>
}
export default Inviting