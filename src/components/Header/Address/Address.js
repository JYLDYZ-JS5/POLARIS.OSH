import Modal from '../Modal/Modal'
import cls from './Address.module.css'
import location from './Безымянный-1.jpg'

function Address(props) {
  
  return (
    <Modal onCloseCart={props.onCloseCart}>
      <div className={cls.ourAddress}>
        <h1>НАШ АДРЕС &#128205;</h1>
        <div className={cls.withLocationtext}>
          <img src={location} alt="location" />
          <div className={cls.locationText}>
            <div>
              <h4>ул. Г.Айтиева 17 Osh Kyrgyzstan</h4>
              <p>ориентир:Напротив художественной школы имени Г.Айтиева </p>
            </div>
            <a href='https://2gis.kg/osh/geo/70030076147581362'>Геолокация</a>
            <button onClick={props.onCloseCart} className={cls.closeAddress}>
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
export default Address
