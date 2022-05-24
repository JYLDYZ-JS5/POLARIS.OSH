import './withBtn.css'
export default function WithBtn(props){
    return(
        <div className="withBtn">
        <h1 className="h1">
          Производим вывески, баннеры, этикетки, упаковку, листовки, визитки и
          многое иное
        </h1>
        <button className="orderBtn" onClick={props.onClickBtn}>Оформить заказ</button>
      </div>
    )
}