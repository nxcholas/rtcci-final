import './AboutMe.css';

function AboutMe () {
  return (
    <>
      <section id='aboutme-container'>
        <h1 id='aboutme-heading'>About Me</h1>
        <div id='aboutme-content-container'>
          <div className='background-information-container'>
            <h5>Professional Expertise</h5>
            <p>
              With decades of diverse experience, Adam Van Dyke is a seasoned guide in transitions. He collaborates with <span className='span-text'>executives</span>, <span className='span-text'>military professionals</span>, and <span className='span-text'>early-career talent</span>, fostering growth through his positive outlook and strategic insights.
            </p>
          </div>
          <div className='background-information-container'>
            <h5>Certifications & Achievements</h5>
            <p>
            An accredited member of the <span className='span-text'>International Coaching Federation</span>, Adam has built and trained high-performing teams at one of the world’s most innovative companies, while advancing his professional growth through specialized programs.
            </p>
          </div>
          <div className='background-information-container'>
            <h5>Educational Background</h5>
            <p>
            Adam holds a Master’s in <span className='span-text'>Executive Coaching</span> from Concordia University, a Master’s in <span className='span-text'>Marriage and Family Therapy</span> from Azusa Pacific University, and a Bachelor’s in <span className='span-text'>Psychology</span> from Point Loma Nazarene University.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMe