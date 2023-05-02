import React, { Component } from 'react'
import video from '../images/mosque.mp4'
import '../styles/video.css'

class Appvideo extends Component {
  render() {
    return (
      <div className="container">
      <div className='video_content'>
      <h1 className='video_title'>/ Video lavha</h1>
      <p className='video_text'>Agar Toshkentga borib qolsangiz, albatta Toshkent viloyatining diqqatga sazovor joylarining eng yaqini, poytaxt markazidan atigi 20 km. uzoqlikda joylashgan tarixiy meʼmoriy yodgorlik – Zangi ota majmuasini ziyorat qiling.<br></br>Bu joyda doimo tinchlik va osoyishtalik hukm suradi. Hayot tashvish va muammolaridan osongina chetlashish va ruhiy farog‘at dengiziga sho‘ng‘ish mumkin.</p>
      <video  className='video_mosque1' controls >
      <source src={video} type="video/mp4"/>
     </video>
      </div>
      </div>
    );
  }   
}

export default Appvideo;