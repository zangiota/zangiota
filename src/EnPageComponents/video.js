import React, { Component } from 'react'
import video from '../images/mosque.mp4'
import '../styles/video.css'

class Appvideo extends Component {
  render() {
    return (
      <div className="container">
      <div className='video_content'>
      <h1 className='video_title'>/ Video reels</h1>
      <p className='video_text'>If you go to Tashkent, then, of course, the nearest of the attractions of the Tashkent region, only 20 km from the center of the capital. visit the Zangi ota complex, a historical architectural monument located in the distance.<br></br>Peace and tranquility always reign in this place. Life can easily deviate from its worries and problems and plunge into the sea of spiritual well-being.</p>
      <video  className='video_mosque' controls >
      <source src={video} type="video/mp4"/>
     </video>
      </div>
      </div>
    );
  }   
}

export default Appvideo;