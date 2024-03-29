import React from 'react'
import { Routes, Route } from "react-router-dom"
import About from "./../components/about/About"
import CourseHome from "./../components/allcourses/CourseHome"
import Team from "./../components/team/Team"
import Pricing from "./../components/pricing/Pricing"
import Blog from "./../components/blog/Blog"
import Contact from "./../components/contact/Contact"
import Home from "./../components/home/Home"
import NonIT from '../components/nonIT/NonIT'
import Pagenotfound from '../components/pagenotfound/Pagenotfound'
function Router() {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/courses' element={<CourseHome />} />
                <Route path='/team' element={<Team />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/success' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />
                <Route exact path='/non-it-recruitment' element={<NonIT />} />
                <Route path='/*' element={<Pagenotfound />} />
            </Routes>
        </>
    )
}

export default Router