import { useState} from 'react';
import './FAQ.css';

function FAQ () {
  const [selected, setSelected] = useState(null)

  const toggle = i => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  }

  return (
    <>
      <section id='FAQ-container'>
        <div id='FAQ-heading'>
          <h1>FAQ</h1>
          <p>Anything you'd like to know!</p>
        </div>
        <div id='FAQ-accordian-container'>
          {data.map((item, i) => (
            <div className='faq-item' onClick={() => toggle(i)}>
              <div className='faq-title' onClick={() => toggle(i)}>
                <h5>{item.question}</h5>
                <span className='faq-span'>{selected === i ? '-' : '+'}</span>
              </div>
              <div className={selected === i ? 'faq-content show' : 'faq-content'} onClick={() => toggle(i)}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

const data = [
  {
    question: "How can business consulting help my company grow?",
    answer: "Business consulting identifies challenges, uncovers opportunities, and provides actionable strategies tailored to your business goals, helping improve performance and achieve growth."
  },
  {
    question: "What is the difference between business consulting and personal development coaching?",
    answer: "Business consulting focuses on organizational strategies and operational efficiency, while personal development coaching centers on enhancing individual skills, mindset, and personal goals."
  },
  {
    question: "How long does it take to see results from coaching or consulting?",
    answer: "The timeline varies based on your goals and challenges. While some changes may be immediate, long-term growth often requires consistent effort over weeks or months."
  },
  {
    question: "What qualifications or experience should I look for in a business consultant or coach?",
    answer: "Look for expertise in your industry, proven results with other clients, strong communication skills, and a coaching style that aligns with your values and goals."
  },
  {
    question: "How do I know if consulting or coaching is right for me or my business?",
    answer: "If you’re feeling stuck, seeking growth, or facing challenges you can’t overcome alone, consulting or coaching can provide fresh perspectives and effective solutions."
  }
];

export default FAQ