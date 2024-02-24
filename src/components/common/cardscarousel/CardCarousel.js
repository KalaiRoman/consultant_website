import React from 'react'
import Slider from "react-slick";
import './Carouselcard.scss';
function CardCarousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 5,
        arrows: false,
    };
    return (
        <div className='main-carousels'>
            <div>
                <div className='text-5xl text-red-600 text-center mt-10 mb-40'>
                    Welcme to kalai carousels
                </div>
            </div>
            <div className='mr-4 ml-5
            '>
                <Slider {...settings}>
                    {Array(10).fill("kalai")?.map((item, index) => {
                        return (
                            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  cards" key={index}>
                                {index + 1}
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default CardCarousel