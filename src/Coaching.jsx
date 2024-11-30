import './Coaching.css'
import people from './assets/people.png'
import people2 from './assets/people2.png'

function Coaching () {
  return (
    <>
      <section  className='section-divider-wave1'
      id='coaching-section'>
        <div id='coaching-container'>
          <div id='coaching-content'>
            <div id='coaching-text'>
              <h1>Professional Coaching</h1>
              <p>
              I offer coaching to help you <span className='span-text'>achieve your goals</span>, <span className='span-text'>improve relationships</span>, and <span className='span-text'>navigate transitions</span> with clarity. Together, we’ll enhance your strengths, skills, and strategies for a fulfilling path forward.
              </p>
              <button id='coaching-button' className='btn btn-primary btn-small rounded-pill'>Book Now</button>
            </div>
            <img className='people1' src={people} height={375}></img>
          </div>
          <div id='growth-content'>
            <img className='people2' src={people2} height={340}></img>
            <div id='growth-text'>
              <h1>Growth Development</h1>
              <p>
              I offer personalized coaching to help you unlock your potential, manage stress, and become a more effective leader. <span className='span-text'>Together, we’ll enhance self-awareness, mindset, and emotional intelligence</span> while developing strategies for balance, growth, and success.
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </>
  )
}

export default Coaching