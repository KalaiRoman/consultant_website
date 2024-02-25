// import React from "react"
// import Heading from "../../common/heading/Heading"
// import "./Hero.scss"
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';

// const Hero = () => {
//   const sliderOptions = {
//     perPage: 2,
//     perMove: 1,
//     type: "loop",
//     rewind: true,
//     keyboard: "blobal",
//     gap: "1rem",
//     pagination: false,
//     padding: "2rem",
//     autoplay: true,
//     pauseOnHover: false,
//     drag: false,
//     slideFocus: false,
//     arrows: true,
//     dots: true,
//     autoScroll: {
//       speed: 1,
//     },
//     focus: 'center',
//     breakpoints: {
//       1200: { perPage: 3 },
//       991: { perPage: 2 },
//       789: { perPage: 2 },
//       550: { perPage: 1.3 },
//       425: { perPage: 1 }
//     }
//   }

//   const data = [
//     {
//       id: 1,
//       url: 'https://www.evisiontechnoserve.com/front/assets/img/ajit-tripathi-1.gif',
//       title: "kalai"
//     },
//     {
//       id: 2,
//       url: 'https://www.evisiontechnoserve.com/front/assets/img/ajit-tripathi-3.gif',
//       title: "kalai"

//     },
//     {
//       id: 3,
//       url: 'https://www.evisiontechnoserve.com/front/assets/img/ajit-tripathi-1.gif',
//       title: "kalai"

//     },
//     {
//       id: 4,
//       url: 'https://www.evisiontechnoserve.com/front/assets/img/ajit-tripathi-3.gif',
//       title: "kalai"

//     },
//   ]
//   return (
//     <>
//       <section className='heros'>
//         <Splide options={sliderOptions}>
//           {data?.map((item, index) => {
//             return (
//               <SplideSlide key={index}>
//                 <div>
//                   {item?.title}
//                 </div>
//                 <div>
//                   <img src={item?.url} alt="no image" className="image-box" />
//                 </div>
//               </SplideSlide>
//             )
//           })}


//         </Splide>

//       </section>
//     </>
//   )
// }

// export default Hero



import React from 'react'
import './Hero.scss';
import it from '../../../assests/image/it-recruitment-img.jpg';
function Hero() {
  return (
    <>
      <div className='main-hero-section'>
        <div className='inside-hero-section'>
          <div className='left-hero-section'>
            <div className='mb-4'><span className='text-black text-5xl fw-bold'>IT Recruiting</span> <span className='text-5xl service-text'>Services</span></div>
            <div className='finding-text'>Finding real talent amidst a pool of techy professionals might be challenging. So, make the
              best use of our IT recruiting services for all your IT recruitment needs. We are one of the
              few IT recruiting firms, in India, to offer numerous hiring services under one roof. Get
              ready to work with the best IT job placement agency in India!</div>
            <button className='mt-4 get-start'>Get Started</button>
          </div>
        </div>


      </div>
      <div className='card-position'>
        <div>
          <img src={it} alt="no image" className='it-image' />
        </div>
        <div className='ms-2'>
          <div className='fw-bold text-3xl mt-4 mb-4 '>
            Professional <span className='it'>IT Recruiting</span> Services
          </div>
          <div className='did-text'>
            Did you know that the <span className='fw-bold'>HR talent</span> market has been going down in the last 2-years? Out of the many reasons collected, recruiters mention <span className='fw-bold'>‘shortage of skills’</span> as 75% of it. Prioritizing that data, <span className='fw-bold'>our services</span> are engineered to bridge this gap between employees and their job needs. We have a set of professional <span className='fw-bold'>human resources</span>, who will match your job requirement from our <span className='fw-bold'>expertise</span> side on the following basis:
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero