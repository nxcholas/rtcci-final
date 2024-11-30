import './Header.css';

function Header () {
  function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
  }

  return (

    <>
      <nav className="nav-container">
        <div className='company-name'>
          <p onClick={scrollToTop}>Adam Van-Dyke</p>
        </div>
          <ul className="nav-elements-container stroke">
            <a href='#aboutme-container' className="nav-element">about</a>
            <a href='#coaching-section' className="nav-element">coaching</a>
            <a href='#testimonials-section' className="nav-element">testimonials</a>
            <a href='#FAQ-container' className='nav-element'>faq</a>
            <a href='#contact-section-container' className="nav-element">contact</a>
          </ul>
      </nav>
    </>
  )
}

export default Header