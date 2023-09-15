import React from 'react'
import {BsArrowDownCircle} from "react-icons/bs"

const Accordion = () => {
    return (
    <div className='accordionContainer'>
        <span className='title flex'>
            How do I choose the right travel 
            destination for me?
            <span>
            <BsArrowDownCircle className='icon'/>
            </span>
        </span>
        <p>
            Consider your interests, budget, desired ezperiences, and the type of environment you enjoy. Research destinations that align with your preferences and offer attractions or activities you find appealing.
        </p>
    </div>
  )
}

export default Accordion
