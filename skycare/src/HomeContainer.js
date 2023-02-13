import React from 'react'
import loop from './sky_loop.mp4'
import './HomeContainer.css'






function Home(){
    return(
        <div className="care-container">
        <video src={loop} autoPlay loop muted></video>
        <h1>Welcome To SkyCare</h1>
        </div>
            
    )
}

export default Home; 