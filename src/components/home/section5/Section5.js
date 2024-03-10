import React from 'react'
import './section5.scss';
import itimage from '../../../assests/image/it-image.jpg';
function Section5() {
    return (
        <div className='main-section5'>
            <div>
                <img src={'https://ziapy.com/wp-content/uploads/2023/08/Job-interview-questions-to-ask-.jpg'} alt="no image" className='it-images' />
            </div>
            <div>
                <div className='text-3xl fw-bold mt-4 mb-4'>
                    A Trusted Partner for <span className='it'>IT Job Consultancy</span> in India
                </div>
                <div>
                    Owing to our performance management skills, hiring experience, and onboarding resources, Evision is sure to become your trusted partner among any other IT recruiting companies.
                </div>
                <div className='mt-4'>
                    We have left many employees satisfied in finding their desired jobs, during and post the recruitment. This is possible solely by our experts offering the IT job placement services as they have sufficient expertise and skills to collaborate with many companies across cities and states of the India. Hence, rest assured that you will get landed on the best job. You can connect to our IT recruiting services 24*7, across global borders for any queries or assistance needed in finding the best and right job for you.
                </div>
            </div>
        </div>
    )
}

export default Section5