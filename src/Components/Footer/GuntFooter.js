import React from 'react'
import './Footer.css'
import { BsHouse } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const GuntFooter = () => {
    return (
        <div className='foot'>
            <div>
                <h3>ABOUT US</h3>
                <p>Samadhana Sadan is a year-round conference and retreat center located at Ponallu
                    Village near Shameerpate at a beautiful green non pollution environment.</p>
            </div>
            <div className='section-div'>
                <h3>CONTACT US</h3>

                <section>
                    <BsHouse />
                    <div>
                        <h4>Address</h4>
                        <p>Ponallu Village, Shameerpet, Medchal-Malkajgiri district, Hyderabad 500078</p>
                    </div>
                </section>

                <section>
                    <BsTelephone />
                    <div>
                        <a href='tel:+91 9347905709'><h4>+91 9347905709</h4></a>
                        <p>Call Now</p>
                    </div>
                </section>

                <section>
                    <MdOutlineEmail />
                    <div>
                        <a href='mailto:info@samadhanasadan.com'><h4>info@samadhanasadan.com</h4></a>
                        <a href='mailto:reservation@samadhanasadan.com'><h4>reservation@samadhanasadan.com</h4></a>
                        <p>Send us your query anytime!</p>
                    </div>
                </section>

            </div>
            <div>
                <h3>LOCATION</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15213.162417618107!2d78.574498!3d17.58893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8389fc6a1aef%3A0x460a6fe05cd895d2!2sShamirpet%2C%20Secunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1721286955597!5m2!1sen!2sin" />
            </div>
        </div>
    )
}


export default GuntFooter