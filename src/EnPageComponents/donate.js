import React, { Component } from 'react'
import donate from '../images/maruza1.mp4'
import donate1 from '../images/maruza2.mp4'
import '../styles/video.css'

class video extends Component {
  render() {
    return (
      <div className="container">
      <div className='video_content'>
      <h1 className='video_title'>/ About us</h1>
      <h3 className='video_cl'> Last news</h3>
      <p className='video_text'><span className='text_news'>Religious</span>Religious teaching Shosatova Shakira, religious worker of our memorial complex, about donation and dears:</p>
      <video className='video_mosque' controls >
      <source src={donate} type="video/mp4"/>
     </video>
     <video className='video_mosque' controls >
            <source src={donate1} type="video/mp4" />
          </video>
      </div>
      </div>
    );
  }   
}

export default video;