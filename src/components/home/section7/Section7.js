import React from 'react'
import './Section7.scss';
import imge1 from '../../../assests/image/person-image.png';
function Section7() {

    const data = [
        {
            id: 1,
            name: "Since your job is decided based on your set of skills and work intelligence, our IT recruiting approach guarantees high job satisfaction and likeability. ",
        },
        {
            id: 2,
            name: "Compared to other IT employment agencies, ours is a long-term approach to development and technology, therefore we direct our focus on your future. ",
        },
        {
            id: 3,
            name: "Being one of the best IT placement companies, our hiring business and technology strategies are transparent, thus ranking us high in the list of IT recruitment companies. ",
        }
    ]
    return (
        <div className='main-section7'>
            <div className='inside-main-section'>
                <div className='left-section7'>
                    <img src={imge1} alt="no image" className='person-image' />
                </div>
                <div className='right-section7'>
                    <div className='fw-bold text-3xl'>
                        Why trust Evision Over Other <span className='it'>IT Job Recruitment</span> Agencies?
                    </div>
                    <div className='mt-4 leading-8'>
                        By searching for popular IT placement agencies, you will get plenty of results; yet, only experienced ones can give proven results. Enabling information technology with recruitment skills for 15 years on-field, we at Evision present before you three solid reasons to go with our IT job consultancy over others:
                    </div>
                    <div>
                        {data?.map((item, index) => {
                            return (
                                <div key={index} className='border rounded mb-4 mt-4 h-[100px] d-flex gap-4 px-[30px] py-[10px] cursor-pointer align-items-center justify-center' style={{
                                    background: '#fcfcfc'
                                }}>
                                    <div className='main-no'>
                                        <div className='inside-no'>
                                            0{index + 1}.
                                        </div>
                                    </div>
                                    <div className='fw-medium leading-8'>
                                        {item?.name}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Section7