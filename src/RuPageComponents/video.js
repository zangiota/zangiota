import React, { Component } from 'react'
import video from '../images/mosque.mp4'
import '../styles/video.css'

class Appvideo extends Component {
  render() {
    return (
      <div className="container">
      <div className='video_content'>
      <h1 className='video_title'>/ Видео ролик</h1>
      <p className='video_text'>Если ехать в Ташкент, то, конечно, ближайшая из достопримечательностей Ташкентской области, всего в 20 км от центра столицы. Обязательно посетите мемориальный комплекс Занги оmа, исторический архитектурный памятник, расположенный в нескольких минутах ходьбы.<br></br>
В этом месте всегда царит тишина и покой. Можно легко отвлечься от жизненных забот и проблем и погрузиться в море духовного просветления.</p>
      <video  className='video_mosque' controls >
      <source src={video} type="video/mp4"/>
     </video>
      </div>
      </div>
    );
  }   
}

export default Appvideo;