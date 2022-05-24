import './slideStyle.css'
import mpa from '../../media/ор.jpg'
import mpa3 from '../../media/мпа.jpg'
import mpa2 from '../../media/азс.jpg'
import banner from '../../media/баннер.jpg'
import banner2 from '../../media/баннер2.jpg'
import banner3 from '../../media/баннер3.jpg'
import { useState, useEffect, useRef } from 'react'

const colors = [banner,mpa2, banner2, banner3, mpa, mpa3]
const delay = 2500

function Slideshow() {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1,
        ),
      delay,
    )

    return () => {
      resetTimeout()
    }
  }, [index])

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((img, index) => (
          <img className="slide" key={index} src={img}  alt="banner" />
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx)
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
export default Slideshow
