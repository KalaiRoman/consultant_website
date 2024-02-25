import React from 'react'
import './Section9.scss';
import girl from '../../../assests/image/girlimage.png'
function Section9() {
    return (
        <div className='main-section9'>
            <div className='inside-section9'>
                <div className='mt-5 text-3xl fw-bold text-center'>
                    Why Do Clients Call Us <span className='it'>Unique?</span>

                </div>
                <div className='fw-bold text-center mt-3 text-[20px]'>
                    Our expertise lies in attention to detail
                </div>
            </div>
            <div className='girl-section'>
                <div className='left-girl'>

                </div>
                <div className='middle-girl'>
                    <img src={girl} alt="no image" />
                </div>
                <div className='right-girl'>

                </div>
            </div>
        </div>
    )
}

export default Section9