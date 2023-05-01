import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/gallery.css'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpg'
import img8 from '../images/8.jpg'
import img9 from '../images/9.jpg'
import img10 from '../images/10.jpg'
import img11 from '../images/11.jpg'
import img12 from '../images/12.jpg'
import img13 from '../images/13.jpg'
import img14 from '../images/14.jpg'
import img15 from '../images/15.jpg'
import img16 from '../images/16.jpg'
import img17 from '../images/17.jpg'
import img18 from '../images/18.jpg'
import img19 from '../images/19.jpg'
import img20 from '../images/20.jpg'


export const sliderData=[
    {
        id:1,
        title: "Zangi ota ziyoratgohi",
        image:img1
        
    },
    {
        id:2,
        title: "Zangi ota ziyoratgohi",
        image:img2
    },
    {
        id:3,
        title: "Zangi ota ziyoratgohi",
        image:img3
    },
    {
        id:"4",
        title: "Zangi ota ziyoratgohi",
        image:img4
    },
    {
        id:5,
        title: "Zangi ota ziyoratgohi",
        image:img5
    },
    {
        id:6,
        title: "Zangi ota ziyoratgohi",
        image:img6
    },
    {
        id:7,
        title: "Zangi ota ziyoratgohi",
        image:img7
    },
    {
        id:8,
        title: "Zangi ota ziyoratgohi",
        image:img8
    },
    {
        id:9,
        title: "Zangi ota ziyoratgohi",
        image:img9
    },
    {
        id:10,
        title: "Zangi ota ziyoratgohi",
        image:img10
    },
    {
        id:11,
        title: "Zangi ota ziyoratgohi",
        image:img11
    },
    {
        id:12,
        title: "Zangi ota ziyoratgohi",
        image:img12
    },
    {
        id:13,
        title: "Zangi ota ziyoratgohi",
        image:img13
    },
    {
        id:14,
        title: "Zangi ota ziyoratgohi",
        image:img14
    },
    {
        id:15,
        title: "Zangi ota ziyoratgohi",
        image:img15
    },
    {
        id:16,
        title: "Zangi ota ziyoratgohi",
        image:img16
    },
    {
        id:17,
        title: "Zangi ota ziyoratgohi",
        image:img17
    },
    {
        id:18,
        title: "Zangi ota ziyoratgohi",
        image:img18
    },
    {
        id:19,
        title: "Zangi ota ziyoratgohi",
        image:img19
    },
    {
        id:20,
        title: "Zangi ota ziyoratgohi",
        image:img20
    }
]

const MosquSlider = () => {
    return (
        <>
          <section className='about-gallery' id="gallery">
                <div className='container'>
                    <div className='about-slide__row'>
                        <h1 className='about-gallery__title'>/ Our photos</h1>
                        
                        <Carousel AnimationHandler={'slide'}  >
                            {
                                sliderData.map((element, i) => {
                                    return (

                                        <div className='carousel-image__card' key={i} >
                                             
                                             <div className='carousel-card-zangiota' >
                                                <img className='carousel-img-zangiota' src={element.image} alt='images' />                                       
                                            </div>
                                           
                                        </div>
                                    )

                                })
                            }
                        </Carousel>
                    </div>
                </div>
            </section>  
        </>
    )
}


export default MosquSlider;