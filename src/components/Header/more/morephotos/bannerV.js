import v1 from '../баннер/4.jpg'
import v2 from '../баннер/910f2ccdf.jpg'
import v3 from '../баннер/20180919_190500.jpg'
import v4 from '../баннер/DSC_0946.jpg'
import v5 from '../баннер/Kupit_gotovuyu_vyves.jpg'
import v6 from '../баннер/Vyveska_na_podlozhke.jpg'
import v7 from '../баннер/VSE_DLYA_VAS_3.jpg'
import v8 from '../баннер/72c4ee0f245845d32213475eb5c20e85_mZKGamDJVr.jpg'
import v9 from '../баннер/zastavka.jpg'
import v10 from '../баннер/11.jpg'
import './morePhots.css'
function Banner() {
  const src = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10]
  let id = 0
  return (
    <div className="banner">
      <h4>Вывески и объемные буквы любого типа </h4>
      {src.map((src) => (
        <img src={src} key={id++} alt='surot' />
      ))}
    </div>
  )
}
export default Banner
