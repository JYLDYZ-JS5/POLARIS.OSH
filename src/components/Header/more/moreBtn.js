import './moreBtn.css'
function Morebtn(props){
    return(
        <button onClick={props.onMore} className='moreBtn'>Ещё</button>
    )
}
export default Morebtn