import cls from './MorePhoto.module.css'
const WrapMore = (props) => {
  return (
    <div className={cls.wrap} onClick={props.onTermo}>
      <img src={props.src} className={cls.moreImg} alt='surot' />
      <i>{props.name}</i>
    </div>
  )
}
export default WrapMore