import React from 'react'
import { HomeBody } from '../../Files/ImageSlider/HomeBody'
import { Images } from '../../Files/Store/ImagesStore'
import { AboutContent, HydHomeContent, WelcomeContent } from '../../Files/Store/Content'
import HeadImageSlider from '../../Files/ImageSlider/HeadImageSlider'
import HeaderContent from '../../Components/HeaderContent'
import HydFooter from '../../Components/Footer/HydFooter'

const Hyderabad = () => {
    return (
        <div>
            <HeadImageSlider images={Images} />
            <HeaderContent head={WelcomeContent[1].head} para={WelcomeContent[1].para} />
            <HomeBody images={Images} content={HydHomeContent[0].content} imagePosition="left" />
            <HomeBody images={Images} content={HydHomeContent[1].content} imagePosition="right" />
            <HomeBody images={Images} content={HydHomeContent[2].content} imagePosition="left" />

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
            {/* <HeaderContent head={AboutContent[0].head} para={AboutContent[0].para} /> */}
            <center><b>Thank you for considering Samadhana Sadan for your event needs .</b></center> <br/>
            <HydFooter />
    
        </div>
    )
}

export default Hyderabad
