import inv from '../пригласительные/40cb186c-8c34-424f-bfb3-d582b2a86cf7.jpg'
import inv2 from '../пригласительные/632c44d6-7924-4897-9efb-89efcbf9be06.jpg'
import inv3 from '../пригласительные/пригласительное.jpg'
import inv4 from '../пригласительные/2537f1f61387a55ddaa572e89f24--svadebnyj-salon-priglasheniya-lavanda.jpg'
import inv5 from '../пригласительные/1.jpg'
import inv6 from '../пригласительные/2.jpeg'
import inv7 from '../пригласительные/3.jpeg'
import inv8 from '../пригласительные/4.jpeg'
import inv9 from '../пригласительные/5.jpg'
import inv10 from '../пригласительные/6.jpg'
import './morePhots.css'

const Inviting = () => {
  const invitings = [inv, inv2, inv3, inv4, inv5, inv6, inv7, inv8, inv9, inv10]
  let id=0
  return (
    <div className="invite-div">
        <h4>Красивые пригласительные на любое мероприятие </h4>
      {invitings.map((src) => (
        <img src={src}  key={id++}alt='surot'/>
      ))}
    </div>
  )
}
export default Inviting
