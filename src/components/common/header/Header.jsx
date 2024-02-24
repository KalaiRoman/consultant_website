import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.scss"



const Header = () => {
  const [click, setClick] = useState(false);
  const [hoversection, setHoverSection] = useState(false);
  const [indexs, setindexs] = useState(null);


  const ListHeaders = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Recuriment Services",
      arryadata: [
        {
          id: 1,
          name: "first"
        },
        {
          id: 2,
          name: "second"
        }
      ]
    },
    {
      id: 3,
      name: "Corporate Training",
      arryadata: [
        {
          id: 1,
          name: "first"
        },
        {
          id: 2,
          name: "second"
        },
        {
          id: 3,
          name: "three"
        }
      ]
    },
    {
      id: 3,
      name: "Sucess Corner",

    },
    {
      id: 3,
      name: "Internships",
      arryadata: [
        {
          id: 1,
          name: "first"
        },
        {
          id: 2,
          name: "second"
        },
        {
          id: 3,
          name: "three"
        }
      ]
    },
  ]

  return (
    <>
      {/* <Head /> */}
      <header>

        <nav className='flexSB'
        >
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            {/* <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li> */}

            {ListHeaders?.map((item, index) => {
              return (
                <div className="main-dropdown-list"
                  onMouseLeave={() => {
                    setHoverSection(false)
                    setindexs(null)
                  }}
                >
                  <li onMouseOverCapture={() => {
                    setHoverSection(true)
                    setindexs(index + 1)
                  }}
                    className="list-li-tags "
                  >{item?.name} {item?.arryadata?.length > 0 ? <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg></span> : null} </li>
                  {indexs === index + 1 ?
                    <div className={item?.arryadata?.length > 0 ? "list-box" : null}>
                      <>
                        {item?.arryadata?.map((items, index) => {
                          return (
                            <div className="box-list-show"
                              key={index}

                            >
                              {
                                items?.name

                              }
                            </div>
                          )
                        })}
                      </>

                    </div> : <></>}
                </div>
              )
            })}
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header >
    </>
  )
}

export default Header
