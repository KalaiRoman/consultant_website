import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import LoistIns from "./LoistIns"

const CourseHome = () => {
  return (
    <>
      <Back title='E-learning' />
      <CoursesCard />
      {/* <OnlineCourses /> */}
      <LoistIns />
    </>
  )
}

export default CourseHome
