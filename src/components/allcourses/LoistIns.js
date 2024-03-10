import React from 'react'
import ceckbox from '../../assests/image/check-box.png';

function LoistIns() {
    return (
        <div className='w-[100%]'>

            <div className='fw-bold mt-3 mb-5 pl-6 text-3xl '>
                Top 15 reasons why you should join <span className='it'> Evision</span>
            </div>

            <div className='w-[95%] mx-auto align-items-center justify-center'>
                {Array(15)?.fill(null)?.map((item, index) => {
                    return (
                        <div key={index} className='mt-4 mb-4 border-b-2 pb-4'>
                            <div className='flex gap-4'>
                                <div>
                                    <img src={ceckbox} alt="no image" className='w-[20px] h-[20px]' />
                                </div>
                                <div>
                                    E-Learning Texts {index + 1}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>


            <div className='mt-4 text-center bg-green-400 py-6 text-3xl fw-bold text-black flex align-items-center justify-content-center'>
                <div className='animate-ping pr-4 text-orange-500'>...</div>Be Future Job ready, Now!!! <div className='pl-4 animate-ping text-blue-600'>...</div>
            </div>

        </div>
    )
}

export default LoistIns
