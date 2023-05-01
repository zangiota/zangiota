import React, { useState, useEffect } from "react";
import '../styles/PrayerTime.css';
import axios from "axios";

/*const url1 = 'https://api.aladhan.com/v1/calendarByCity?country=UZB&city=zangi%20Ota&year=2023&month=01'*/

const url = 'https://api.aladhan.com/v1/timingsByCity?country=UZB&city=Zangi%20Ota&school=1';

const PrayerTime = () => {

    const [info, setInfo] = useState([]);
    const emptyArray = []

    useEffect(() => {
        axios
            .get(url)
            .then(data => {
                setInfo(data.data.data.timings)
            })
    }, [])
    console.log(info)
    return (
        <>
            <section className="prayer-time" id="namoz-vaqt">

                <div className="container">
                    <h1 className="prayer-time__main-title">
                        Namoz Vaqtlari
                    </h1>
                    {
                        emptyArray.concat(info).map((data, i) => {
                            return (
                                <div className="prayer-time__row" key={i}>
                                    <div className="prayer-time__card">
                                        <h2 className="prayer-time__time">{data.Fajr}</h2>
                                        <p className="prayer-time__title">Bomdod</p>
                                    </div>
                                    <div className="prayer-time__card">
                                        <h2 className="prayer-time__time">{data.Sunrise}</h2>
                                        <p className="prayer-time__title">Quyosh chiqishi</p>
                                    </div>
                                    <div className="prayer-time__card">
                                        <h2 className="prayer-time__time">{data.Dhuhr}</h2>
                                        <p className="prayer-time__title">Peshin</p>
                                    </div>
                                    <div className="prayer-time__card">
                                        <h2 className="prayer-time__time">{data.Asr}</h2>
                                        <p className="prayer-time__title">Asr</p>
                                    </div>
                                    <div className="prayer-time__card">
                                        <h2 className="prayer-time__time">{data.Maghrib}</h2>
                                        <p className="prayer-time__title">Shom</p>
                                    </div>
                                    <div className="prayer-time__card">
                                        <h2 className="prayer-time__time">{data.Isha}</h2>
                                        <p className="prayer-time__title">Xufton</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        </>
    );
}

export default PrayerTime;