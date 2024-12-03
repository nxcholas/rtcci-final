import './Testimonials.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <>
    <section id="testimonials-section">
      <div id='testimonials-content'>
        <div id='testimonials-heading'>
          <h1>Testimonials</h1>
        </div>
        <div className='testimonial-card'>
          <div className='card'>
            <Slider {...settings}>
            {data.map((d) => (
              <div className='card-content'>
                <div className='card-heading'>
                  <img src={d.img}></img>
                </div>
                <div className='card-description'>
                  <p className='card-name'>{d.name}</p>
                  <p>{d.review}</p>
                  <button>Read More</button>
                </div>
              </div>
            ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

const data = [
  {
    name: `John Morgan`,
    img: '/rtcci-final/assets/person1.png',
    review: `“Adam is a genuine Coach who is generous with his time and energy. Not only was he sincere, enthusias...”`
  },
  {
    name: `Ellie Anderson`,
    img: `/rtcci-final/assets/person2.png`,
    review: `“Adam is a godsend. First, if you're nervous about reaching out to a Coach or you've never engaged in this sort of exchange. . `
  },
  {
    name: `Michael Jones`,
    img: `/rtcci-final/assets/person3.png`,
    review: `“Adam's coaching skills are second to none; his passion and honed excellence at this craft is made immediately obv. . .`
  },
  {
    name: `Sarah Smith`,
    img: `/rtcci-final/assets/person4.png`,
    review: `"The growth I have experienced has created momentum not only in my professional life but in all aspects of life.  Adam. . "`
  },
  {
    name: `Jared Long`,
    img: `/rtcci-final/assets/person5.png`,
    review: `“As a leader in my community and business owner for over 20 years, it has been my passion to grow as a leader, father. . ."`
  },
  {
    name: `Elliot Johnson`,
    img: `/rtcci-final/assets/person6.png`,
    review: `“My coaching experience with Adam has been nothing short of amazing. From the times I go in knowing exactly . . ."`
  }
]

export default Testimonials