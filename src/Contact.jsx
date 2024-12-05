import './Contact.css';

function Contact () {
  return (
    <>
      <section id='contact-section-container'>
        <div id='contact-container'>
          <div id='contact-information'>
            <h1>Let's get in touch!</h1>
            <p>To request more information, schedule an appointment, inquire about consulting, or any other general questions you may have, please fill out the form and I’ll respond as soon as possible.</p>
            <div id='contact-icon-container'>
            <div className='icons' id='contact-email'>
              <i class="bi bi-envelope"></i>
              <div className='icon-text'>
                <p>info@rtcci.com</p>
              </div>
            </div>
            <div className='icons' id='contact-tel'>
              <i class="bi bi-phone"></i>
              <div className='icon-text'>
                <p>999-999-9999</p>
              </div>
            </div>
            <div className='icons' id='contact-location'>
              <i class="bi bi-geo-alt-fill"></i>
              <div className='icon-text'>
                <p>Long Beach, CA</p>
              </div>
            </div>
          </div>
          </div>
          <div id='contact-form'>
            <form>
              <input type='text' placeholder='First & Last Name *'></input>
              <input type='email' placeholder='Email *'></input>
              <input type='tel' placeholder='Phone Number *'></input>
              <textarea id='contact-textarea' rows={6} cols={50} placeholder='Tell me a bit more about why you would like to reach out! *'></textarea>
              <button onClick={() => {
                alert("Form Submitted")
              }} type='submit' id='form-button'className='rounded-pill'>Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact