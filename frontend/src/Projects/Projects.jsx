import React from 'react'
import Navbar from '../component/Navbar'
import Project from '../component/Project'
import Footer from '../component/Footer'

function Projects() {
  return (
  <>
      <Navbar/>
      <div className="min-h screen">
        <Project/>
      </div>
      <Footer/>
      </>
  )
}

export default Projects

