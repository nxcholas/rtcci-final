import './Footer.css'

function Footer () {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}

  return(
    <>
      <footer id='footer-section'>
        <div id='footer-information-container'>
          <div id='footer-information'>
            <h4 onClick={scrollToTop}>Adam Van Dyke, Business Consultant</h4>
            <p>I’m a coach focused on helping individuals and organizations reach their full potential by setting goals, improving skills, and overcoming challenges for success in both personal and professional growth.</p>
          </div>
          <p>©2024 Adam Van Dyke. All Rights Reserved.</p>
        </div>
        <div id='footer-navigation'>
        <a href='#aboutme-container' className="nav-element">about</a>
            <a href='#coaching-section' className="nav-element">coaching</a>
            <a href='#testimonials-section' className="nav-element">testimonials</a>
            <a href='#FAQ-container' className='nav-element'>faq</a>
            <a href='#contact-section-container' className="nav-element">contact</a>
        </div>
      </footer>
    </>
  )
}

export default Footer