import v1 from '../визитка/1.jpg'
import v2 from '../визитка/2.jpg'
import v4 from '../визитка/3.jpg'
import v5 from '../визитка/4.png'
import v6 from '../визитка/5.jpg'
import v7 from '../визитка/6.jpeg'
import v8 from '../визитка/7.jpg'
import v9 from '../визитка/8.jpg'
import v10 from '../визитка/9.jpg'
import v11 from '../визитка/10.jpg'
import './morePhots.css'
const Vizitki = () => {
  const vizitki = [v1, v2, v4, v5, v6, v7, v8, v9, v10, v11]
  let id = 0
  return (
    <div className="vizitki-div">
      <h4>Визитки с любым дизайном и любого типа </h4>
      {vizitki.map((src) => (
        <img src={src} key={id++} alt='surot' />
      ))}
    </div>
  )
}
export default Vizitki
