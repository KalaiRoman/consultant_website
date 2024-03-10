import React, { useState } from 'react'
import './Section10.scss';
function Section10() {

    const [indexs, setIndexs] = useState(null);
    return (
        <div className='mb-[5%]'>
            <div className='text-3xl fw-bold pl-[5%] mb-6 mt-2'>
                Frequently Asked <span className='it'> Questions</span>
            </div>
            {Array(10)?.fill("kalaki")?.map((item, index) => {
                return (
                    <div className='main-acc'>
                        <div className={indexs === index ? "acc-active" : "acc-box1"} onClick={() => {
                            if (indexs) { setIndexs(null) }
                            else {
                                setIndexs(index)
                            }
                        }} >
                            <div>
                                NON-IT {index + 1}
                            </div>
                            <div onClick={() => {
                                if (indexs) { setIndexs(null) }
                                else {
                                    setIndexs(index)
                                }
                            }}>

                                {indexs === index ? <>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                    </svg>

                                </> : <>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </>}

                            </div>
                        </div>
                        {indexs === index ? <>
                            <div className='acc-box2'>
                                NON-IT RequireMent Data {index + 1}
                            </div>
                        </> : <></>}

                    </div>
                )
            })}
        </div>
    )
}

export default Section10