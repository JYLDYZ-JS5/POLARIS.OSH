import { useRef, useState } from 'react'
import Modal from '../Modal/Modal'
import cls from './orderModal.module.css'

function OrderModal(props) {
    const [available,setAvailable]=useState(false)
    const number=useRef(null)
    const name=useRef(null)
    const [placeholder,setPlaceholder]=useState('Number')
    const [placeholder2,setPlaceholder2]=useState('Name')
    const[className,setclassName]=useState(cls.forNumber)
    const submitData =(e)=>{
        e.preventDefault()
        const valueNumber=number.current.value
        const valueName=name.current.value
        if(valueNumber.length===10 && valueName){
            setAvailable(true)
            console.log(valueNumber)
            console.log(valueName);
        }else{
            setPlaceholder('Введитe номер')
            setAvailable(false)
            setclassName(cls.notforNumber)
            setPlaceholder2('Введите имя....')
        }
    }
    return(
        <Modal onCloseCart={props.onCloseOrderModal}>
            <div className={cls.texts}>
            <h3>Оставьте свой WhatsApp номер</h3>
            <h5>мы свяжемся с вами в течении  нескольких минут</h5>
            </div>
           <form onSubmit={submitData} className={cls.form}>
           <input type='text' className={className} ref={name}  placeholder={placeholder2}/> 
           <input className={className} ref={number} placeholder={placeholder} />
           <button className={cls.send} disabled={available}>Send</button>
            </form> 
        </Modal>
    )
}
export default OrderModal