import './with-picture.css'
import mainPhoto from './Безымянный-2.jpg'
function  WithPicture (props){
    return(
        <div className="withPicture">
        
        <img src={mainPhoto} alt="red" />
      </div>
    )
}
export default WithPicture