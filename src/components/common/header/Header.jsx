import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Head from "./Head"
import "./header.scss"



const Header = () => {
  const [click, setClick] = useState(false);
  const [hoversection, setHoverSection] = useState(false);
  const [indexs, setindexs] = useState(null);


  const navigate = useNavigate();


  const ListHeaders = [
    {
      id: 1,
      name: "Home",
      path: "/"
    },
    {
      id: 2,
      name: "Consulting Services",
      arryadata: [
        {
          id: 1,
          name: "Non-IT Recuriment - Civil / Mechanical / Electrical / Electronics",
          path: "/non-it-recruitment"
        },

      ]
    },
    // {
    //   id: 3,
    //   name: "Corporate Training",
    //   arryadata: [
    //     {
    //       id: 1,
    //       name: "first"
    //     },
    //     {
    //       id: 2,
    //       name: "second"
    //     },
    //     {
    //       id: 3,
    //       name: "three"
    //     }
    //   ]
    // },
    // {
    //   id: 4,
    //   name: "Sucess Corner",
    //   path: "/success"

    // },
    {
      id: 5,
      name: "Internships",
      arryadata: [
        {
          id: 1,
          name: "e-learning",
          path: "/courses"
        },
        // {
        //   id: 2,
        //   name: "IT Certification"
        // },
        // {
        //   id: 3,
        //   name: "three"
        // }
      ]
    },
    {
      id: 6,
      name: "Contactus",
      path: "/contact"

    },
  ]

  return (
    <>
      <header>

        <nav className='flexSB'
        >
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>


            {ListHeaders?.map((item, index) => {
              return (
                <div className="main-dropdown-list"
                  onMouseLeave={() => {
                    setHoverSection(false)
                    setindexs(null)
                  }}
                  key={index}
                >
                  <li onMouseOverCapture={() => {
                    setHoverSection(true)
                    setindexs(index + 1)
                  }}
                    className="list-li-tags "
                    onClick={() => {
                      if (item?.arryadata?.length > 0) {

                      }
                      else {
                        navigate(item?.path)
                      }
                    }}
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
                              onClick={() => navigate(items?.path)}
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
          <div className='starts w-[10%]  flex align-items-center justify-center'>
            <div className="border p-3 rounded w-[20px] h-[20px] flex align-items-center justify-content-center cursor-pointer">
              <i className='fa fa-bars'></i>
            </div>
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


// sun grow it consuting services llp