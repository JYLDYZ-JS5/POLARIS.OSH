import { useDispatch, useSelector } from 'react-redux'
import { sliceActions } from '../../../store/reducers'
import Modal from '../Modal/Modal'
import cls from './orderModal.module.css'

function OrderModal(props) {
  const dispatch = useDispatch()
  const values = useSelector(state => state.registration)
  const nameChangeHandler = (e) => { dispatch(sliceActions.nameChangeHandler(e.target.value)) }
  const numberChangeHandler = (e) => { dispatch(sliceActions.numberChangeHandler(e.target.value)) }
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(sliceActions.submitHandler())
    // console.log(values.name, values.number);
  }
  const nameBlurChangeHandler = () => { dispatch(sliceActions.nameBlurChangeHandler) }
  const numberBlurChangeHandler = () => { dispatch(sliceActions.numberBlurChangeHandler) }
  return (
    <Modal onCloseCart={props.onCloseOrderModal}>
      <div className={cls.texts}>
        <h3>Оставьте свой WhatsApp номер</h3>
        <h5>мы свяжемся с вами в течении нескольких минут</h5>
      </div>
      <form className={cls.form} onSubmit={submitHandler}>
        <input
          type="text"
          className={`${cls.forNumber} ${values.nameRed}`}
          placeholder="Введите имя"
          onChange={nameChangeHandler}
          value={values.name}
          onBlur={nameBlurChangeHandler}
        />
        <input
          type="text"
          className={`${cls.forNumber} ${values.numberRed}`}
          placeholder="Введите номер"
          onChange={numberChangeHandler}
          value={values.number}
          onBlur={numberBlurChangeHandler}
        />
        <button className={cls.send} >Send</button>
        <p>Или</p>
        <div className={cls.third}>
          <a href="polaris.osh.pc@mail.ru">&#9993; Email</a>
          <a href="https://www.instagram.com/polaris.osh">
            <img src={props.inst} alt="instagram" className={cls.footerinst}   />
            Instagram
          </a>
          <a href="https://www.instagram.com/polaris.osh">
            <img src={props.whats} alt="whatsApp" className={cls.footerinst} />
            WhatsApp
          </a>
          <a href="/">&#128227; Telegram</a>
        </div>
      </form>

    </Modal>
  )
}
export default OrderModal
