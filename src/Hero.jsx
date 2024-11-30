
import './Hero.css'
import heroImage from './hero-image.png';

function Hero () {
  const scrollToForm = () => {
    const targetDiv = document.getElementById('contact-section-container');
    if (targetDiv) {
      const targetPosition = targetDiv.offsetTop - 75.2;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id='hero-container'>
      <div id='hero-body'>
        <div id='hero-content'>
          <p className='sub-text1'>Business Consultant, CAa</p>
          <p className='main-text1'>Rising Tides Lifts All Ships</p>
          <p className='sub-text2'>Discover your next step foward, professionally and personally.</p>
          <div id='hero-buttons-container'>
          <button onClick={scrollToForm} className='btn btn-primary rounded-pill'>Book Appointment</button>
          <button className='btn btn-secondary btn-lg rounded-pill bg-transparent border-0'>Learn More</button>
        </div>
        </div>
        <div id='hero-image-container'>
          <img src={heroImage} width={650} height={650} ></img>
        </div>
      </div>
    </section>
  )
}

export default Hero