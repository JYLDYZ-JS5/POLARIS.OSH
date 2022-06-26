import cls from './MorePhoto.module.css'
import WrapMore from './wrapForMore'
import vizitka from './визитка/обложка визитка.jpg'
import invite from './пригласительные/пригласительное.jpg'
import tshirt from './футболки/футболка.jpg'
import banner from './баннер/4.jpg'
function More(props) {
  return (
    <div className={cls.more}>
      <WrapMore src={vizitka} name="Визитки" onTermo={props.onVizitki} />
      <WrapMore src={invite} name="Пригласительные" onTermo={props.onInvite} />
      <WrapMore src={tshirt} name="Термопечать" onTermo={props.onTermo} />
      <WrapMore src={banner} name="Вывески" onTermo={props.onBanner} /> 
      {/* <div className={cls.wrap} onClick={props.onVizitki}>
        <img src={vizitka} className={cls.moreImg} />
        <i>Визитки</i>
      </div> */}
      {/* <div className={cls.wrap} onClick={props.onInvite}>
        <img src={invite} className={cls.moreImg} />
        <i>Пригласительные</i>
      </div>
      <div className={cls.wrap} onClick={props.onTermo}>
        <img src={tshirt} className={cls.moreImg} />
        <i>Термопечать</i>
      </div> */}
    </div>
  )
}
export default More
