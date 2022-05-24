import './withMark.css'

function WithMark(props){
    return(
        <div className="withMark">
        <img src={props.markImg} alt="with mark " />
        <div className="razdelitel"></div>
        <div className="textWithMark">
          <span>Современные технологии печати </span>
          <span>Чёткое соблюдение сроков выпуска</span>
          <span>Собственная дизайнерская студия</span>
          <span>Гарантия качества ваших заказов</span>
        </div>
      </div>
    )
}
export default  WithMark