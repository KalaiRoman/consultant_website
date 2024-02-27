import React from 'react'
import './Section9.scss';
import girl from '../../../assests/image/girlimage.png'
function Section9() {
    const data = [
        {
            id: 1,
            name: "Improvised consulting practices to enable growth "
        },
        {
            id: 2,
            name: 'Impeccable design, development & maintenance team '
        },
        {
            id: 3,
            name: 'Incorporation of newer and advanced tools of the trade '
        },
        {
            id: 4,
            name: 'Continued transition into unexplored industry verticals  '
        }
    ]
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

                    {data?.map((item, index) => {
                        return (
                            <div className="map-section mb-4 ">
                                <div className='box11-inside'>
                                    <div className='box1-inside'>
                                        <div className='box2-inside'>
                                            <i class="fas fa-check-circle" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className='box2-inside'>
                                    <div className='text-2xl fw-bold'>{item?.name}</div>
                                </div>

                            </div>
                        )
                    })}
                </div>

                <div className='right-girl'>
                    <img src={girl} alt="no image" />

                </div>
            </div>
        </div>
    )
}

export default Section9