import React from "react"
import { blog } from "../../../dummydata"
import "./footer.scss"

const Footer = () => {
  return (
    <>
      {/* <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h3>we are Social</h3>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>

          <div className='box last'>
            <h3>Contact Details</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +2 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved | This template is made with <i className='fa fa-heart'></i> by GorkhCoder
        </p>
      </div> */}
      <div className="main-footer-section">
        <div className="inside-footer-section">
          <div className="main-inaise-section w-[80%] flex xs:flex-col mx-auto">
            <div className="w-[25%]">
              <div className="text-2xl fw-bold mb-5">
                Contact Details
              </div>
              <div className="flex gap-3 mt-4 mb-3 w-[85%]">
                <i class="fas fa-map-marker-alt"></i>
                Bengaluru,+Karnataka
              </div>
              <div className="flex gap-3 mt-4 mb-3 w-[85%]">
                <i class="fas fa-mobile"></i>
                +91  <>877   8377   119</>
              </div>
              <div className="flex gap-3 mt-4 mb-4">
                <i className='fa fa-paper-plane'></i>
                Poovarasan@gmail.com
              </div>

              <div>

              </div>
            </div>
            <div className="w-[25%]">
              <div className="text-2xl fw-bold mb-5">
                Site Links
              </div>
              <div className="mt-3">
                <div className="mt-4">
                  <div className="mt-4 mb-2 cursor-pointer hover:scale-105 flex gap-3">
                    <div><i class="fas fa-arrow-right"></i></div>Contact Us</div>
                  <div className="mt-4 mb-2 cursor-pointer hover:scale-105 flex gap-3">
                    <div><i class="fas fa-arrow-right"></i></div>
                    Pricing</div>
                  <div className="mt-4 mb-2 cursor-pointer hover:scale-105 flex gap-3"> <div><i class="fas fa-arrow-right"></i></div>Terms & Conditions</div>
                  <div className="mt-4 mb-2 cursor-pointer hover:scale-105 flex gap-3"> <div><i class="fas fa-arrow-right"></i></div>Privacy</div>
                  <div className="mt-4 mb-2 cursor-pointer hover:scale-105 flex gap-3"> <div><i class="fas fa-arrow-right"></i></div>Feedbacks</div>
                </div>
              </div>
            </div>
            <div className="w-[25%]">
              <div className="text-2xl fw-bold mb-5">
                Usefull Links

              </div>
              <div className="mt-3">
                <div className="mt-4">
                  <div className="mt-4 mb-2 cursor-pointer hover:scale-105 flex gap-3">
                    <div><i class="fas fa-arrow-right"></i></div>100% Job Guarantee</div>
                  <div className="mt-4 mb-2 cursor-pointer hover:scale-105 flex gap-3">
                    <div><i class="fas fa-arrow-right"></i></div>
                    Apply Online</div>
                  <div className="mt-4 mb-2 cursor-pointer hover:scale-105 flex gap-3"> <div><i class="fas fa-arrow-right"></i></div>Terms Of Use</div>
                  <div className="mt-4 mb-2 cursor-pointer hover:scale-105 flex gap-3"> <div><i class="fas fa-arrow-right"></i></div>Faq</div>
                  <div className="mt-4 mb-2 cursor-pointer hover:scale-105 flex gap-3"> <div><i class="fas fa-arrow-right"></i></div>Privacy Policy</div>
                </div>
              </div>
            </div>
            <div className="w-[25%]">
              <div className="text-2xl fw-bold mb-5">
                We Are Social

              </div>
              <div className="mt-4 flex gap-4">
                <i class="fab fa-google icon hover:scale-75"></i>
                <i className='fab fa-facebook-f icon hover:scale-75'></i>
                {/* <i className='fab fa-twitter icon hover:scale-75'></i> */}
                {/* <i className='fab fa-instagram icon hover:scale-75'></i> */}
                {/* <i className="fab fa-youtube icon hover:scale-75"></i> */}
                <i class="fab fa-linkedin-in icon hover:scale-75"></i>


              </div>
            </div>
          </div>

          <div className="mt-[3%]">
            <div className="w-[80%] mx-auto mt-[10%]">
              <hr />
            </div>
            <div className="w-[80%] mx-auto mt-4 cursor-pointer">
              Copyright © 2024 Evision. All Rights Reserved.
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer
