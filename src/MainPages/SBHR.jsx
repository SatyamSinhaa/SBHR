import React from 'react'
import './MainRoute.css'
import Booking from '../Files/Booking/Booking';
import { HydDineImg, HydEventImg, HydStayImg} from '../Files/Store/ImagesStore';
import {HomeBody} from '../Files/ImageSlider/HomeBody';
import { HomeContent } from '../Files/Store/Content';


const SBHR = () => {
    return (
        <div>
            <div className="HomeSlider">
            </div>
            <div className="bookingSection">
                <Booking />
            </div>
            <HomeBody images={HydStayImg[0].Images} content={HomeContent[0].content} imagePosition="left" />
            <HomeBody images={HydDineImg[0].Images} content={HomeContent[1].content} imagePosition="right" />
            <HomeBody images={HydEventImg[0].Images} content={HomeContent[2].content} imagePosition="left" />
        </div>
    )
}

export default SBHR;