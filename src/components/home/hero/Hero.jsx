import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.scss"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Hero = () => {
  const sliderOptions = {
    perPage: 2,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "blobal",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    autoplay: true,
    pauseOnHover: false,
    drag: false,
    slideFocus: false,
    arrows: true,
    dots: true,
    autoScroll: {
      speed: 1,
    },
    focus: 'center',
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2 },
      789: { perPage: 2 },
      550: { perPage: 1.3 },
      425: { perPage: 1 }
    }
  }

  const data = [
    {
      id: 1,
      url: 'https://www.evisiontechnoserve.com/front/assets/img/ajit-tripathi-1.gif',
      title: "kalai"
    },
    {
      id: 2,
      url: 'https://www.evisiontechnoserve.com/front/assets/img/ajit-tripathi-3.gif',
      title: "kalai"

    },
    {
      id: 3,
      url: 'https://www.evisiontechnoserve.com/front/assets/img/ajit-tripathi-1.gif',
      title: "kalai"

    },
    {
      id: 4,
      url: 'https://www.evisiontechnoserve.com/front/assets/img/ajit-tripathi-3.gif',
      title: "kalai"

    },
  ]
  return (
    <>
      <section className='heros'>
        <Splide options={sliderOptions}>
          {data?.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <div>
                  {item?.title}
                </div>
                <div>
                  <img src={item?.url} alt="no image" className="image-box" />
                </div>
              </SplideSlide>
            )
          })}


        </Splide>

      </section>
    </>
  )
}

export default Hero
