import React from 'react'
import "./Questions.css"
import Accordion from './Accordion'

const Questions = () => {
  return (
    <div className='question section container'>
      <div className="secheading">
        <h3> Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid">
        <div className="accordion grid"> 
        <Accordion/>
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
