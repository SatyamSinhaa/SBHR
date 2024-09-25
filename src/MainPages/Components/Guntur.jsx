import React from 'react'
import {HomeBody} from '../../Files/ImageSlider/HomeBody'
import { Images } from '../../Files/Store/ImagesStore'
import { AboutContent, GuntHomeContent, WelcomeContent } from '../../Files/Store/Content'
import HeadImageSlider from '../../Files/ImageSlider/HeadImageSlider'
import HeaderContent from '../../Components/HeaderContent'
import GuntFooter from '../../Components/Footer/GuntFooter'


const Guntur = () => {
    return (
        <div>
            <HeadImageSlider images={Images} />
            <HeaderContent head={WelcomeContent[2].head} para={WelcomeContent[2].para} />
            <HomeBody images={Images} content={GuntHomeContent[0].content} imagePosition="left" />
            <HomeBody images={Images} content={GuntHomeContent[1].content} imagePosition="right" />
            <HomeBody images={Images} content={GuntHomeContent[2].content} imagePosition="left" />

            <div className='features'>
               
                <div>
                    <center><h1>In-Room Amenities</h1></center>
                    <div>
                        <ul>
                            <li>Free WiFi</li>
                            <li>Direct Dial Phone</li>
                            <li>Bathrobes</li>
                        </ul>
                        <ul>
                            <li>Satellite TV</li>
                            <li>Coffee Machine</li>
                            <li>Slippers & Comfort Amenities</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div>
                    <center><h1>Resort Facilities</h1></center>
                    <div>
                        <ul>
                            <li>Tennis Court</li>
                            <li>Tennis Court</li>
                            <li>Board Games</li>
                        </ul>
                        <ul>
                            <li>The Ixora – Spa</li>
                            <li>Pool Table</li>
                            <li>2 Full Length Swimming Pools</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <HeaderContent head={AboutContent[1].head} para={AboutContent[1].para} /> */}
            <center><b>Thankyou for considering Samaikhyata Sadan for your event needs</b></center> <br/>
            <GuntFooter/>
        </div>
    )
}

export default Guntur;