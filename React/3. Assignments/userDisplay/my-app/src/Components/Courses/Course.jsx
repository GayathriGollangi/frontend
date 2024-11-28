import React from 'react'
import Heading from './Heading'
import Web from './Web'

const Course = () => {
  return (
    <div>
      <Heading text="Full"/>
      <Web heading="Full Stack Web Developement" num="1"/>
      <Heading text="Part"/>
      <Web heading="Full Stack Web Developement" num="1"/>
      <Web heading="Data Analytics" num="2"/>


    </div>
  )
}

export default Course
