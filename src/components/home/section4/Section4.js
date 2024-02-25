import React from 'react'
import im1 from '../../../assests/image/imge1.png'
import im2 from '../../../assests/image/image2.png'
import im3 from '../../../assests/image/image3.png'
import './section4.scss';
function Section4() {

    const data = [
        {
            id: 1,
            name: 'You will be pre-screened and referenced to job portals, businesses, and brands as per your IT skills.',
            image: im1
        },
        {
            id: 2,
            name: 'We also take in professionals for our own in-house needs, conducted through a stress-free interview.',
            image: im2

        },
        {
            id: 3,
            name: 'Our team can help you land on any department-specific jobs that can genuinely match your education, experience, and similar parameters.',
            image: im3

        }
    ]
    return (
        <div className='main-section4'>
            <div className='text-3xl fw-bold text-center mb-4 mt-5 '>
                3 Benefits of Picking <span className='it'>the Best IT Job Placement Agency</span>
            </div>
            <div className='w-[90%] text-center mx-auto leading-8'>
                Within 2026, about 5 lacs new positions will get added to the information technology industry. Finding your skills and talent within this sector as per statistics will be vital to success and better growth. However, finding a job is not an easy process. But by working with an authentic <span className='fw-bold'>IT job consultancy</span> like ours, it gives you 3 advantages
            </div>
            <div className='flex gap-4 mx-auto w-[100%] align-items-center justify-center mt-10 pt-[2%]  '>
                {data?.map((item, index) => {
                    return (
                        <div className='w-[30%] border rounded h-[190px] main-box-lists hover:shadow hover:scale-105 ease-in duration-300 cursor-pointer' key={index}>
                            <div className='box-cards'>
                                <img src={item?.image} alt="no image" className='image-box' />
                            </div>
                            <div className='box-texts pt-[15%]'>
                                {item?.name}
                            </div>
                        </div>
                    )
                })}

            </div>
            <div className='text-center mt-4 mb-5'>
                In an immense pool of human resource managers, you can expect <span className='fw-bold'>IT employment agencies</span> like EVISION to get you the best job in the industry!
            </div>
        </div>
    )
}

export default Section4