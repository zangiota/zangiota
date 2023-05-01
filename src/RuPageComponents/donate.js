import React, { Component } from 'react'
import donate from '../images/lecture.mp4'
import '../styles/video.css'

class video extends Component {
  render() {
    return (
      <div className="container">
      <div className='video_content'>
      <h1 className='video_title'>/ О нас</h1>
      <h3 className='video_cl'> Последние новости</h3>
      <p className='video_text'><span className='text_news'>Сайфуллоев  Караматулло</span>, духовный работник нашей мемориального комплекса, прочитал лекцию о посте и достоинствах поста.
      <br></br><span className='text_news'>Передано</span> со слов Абу Хурайры,что Расулуллоҳ соллаллоҳу алайҳи ва саллам сказал:
      <br></br><span className='text_news'>«Каждое</span> доброе дело человека вознаграждается еще больше. Одно доброе дело может быть вознаграждено от десяти до семисот раз. Аллах говорит: Илла, пост является исключением. Потому что пост для Меня, и Я вознаграждаю его. Постящийся отказывается от своих похотей и пищи ради Меня. Для постящегося двойная радость. Один во время разговения, а другой во время поклонения Богу. Нет сомнения, что запах изо рта постящегося лучше в глазах Аллаха, чем запах мускусного амбара.»
      </p>
      <video  className='video_mosque' controls >
      <source src={donate} type="video/mp4"/>
     </video>
      </div>
      </div>
    );
  }   
}

export default video;