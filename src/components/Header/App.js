import logo from '../../media/поларис лого.png'
import './App.css'
import markImg from '../../media/withMark.png'
import aboutPhoto from '../../media/aboutPhoto.png'
// import Slideshow from '../Scroll-image/slideShowBanner'
import WithPicture from './with-picture/with-picture'
import WithMark from './with-Mark/withMark'
import { AboutPolaris } from './about-polaris/about'
import WithBtn from './withBtn/withBtn'
import WithLogo from './withLogo/withLogog'
import Card from '../Container/Container'
import { useState } from 'react'
import Address from './Address/Address'
import OrderModal from './Order/orderModal'
import inst from '../Header/withLogo/инста.png'
import whats from '../Header/withLogo/вотс.png'
import More from './more/MorePhoto'
import Vizitki from './more/morephotos/vizitki'
import Termopechat from './more/morephotos/tshirt'
import Inviting from './more/morephotos/inviting'
import Banner from './more/morephotos/bannerV'
import Price from '../Price/price'

function Polaris() {
  const [addressModal, setAddressModal] = useState(false)
  const [order, setOrder] = useState(false)
  const [vizitki, setVizitki] = useState(false)
  const [shirt, setShirt] = useState(false)
  const [invite, setInvite] = useState(false)
  const [banner, setBanner] = useState(false)

  const onClickAddress = () => setAddressModal(true)
  const onCloseCart = () => setAddressModal(false)
  const onClickOrder = () => setOrder(true)
  const onCloseOrder = () => setOrder(false)
  const onMainClick = () => {
    setVizitki(false)
    setShirt(false)
    setInvite(false)
    window.scrollTo(0, 0)
    setBanner(false)
  }

  const onClickPhotoVizitki = () => {
    setVizitki(true)
    window.scrollTo(0, 0)
  }
  const onInvite = () => {
    setInvite(true)
    window.scrollTo(0, 0)
  }
  const onTermo = () => {
    setShirt(true)
    window.scrollTo(0, 0)
  }
  const onBanner = () => {
    setBanner(true)
    window.scrollTo(0, 0)
  }
  return (
    <>
      <Card>
        {addressModal && <Address onCloseCart={onCloseCart} />}
        {order && <OrderModal inst={inst} whats={whats} onCloseOrderModal={onCloseOrder} />}

        <WithLogo
          logo={logo}
          onAddress={onClickAddress}
          onOrder={onClickOrder}
          mainClick={onMainClick}
          onClickLogo={onMainClick}
        />
        {vizitki && <Vizitki />}
        {shirt && <Termopechat />}
        {invite && <Inviting />}
        {banner && <Banner />}
        {!vizitki && !shirt && !invite && !banner && (
          <>
            <WithPicture />
            <WithBtn onClickBtn={onClickOrder} />
            {/* <Slideshow /> */}
            <More
              onVizitki={onClickPhotoVizitki}
              onInvite={onInvite}
              onTermo={onTermo}
              onBanner={onBanner}
            />
            <Price />
            <AboutPolaris aboutPhoto={aboutPhoto} />
            <WithMark markImg={markImg} />
          </>
        )}
        <footer>
          <div className="footer">
            <div className="first">
              <i> &#9742; +996 553 481 984</i>
              <i>
                ул Гапар Айтиева 17 (напротив <br /> художественной школы
                Г.Айтиева)
              </i>
            </div>
            <div>
              <img src={logo} alt="logo" className="footerLogo" />
            </div>
            <div className="third">
              <a href="polaris.osh.pc@mail.ru">&#9993; Email</a>
              <a href="https://www.instagram.com/polaris.osh">
                <img src={inst} alt="instagram" className="footerinst" />
                Instagram
              </a>
              <a href="https://www.instagram.com/polaris.osh">
                <img src={whats} alt="whatsApp" className="footerinst" />
                WhatsApp
              </a>
              <a href="/">&#128227; Telegram</a>
            </div>
          </div>

          <p>Developer:JYLDYZ TOROGULOVA &#128151;</p>
        </footer>
      </Card>

    </>
  )
}
export default Polaris
