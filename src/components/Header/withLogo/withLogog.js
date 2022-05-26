import './withLogo.css'
import whatsApp from './вотс.png'
import instagram from './инста.png'
function WithLogo(props) {
  return (
    <header className="header">
      <div>
        <img src={props.logo} alt="logo" className="logo" onClick={props.onClickLogo} />
      </div>
      <nav className="nav">
        <button className="navigation" onClick={props.mainClick}><h4>Главная</h4></button>
        <button className="navigation" onClick={props.onAddress}><h4>Адрес</h4></button>
        <button className="navigation" onClick={props.onOrder}> <h4>Заказать</h4></button>
        <div className='icons'>
        <a href='https://www.instagram.com/polaris.osh' ><img src={instagram} alt="instagram" /></a>
        <a href='https://www.instagram.com/polaris.osh'><img src={whatsApp} alt="whatsApp" /></a>
        </div>
      </nav>
    </header>
  )
}
export default WithLogo
