import React, { useState } from 'react';
import '../styles/Header.css';
import '../styles/media.css';
import headerLogo from '../images/logo2.png'
import telLogo from '../images/logo-tel.png'
import OpenMenuImg from '../images/open.svg'
import CloseMenuImg from '../images/close.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  const [active, setActive] = useState(false)
  const [header__list, setHeaderList] = useState('header__list')
  const updateMenu = () => {
    if (!active) {
      setHeaderList('header__list active')
    }
    else {
      setHeaderList('header__list')
    }
    setActive(!active)
  }

  return (
    <>
      <header id='header'>
        <div className='container'>
          <div className='header__row'>
            <div className='header__logo-block'>
              <a className='header__logo-link' href='#header'><img className='header__img' src={headerLogo} alt="logo-zzz.png" /></a>
            </div>
            <ul className={header__list}>
              <li className='header__item'><a className='header__link' href='#header'>Biz haqimizda</a></li>
              <li className='header__item'><a className='header__link' href='#galereya'>Maruzalar</a></li>
              <li className='header__item'><a className='header__link' href='#namoz-vaqt'>Galereya</a></li>
              <li className='header__item'><a className='header__link' href='#boglanish'>Tarix</a></li>
            </ul>
            <ul className='lang__list'>
              <li className='lang__item'><Link to='/'>UZ</Link></li>
              <li className='lang__item'><Link to="/en">EN</Link></li>
              <li className='lang__item'><Link to='/ru'>RU</Link></li>
            </ul>
            <div className='header__phone-block'>
              <a className='header__phone'><img className='header__logo_tel' src={telLogo} alt="logo-tel.png"></img></a>
              <a className='header__phone' href='tel:+998993011376'>+998993011376</a>
            </div>
            <div onClick={updateMenu} className='header__mob-img-btn'>
              {active ? <img className='header__mob-img' src={CloseMenuImg} alt="close.svg" /> : <img className='header__mob-img' src={OpenMenuImg} alt="open.svg" />}
            </div>
          </div>
        </div>
      </header>

    </>
  );
}

export default Header;
