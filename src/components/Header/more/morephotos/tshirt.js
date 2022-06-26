import shirt from '../футболки/linning.jpg'
import shirt1 from '../футболки/b1d147b9-c218-4ea0-b6ec-44f0688fe8b1.jpg'
import shirt2 from '../футболки/588b87a7-8c24-46c6-88cf-b6dcc5174547.jpg'
import shirt3 from '../футболки/p-trans-10.jpg'
import shirt4 from '../футболки/f9f1bc70f4cd07156c9d5f1a6561707e.jpg'
import shirt5 from '../футболки/1111.jpg'
import './morePhots.css'

const Termopechat = () => {
  const shirts = [shirt2, shirt1, shirt, shirt3, shirt4, shirt5]
  let id=0
  return (
    <div className="termo-div">
        <h4>Печать на футболках/Термопечать с любым принтом</h4>
      {shirts.map((src) => (
        <img src={src} alt="shirts"  key={id++}/>
      ))}
    </div>
  )
}
export default Termopechat
