import './Campus.css'
import gallery_1 from '../../assets/images/campus1.webp'
import gallery_2 from '../../assets/images/campus2.webp'
import gallery_3 from '../../assets/images/campus3.webp'
import gallery_4 from '../../assets/images/campus4.webp'
import white_arrow from '../../assets/images/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="campuse-gallery" />
        <img src={gallery_2} alt="campuse-gallery" />
        <img src={gallery_3} alt="campuse-gallery" />
        <img src={gallery_4} alt="campuse-gallery" />
      </div>
      <button className='btn dark-btn'>Explore more <img src={white_arrow} alt="direction icon" /></button>
    </div>
  )
}

export default Campus
