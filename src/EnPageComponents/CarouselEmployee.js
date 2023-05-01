import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/AboutEmployee.css'

import employeeImage from '../images/userImage.png'

const employeeData = [
    {
        id: "1",
        title: "Lorem ipsum1",
        subtitle: "lorem ipsum sit amet",
        imgEmployee: employeeImage
    },
    {
        id: "2",
        title: "Lorem ipsum2",
        subtitle: "lorem ipsum sit amet",
        imgEmployee: employeeImage
    },
    {
        id: "3",
        title: "Lorem ipsum3",
        subtitle: "lorem ipsum sit amet",
        imgEmployee: employeeImage
    },
    {
        id: "4",
        title: "Lorem ipsum4",
        subtitle: "lorem ipsum sit amet",
        imgEmployee: employeeImage
    },
    {
        id: "5",
        title: "Lorem ipsum5",
        subtitle: "lorem ipsum sit amet",
        imgEmployee: employeeImage
    },
    {
        id: "6",
        title: "Lorem ipsum6",
        subtitle: "lorem ipsum sit amet",
        imgEmployee: employeeImage
    },
    {
        id: "7",
        title: "Lorem ipsum7",
        subtitle: "lorem ipsum sit amet",
        imgEmployee: employeeImage
    },
    {
        id: "8",
        title: "Lorem ipsum8",
        subtitle: "lorem ipsum sit amet",
        imgEmployee: employeeImage
    }
]

const CarouselEmployee = () => {
    return (
        <>
            <section className='about-employee' id="maruza">
                <div className='container'>
                    <div className='about-employee__row'>
                        <h1 className='about-employee__title'>lectures</h1>
                        <Carousel animationHandler={'slide'} >
                            {
                                employeeData.map((element, i) => {
                                    return (

                                        <div className='carousel-employee__card' key={i}>
                                            <div className='carousel-employee__img'>
                                                <img src={element.imgEmployee} alt='userImage.png' />
                                            </div>
                                            <h3 className='carousel-employee__card-title'>{element.title}</h3>
                                            <p className='carousel-employee__card-subttile'>{element.subtitle}</p>
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

export default CarouselEmployee;