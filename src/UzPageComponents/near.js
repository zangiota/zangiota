import React, { useState, useEffect } from "react";
import '../styles/Map.css';
//import axios from "axios";
import bank from '../images/bank.png'
import restaurant from '../images/restaurant.png'
import market from '../images/market.png'
import hospital from '../images/hospital.png'

/*const url1 = 'https://api.aladhan.com/v1/calendarByCity?country=UZB&city=zangi%20Ota&year=2023&month=01'*/

//const url = 'https://api.aladhan.com/v1/timingsByCity?country=UZB&city=Zangi%20Ota&school=1';

// export const PlacerData=[
//     {
//         id:1,
//         image:bank

//     },
//     {
//         id:2,
//         image:hospital
//     },
//     {
//         id:3,
//         image:market
//     },
//     {
//         id: 4,
//         image:restaurant
//     }
// ]

const NearPlaces = () => {

    //const [info, ] = useState([]);
    //const emptyArray = []

    // useEffect(() => {
    //     axios
    //         .get(url)
    //         .then(data => {
    //             setInfo(data.data.data.timings)
    //         })
    // }, [])
    //console.log(info)
    return (
        <>
            <section className="prayer-time" id="namoz-vaqt">

                <div className="container">
                    <h1 className="place_title">
                       / Atrofimizda nima bor
                    </h1>
                    <div className="prayer-time__row">
                        <div className="prayer-time__card">
                            <img className='place_img' src={bank} alt='images' />
                            <p className="prayer-time__title">Bank</p>
                        </div>
                        <div className="prayer-time__card">
                            <img className='place_img' src={hospital} alt='images' />
                            <p className="prayer-time__title">Hospital</p>
                        </div>
                        <div className="prayer-time__card">
                            <img className='place_img' src={market} alt='images' />
                            <p className="prayer-time__title">Market</p>
                        </div>
                        <div className="prayer-time__card">
                            <img className='place_img' src={restaurant} alt='images' />
                            <p className="prayer-time__title">Restaurant</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default NearPlaces;