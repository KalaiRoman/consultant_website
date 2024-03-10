
import React from 'react'
import './Heros.scss';
function Hero1() {
  return (
    <>
      <div className='main-hero-section1'>
        <div className='inside-hero-section'>
          <div className='left-hero-section'>
            <div className='mb-4'><span className='text-white text-5xl fw-bold'>Non-IT Recruiting</span> <span className='text-5xl fw-bold pl-3 text-orange-500'>Services</span></div>
            <div className='finding-text text-white  fw-medium'>
              India's best recruitment consultant influencing the hiring trends in top MNCs from decades.
              Join the best to Work with the best.
            </div>
            <button className='mt-4 get-start'>Learn More...</button>
          </div>
        </div>


      </div>
      <div className='card-position1'>
        <div>
          <img src={'https://img.freepik.com/premium-photo/surprised-ginger-female-employee-has-job-develops-new-business-srategy-poses-front-opened-laptop-computer-poses-workspace-against-office-interior-woman-software-developer-work_95891-12400.jpg'} alt="no image" className='it-image' />
        </div>
        <div className='ms-2'>
          <div className='fw-bold text-3xl mt-4 mb-4 '>
            Professional <span className='it'>Non-IT Recruiting</span> Services
          </div>
          <div className='did-text'>
            It requires a lot of understanding of various domains and expertise in hiring when it comes to hire for Non-IT domain. We are catering to a wide range of Non-IT Industries. We have domain specialist recruiters who work on your recruitments. Please see the side bar for our domain specific skills Inventory.
          </div>

          <div className='mt-3 fw-bold'>
            We understand the need for urgency in every business. As a specialized staffing agency, we can help you attract and retain highly qualified engineers, accountants, healthcare professionals, sales executive and technical staff.
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero1