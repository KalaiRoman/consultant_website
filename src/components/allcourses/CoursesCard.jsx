import React from "react"
import "./courses.scss"
import ceckbox from '../../assests/image/check-box.png';
import bannerimagre from '../../assests/image/bannerimage.jpg';
const CoursesCard = () => {
  return (
    <div className="main-section-card">
      <div className="flex">
        <div className="w-[50%]">

        </div>
        <div className="w-[50%]">
          <div className="text-3xl fw-bold leading-10">
            Get ahead in your Career with our <span className="it">e-Learning Internship Program</span>
          </div>
          <div className="w-[95%] leading-8 mt-4 mb-4">
            Evision is one of the dominant names in the online training industry. We have a big chain of IT courses that are specifically industry- centric and job-aligned. These courses have enabled trainees to earn more from this competitive market. Evision is the authorized training partner of Microsoft, Cisco, Red Hat and Amazon. Evision conveys aspect IT courses & certification and provides tremendous online training to candidate who wants to start their career in corporate sectors. The demand of abundant large upmarket grades is fulfilled by Evision by providing best online training.
          </div>
          <div>
            <div className="fw-bold text-2xl">
              Objectives:
            </div>
            <div className="mt-4 w-[95%]">
              <div className="flex gap-2 mb-3">

                <div className="w-[5%]"><img src={ceckbox} alt="no image" className="check-box-image"></img></div>
                <div>
                  Increase access to learning opportunities/increase flexibility.

                </div>
              </div>
              <div className="flex gap-2 mb-3">
                <div className="w-[5%]"><img src={ceckbox} alt="no image" className="check-box-image"></img></div>
                <div>
                  Enhance the general quality of teaching/learning.

                </div>

              </div>
              <div className="flex gap-2 mb-3">
                <div className="w-[5%]"><img src={ceckbox} alt="no image" className="check-box-image"></img></div>
                <div className="w-[95%]">
                  Develop the skills and competencies needed, and also ensure that learners have the digital literacy skills required in their discipline, profession or career – or, put simply, to get work in the future.

                </div>

              </div>
              <div className="flex gap-2 mb-3">
                <div className="w-[5%]"><img src={ceckbox} alt="no image" className="check-box-image"></img></div>
                <div className="w-[95%]">
                  Meet the learning styles/needs of millennial students.

                </div>


              </div>
              <div className="flex gap-2 mb-3">
                <div className="w-[5%]"><img src={ceckbox} alt="no image" className="check-box-image"></img></div>
                <div className="w-[95%]">
                  Stay at the leading edge of educational technology developments/ digitalize all learning – or put another way, to respond to the technological imperative.

                </div>

              </div>
              <div className="flex gap-2 mb-3">
                <div className="w-[5%]"><img src={ceckbox} alt="no image" className="check-box-image"></img></div>
                <div className="w-[95%]">
                  De-institutionalize learning/to enable self-managed learning.

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={bannerimagre} alt="no image" className="banner-image" />
      </div>
    </div>
  )
}

export default CoursesCard
