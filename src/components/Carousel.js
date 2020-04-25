import React, { Component } from 'react';
import phone from './../img/phonec8.png';
import phonec from './../img/phonec28.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class KCarousel extends Component {
    render() {
        return (
            <Carousel showThumbs={false} showArrows={false} 
                        showStatus={false} autoplay
                        infiniteLoop centerMode
                        centerSlidePercentage={80}>
                <div>
                    <img src={phone} alt="phone1"/>
                </div>
                <div>
                    <img src={phonec} alt="phone2"/>
                </div>
            </Carousel>
        );
    }
};

export default KCarousel;

