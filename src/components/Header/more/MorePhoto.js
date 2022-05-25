import cls from './MorePhoto.module.css'
import vizitka from './визитка/обложка визитка.jpg'
import invite from './пригласительные/пригласительное.jpg'
import tshirt from './футболки/футболка.jpg'
function More(props) {
  const photos = [vizitka, invite, tshirt]
  return (
    <div className={cls.more} onClick={props.onClickPhoto}>
      {photos.map((el) => (
        <img src={el} className={cls.moreImg} />
      ))}
    </div>
  )
}
export default More
