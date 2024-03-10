import React from "react"
import Back from "../common/back/Back"
import "./contact.scss"

const Contact = () => {

  return (
    <>
      {/* <Back title='Contact us' /> */}
      <div className="w-[100%] mb-3 mt-3">
        <img
          className="w-[100%] h-[100%] object-contain"
          src="https://www.scmirt.org/wp-content/uploads/2020/03/Banner_Contact-us-min.jpg" alt="no image" />
      </div>
      <section className='contacts mb-5'>
        <div className='flex w-[100%] gap-4'>
          <div className='left row'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709309065206!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Bengaluru,+Karnataka</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> Poovarasan@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> + 1235 2355 98</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' className="form-input" />
                <input type='email' placeholder='Email' className="form-input" />
              </div>
              <input type='text' placeholder='Subject' className="form-input" />
              <textarea cols='30' rows='10' className="form-input" >
                Create a message here...
              </textarea>
              <button className='send-btn' >SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
