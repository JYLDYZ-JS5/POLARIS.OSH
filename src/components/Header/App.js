import logo from '../../media/поларис лого.png'
import './App.css'
import markImg from '../../media/withMark.png'
import aboutPhoto from '../../media/aboutPhoto.png'
import Slideshow from '../Scroll-image/slideShowBanner'
import WithPicture from './with-picture/with-picture'
import WithMark from './with-Mark/withMark'
import { AboutPolaris } from './about-polaris/about'
import WithBtn from './withBtn/withBtn'
import WithLogo from './withLogo/withLogog'
import Card from '../Container/Container'
import { useState } from 'react'
import Address from './Address/Address'
import OrderModal from './Order/orderModal'

function Polaris() {
  const [addressModal,setAddressModal]=useState(false)
  const [order,setOrder]=useState(false)
  const onClickAddress=()=>{
    setAddressModal(true)
  }
  const onCloseCart=()=>{
    setAddressModal(false)
  }
  const onClickOrder=()=>{
    setOrder(true)
  }
  const onCloseOrder=()=>{
    setOrder(false)
  }
  return (
    <Card>
     {addressModal && <Address onCloseCart={onCloseCart} />}
     {order && <OrderModal onCloseOrderModal={onCloseOrder} />}
     
      <WithLogo logo={logo} onAddress={onClickAddress} onOrder={onClickOrder} />
      <WithPicture />
      <WithMark markImg={markImg} />
      <AboutPolaris aboutPhoto={aboutPhoto} />
      <WithBtn onClickBtn={onClickOrder} />
      <Slideshow />
      <footer>
        
      </footer>
    </Card>
  )
}
export default Polaris
