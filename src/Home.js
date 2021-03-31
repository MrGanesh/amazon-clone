import React from 'react'
import './Home.css'
import Product from './Product'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="home">
            <div className="home_container">

                <img className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />


                <div className="home_row">
                    <Product id={1} title='The lean startup' price={29.99}
                        image='https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg' rating={5}
                    />
                    <Product id={2} title='Sennheiser RS 175 RF Wireless Headphone System' price={200}
                        image='https://m.media-amazon.com/images/I/81hNXs36eXL._AC_UL320_.jpg' rating={4}
                    />



                </div>
                <div className="home_row">
                    <Product id={3} title='Tablet 10 inch Android 9.0 Pie (Google Certified), 3G Unlocked Phablet with Dual SIM Card Slots and Cameras, 2+32GB Storage, 6000mAh Battery, IPS Full HD Display, Tablet PC with WiFi, Bluetooth, GPS' price={102}
                        image='https://m.media-amazon.com/images/I/619MRFy2BsL._AC_UY218_.jpg' rating={3}
                    />
                    <Product id={4} title='All-new Echo Dot (4th Gen) | Smart speaker with Alexa | Glacier White' price={200}
                        image='https://m.media-amazon.com/images/I/61R+1DLe-uL._AC_UY218_.jpg' rating={5}
                    />
                    <Product id={5} title='Willful Smart Watch for Android Phones and iOS Phones Compatible iPhone Samsung, IP68 Swimming Waterproof Smartwatch Fitness Tracker Fitness Watch Heart Rate Monitor Smart' price={36}
                        image='https://m.media-amazon.com/images/I/61Cc0WJPkZL._AC_UY218_.jpg' rating={4}
                    />

                </div>
                <div className="home_row">
                    <Product id={6} title='TCL 65-inch 5-Series 4K UHD Dolby Vision HDR QLED Roku Smart TV - 65S535, 2021 Model' price={150}
                        image='https://m.media-amazon.com/images/I/91tMNAWWsPL._AC_UY218_.jpg' rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
