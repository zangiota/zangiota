import React from "react";
/*------------ STYLE --------------*/
import '../styles/Footer.css';
import '../styles/media.css'
/*--------------- STYLE END --------------*/

import instagramImage from '../images/instagram.png';
import emailImg from '../images/email.png';
import facebookImg from '../images/facebook.png';
import telegramImage from '../images/telegram.png'

const Footer = () => {
    return (
        <>
            <footer id="boglanish">
                <div className="footer__background">
                    <div className="container">
                        <div className="footer__row">
                            <div className="footer__card">
                                <ul className="footer__list">
                                    <li className="footer__item"><a className="footer__link" href="">"ZANGI OTA ZIYORATGOHI" MEMORIAL COMPLEX</a></li>
                                    
                                </ul>
                            </div>
                            <div className="footer__card">
                                <ul className="footer__contact-list">
                                    <li className="footer__contact-item"><h4 className="footer__contact-title">Tashkent region, Zangiota district, A.Timur Street house-24.
                                        Index 111809, Fax: (0370) 975-81-69
                                    </h4></li>
                                    <li className="footer__contact-item"><a className="footer__contact-link" href="tel:+998993011376">+998993011376</a></li>
                                </ul>
                            </div>
                            <div className="footer__card">
                                <ul className="footer__social-list">
                                    <li className="footer__social-item">
                                        <a href="https://instagram.com/zangiota.uz?igshid=ZDdkNTZiNTM=">
                                            <img  src={instagramImage} alt="instagram.png" />
                                        </a>
                                    </li>
                                    <li className="footer__social-item">
                                        <a href="mailto:zangiota.ziyoratgoh@mail.ru">
                                            <img src={emailImg} alt="email.png" />
                                        </a>
                                    </li>
                                    <li className="footer__social-item">
                                        <a href="https://www.facebook.com/profile.php?id=100090447690268&mibextid=ZbWKwL">
                                            <img src={facebookImg} alt="facebook.png" />
                                        </a>
                                    </li>
                                    <li className="footer__social-item">
                                        <a href="https://t.me/+colkik1Y56w2Y2Y6"> <img src={telegramImage} alt="telegram.png" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
}

export default Footer;