import React from 'react'
import './section5.scss';
import itimage from '../../../assests/image/it-image.jpg';
function Section5() {
    return (
        <div className='main-section5'>

            <div className=''>
                <div className='text-3xl fw-bold mt-4 mb-4'>
                    What <span className='it'>EVISION</span> makes different from others
                </div>
                <div>
                    Evision specializes in delivering engineers, accountants, healthcare professionals, sales executives, administrators, production, manufacturing and technical staff. As specialists in technical recruiting, we help companies find qualified professionals get a foot in the door at great jobs. Our experienced team of recruiters specializes in Engineering, Electronics and Communications, Healthcare, Pharmaceutical , Manufacturing Industries and more.
                </div>
                <div className='mt-4'>
                    Evision’s entire team with its vast knowledge in diverse industries offers the most hassle-free Staffing and recruitment process. Non-IT staffing services under Evision tend to provide solutions that are well optimized so that the execution of staff recursion or other operative functions are effectively managed.
                </div>
            </div>
            <div>
                <img src={'https://blog.stucred.com/wp-content/uploads/2019/08/placement-consultants.jpg'} alt="no image" className='it-images' />
            </div>

        </div>
    )
}

export default Section5