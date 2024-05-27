import './Hero.css'
import dar_arrow from '../../assets/images/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We priotise a better education in excellence and godliness</h1>
        <p>Our cutting-edge curricullum is designed to empower students with the knowledge, skills, and experience needed to excel in the dynamic field of education</p>
        <button className='btn'>Explore More <img src={dar_arrow} alt="explore icon" /></button>
      </div>
    </div>
  )
}

export default Hero
