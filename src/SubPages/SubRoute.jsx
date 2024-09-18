import React from 'react';
import ImageSlider from '../Files/ImageSlider/ImageSlider';
import { dineDetails, imageSlides, stayDetails, weddingDetails, eventDetails } from '../Files/Store/Store';
import './SubRoute.css'

function SubRoute({ route, heading }) {
    const details = stayDetails[route];
    const dining = dineDetails[route];
    const events = eventDetails[route];

    return (
        <div>
            {/* <h2>{heading}</h2>
            <p>
                Content for {route} - {heading}.
            </p> */}
            {heading === 'STAY' && details && (
                <div className='section'>
                    {/* {imageSlides[route] && <ImageSlider images={imageSlides[route]} />} */}
                    <div>{details.description}</div>
                    <h3>Popular Stays:</h3>
                    <ul>
                        {details.popularStays.map(stay => (
                            <li key={stay}>{stay}</li>
                        ))}
                    </ul>

                    <h3>Tips:</h3>
                    <p>{details.tips}</p>
                </div>
            )}

            {heading === 'DINE' && dining && (
                <div className='section'>
                    <div>{dining.description}</div>
                    <h3>Popular Stays:</h3>
                    <ul>
                        {dining.popularRestaurants.map(stay => (
                            <li key={stay}>{stay}</li>
                        ))}
                    </ul>
                    <h3>Tips:</h3>
                    <p>{dining.tips}</p>
                    {imageSlides[route] && <ImageSlider images={imageSlides[route]} />}
                </div>
            )}

            {heading === 'EVENTS' && events && (
                <div className='section'>
                    <div>{events.description}</div>
                    <h3>Popular Stays:</h3>
                    <ul>
                        {events.popularRestaurants.map(stay => (
                            <li key={stay}>{stay}</li>
                        ))}
                    </ul>
                    <h3>Tips:</h3>
                    <p>{events.tips}</p>
                    {imageSlides[route] && <ImageSlider images={imageSlides[route]} />}
                </div>
            )}

            {/* {heading === 'Weddings' && wedding && (
                <div className='section'>
                    <div>{wedding.description}</div>
                    <h3>Popular Stays:</h3>
                    <ul>
                        {wedding.popularHalls.map(stay => (
                            <li key={stay}>{stay}</li>
                        ))}
                    </ul>
                    <h3>Tips:</h3>
                    <p>{wedding.tips}</p>
                    {imageSlides[route] && <ImageSlider images={imageSlides[route]} />}
                </div>
            )} */}
            <p>Here’s some more random content to test the layout and routing for {heading} in {route}.</p>
            <ul>
                <li>Item 1 related to {heading} in {route}</li>
                <li>Item 2 related to {heading} in {route}</li>
                <li>Item 3 related to {heading} in {route}</li>
            </ul>
        </div>
    );
}

export default SubRoute;