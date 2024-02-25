import React from 'react'
import './Section8.scss';
function Section8() {
    const data = [
        {
            id: 1,
            name: "IT Recruitment",
            des: 'Build applications that meet unique needs of businesses, industries and end-users.',
            image: <i class="fas fa-user-plus" aria-hidden="true"></i>,
            bordercolor: '#00b6d4'

        },
        {
            id: 2,
            name: "IT Consulting",
            des: 'Provide highly effective learning experiences for your workforce in new age technologies.',
            image: <i class="fas fa-graduation-cap" aria-hidden="true"></i>,
            bordercolor: '#eb9416'


        },
        {
            id: 3,
            name: "Project Management",
            des: 'On-time, on-budget project management solutions through industry’s best staffing modles.',
            image: <i class="fas fa-edit" aria-hidden="true"></i>,
            bordercolor: '#007cc9'


        },
        {
            id: 4,
            name: "Corporate Training",
            des: 'Provide highly effective learning experiences for your workforce in new age technologies.',
            image: <i class="fas fa-briefcase" aria-hidden="true"></i>,
            bordercolor: '#00b6d4'


        },
        {
            id: 5,
            name: "Staff Augmentation",
            des: 'Bridge the IT talent demand-supply gap to meet organizational and business objectives.',
            image: <i class="fas fa-sitemap" aria-hidden="true"></i>,
            bordercolor: '#eb9416'



        }
    ]
    return (
        <div className='main-section8'>
            <div className='inside-section'>
                <div className='text-3xl fw-bold mt-5 text-center mb-5'>
                    Services <span className='it'>We Provide</span>
                </div>
                <div className='row d-flex gap-5  container-fluid mx-auto pl-[10px] ms-4'>
                    {data?.map((item, index) => {
                        return (
                            <div className='cardsss' key={index}
                                style={{
                                    borderBottom: `2px solid ${item?.bordercolor}`,
                                }}
                            >
                                <div style={{ color: item?.bordercolor }} className='text-5xl rotates'>
                                    {item?.image}
                                </div>
                                <div className='text-7xl inside-image pr-1'>
                                    {item?.image}
                                </div>
                                <div className='mt-4 '>
                                    {item?.name}
                                </div>
                                <div className='mt-2 z-5 w-[90%] text-1xl'>
                                    {item?.des}
                                </div>
                                <div className='underline btn pt-2' style={{ color: item?.bordercolor }}>
                                    Read More
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Section8