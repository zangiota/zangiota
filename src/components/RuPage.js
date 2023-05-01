import React from "react";
import Header from "../RuPageComponents/Header";
import Main from "../RuPageComponents/Main";
import AboutMosque from "../RuPageComponents/AboutMosque";
//import Carouselgallery from "../RuPageComponents/gallery";
//import CarouselEmployee from "../RuPageComponents/CarouselEmployee";
import MosquSlider from '../RuPageComponents/slide';
import PrayerTime from '../RuPageComponents/PrayerTime';
import Footer from '../RuPageComponents/Footer';
import Appvideo from '../RuPageComponents/video';
import Mainvideo from '../RuPageComponents/donate';
import SimpleMap from "../RuPageComponents/gallery";
import NearPlaces from "../RuPageComponents/near";



const RuPage = () => {
    return (
        <>
            <Header />
            <Main />
            <Mainvideo />
            <NearPlaces />
            <SimpleMap />
            <Appvideo />
            <AboutMosque />
            <MosquSlider />
            <PrayerTime />
            <Footer />
        </>
    )
}

export default RuPage;