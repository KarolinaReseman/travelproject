import React from 'react'
import "./Home.css"
import Video from "../../Assets/video.mp4"

const Home = () => {
  return (
    <div className='Home'>
      <div className='videoBg'>
        <video src={Video} autoPlay loop muted></video>
      </div>
      
      <div className='sectionText'>
        <h1>Unlock Your Travel Dreams With Us!</h1>
        <p>
          
        </p>
      </div>

    </div>
  )
}

export default Home
