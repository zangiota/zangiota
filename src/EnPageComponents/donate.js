import React, { Component } from 'react'
import donate from '../images/maruza.mp4'
import '../styles/video.css'

class video extends Component {
  render() {
    return (
      <div className="container">
      <div className='video_content'>
      <h1 className='video_title'>/ About us</h1>
      <h3 className='video_cl'> Last news</h3>
      <p className='video_text'><span className='text_news'> The speech </span>of the employee of our memorial complex Sunatillaev Abror about Zangi-ota and the history of its construction:</p>
      <video className='video_mosque' controls >
      <source src={donate} type="video/mp4"/>
     </video>
      </div>
      </div>
    );
  }   
}

export default video;