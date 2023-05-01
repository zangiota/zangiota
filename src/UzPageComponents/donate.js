import React, { Component } from 'react'
import donate from '../images/lecture.mp4'
import '../styles/video.css'

class video extends Component {
  render() {
    return (
      <div className="container">
      <div className='video_content'>
      <h1 className='video_title'>/ Biz haqimizda</h1>
      <h3 className='video_cl'>Eng so'nggi yangiliklar</h3>
      <p className='video_text'> <span className='text_news'>Зиёратгохимиз</span> диний ходими Сайфуллоев Караматулло рўза тутиш хакида ва рўзанинг савоблари хақида маърузаси
      <br></br><span className='text_news'>🔸 Абу</span> Ҳурайра розияллоҳу анҳудан ривоят қилинди, Расулуллоҳ соллаллоҳу алайҳи ва саллам айтдилар: 
      <br></br><span className='text_news'>“Одам </span>боласининг ҳар бир яхши амалига ортиғи билан мукофот берилади. Бир яхшиликка ўн баробардан то етти юз баробаргача савоб берилиши мумкин. Аллоҳ айтадики: илло, рўза бундан мустаснодир. Чунки рўза Мен учун ва унга Ўзим ажр бераман. Рўзадор Мени деб шаҳвати ва таомидан воз кечади. Рўзадорга икки марта шодлик бор. Бири ифторлик чоғида, иккинчиси Роббисига йўлиққан чоғда. Шубҳасизки, рўзадорнинг оғзидан чиққан ҳид Аллоҳнинг наздида мушки анбарнинг хушбўйидан ҳам яхшироқдир".</p>
      <video  className='video_mosque' controls >
      <source src={donate} type="video/mp4"/>
     </video>
      </div>
      </div>
    );
  }   
}

export default video;