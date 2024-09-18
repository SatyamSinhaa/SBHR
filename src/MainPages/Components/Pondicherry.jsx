import React from 'react'
import HeadImageSlider from '../../Files/ImageSlider/HeadImageSlider'
import { HomeBody } from '../../Files/ImageSlider/HomeBody'
import { PondHomeContent } from '../../Files/Store/Content'
import { Images } from '../../Files/Store/ImagesStore'
import PondFooter from '../../Components/Footer/PondFooter'

const Pondicherry = () => {
    return (
        <div>
            <HeadImageSlider images={Images} />
            <HomeBody images={Images} content={PondHomeContent[0].content} imagePosition="left" />
            <HomeBody images={Images} content={PondHomeContent[1].content} imagePosition="right" />
            <HomeBody images={Images} content={PondHomeContent[2].content} imagePosition="left" />

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
            <PondFooter/>
        </div>
    )
}

export default Pondicherry