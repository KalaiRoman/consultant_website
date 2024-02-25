import React from 'react'
import './section2.scss';
function Section2() {

    const data = [
        {
            id: 1,
            name: "Contractual : Short-term working IT support or assistants for quick turnaround projects",
            image: <i className="fa fa-check" aria-hidden="true" />,
            bg: '#d6edff',
            textcolor: '#2196f3'
        },
        {
            id: 2,
            name: "Seasonal : Open positions to avail during a specific period of the year.",
            image: <i className="fa fa-check" aria-hidden="true" />,
            bg: '#d6edff',
            textcolor: '#2196f3'


        },
        {
            id: 3,
            name: "Full-Time : IT technicians for a specific amount of hours, per day or week.",
            image: <i className="fa fa-check" aria-hidden="true" />,
            bg: '#f2ecdf',
            textcolor: '#f19119'


        },
        {
            id: 4,
            name: "Contract-to-Hire : Role commitment for a short-term period before getting into the actual job.",
            image: <i className="fa fa-check" aria-hidden="true" />,
            bg: '#f2ecdf',
            textcolor: '#f19119'


        },
        {
            id: 5,
            name: "Consultation : Professional counseling and support on IT servers, operations, and security with Business Intelligence strategies.",
            image: <i className="fa fa-check" aria-hidden="true" />,
            bg: '#dff1ea',
            textcolor: '#30af5d'


        },
        {
            id: 6,
            name: "Direct-Hire : Filtering suitable in-house candidates for permanent, full-time position requirements. Short-term working IT support or assistants for quick turnaround projects.",
            image: <i className="fa fa-check" aria-hidden="true" />,
            bg: '#dff1ea',
            textcolor: '#30af5d'


        },
    ]
    return (
        <div className='main-section2'>

            <div className='row gap-4 container full-width mx-auto'>
                {data?.map((item, index) => {
                    return (
                        <div className='cardss col-lg-5 mb-2 mt-1  cursor-pointer hover:shadow hover:scale-105 ease-in duration-300 ' key={index}
                            style={{
                                background: item?.bg,
                                color: item?.textcolor
                            }}
                        >
                            <div className='d-flex gap-2'>
                                <div>
                                    {item?.image}
                                </div>
                                <div className='text-1lg'>
                                    {item?.name}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* <div className="row">
                <div className="col-lg-6 wow animate__fadeInLeft" style={{ visibility: 'visible', animationName: 'fadeInLeft' }}>
                    <ul className="coursepoint-list coursepoint-list-animate">
                        <li><strong>Contractual :</strong>
                            Short-term working IT support or assistants for quick turnaround projects.</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> <strong>Full-Time : </strong> IT
                            technicians for a specific amount of hours, per day or week.</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> <strong>Consultation :</strong>
                            Professional counseling and support on IT servers, operations, and security with
                            Business Intelligence strategies.</li>
                    </ul>
                </div>
                <div className="col-lg-6 wow animate__fadeInRight" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                    <ul className="coursepoint-list coursepoint-list-animate">
                        <li><i className="fa fa-check" aria-hidden="true" /> <strong>Seasonal :</strong> Open
                            positions to avail during a specific period of the year.</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> <strong>Contract-to-Hire :
                        </strong> Role commitment for a short-term period before getting into the actual
                            job.</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> <strong>Direct-Hire :</strong>
                            Filtering suitable in-house candidates for permanent, full-time position
                            requirements. Short-term working IT support or assistants for quick
                            turnaround projects.</li>
                    </ul>
                </div>
            </div> */}

        </div>
    )
}

export default Section2