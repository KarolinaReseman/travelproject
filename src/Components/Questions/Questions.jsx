import React , {useState} from 'react'
import "./Questions.css"
import Accordion from './Accordion'
import "./Questions.css"

const Questions = () => {
  const [active, setActive] = useState("")

  return (
    <div className='question section container'>
      <div className="secheading">
        <h3> Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid">
        <div className="accordion grid"> 
        <Accordion 
          title="How do I choose the right travel 
            destination for me?" 
          desc="onsider your interests, budget, desired ezperiences, and the type of environment you enjoy. Research destinations that align with your preferences and offer attractions or activities you find appealing." 
            active={active} 
            setActive={setActive}/>
        <Accordion 
          title="How do I choose" 
          desc="onsider your interests, budget, desired ezperiences, and the type of environment you enjoy. Research destinations that align with your preferences and offer attractions or activities you find appealing." 
            active={active} 
            setActive={setActive}/>
        </div>

        <div className="form">
        <div className="secheading">
        <h4> Do you have any specific question?</h4>
        <p>
          Please fill the form below and our dedicated team will get intouch with you as soon as possible.
        </p>
      </div>

      <div className="formContent grid">
        <input type="email" placeholder='Enter email address'/>
        <textarea placeholder='Enter your question here'></textarea>
        <button className='btn'> Submit Inquiry</button>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Questions
