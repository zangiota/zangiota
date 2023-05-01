import React, { Component } from 'react'
import donate from '../images/lecture.mp4'
import '../styles/video.css'

class video extends Component {
  render() {
    return (
      <div className="container">
      <div className='video_content'>
      <h1 className='video_title'>/ About us</h1>
      <h3 className='video_cl'> Last news</h3>
      <p className='video_text'><span className='text_news'> Sayfulloev Karamatullo</span>, a religious employee of our memorial complex, gave a lecture on fasting and the merits of fasting.
      <br></br><span className='text_news'>From</span> Abu Hurayra Roziyallohu anhu was narrated, Rasullulloh sollallohu alayhi va sallam said: 
      <br></br><span className='text_news'>“Every </span> good deed of a man will be rewarded in abundance. One good deed can be rewarded from tenfold to seven hundredfold. Allah says: Illah, fasting is an exception. Because fasting is for Me and I will repay it. The fasting person refuses lust and food for Me. The fasting person has two joys. One is when he breaks his fast, and the other is when he prays to his Lord. There is no doubt that the smell of a fasting mouth of a person is better in the eyes of God than the smell of a musky barn.»
      </p>
      <video className='video_mosque' controls >
      <source src={donate} type="video/mp4"/>
     </video>
      </div>
      </div>
    );
  }   
}

export default video;