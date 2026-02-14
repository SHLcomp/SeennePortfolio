import React from 'react'
import Navbar from '../navbar/Navbar';
import "./ProjectDisplay.scss"

const ProjectDisplay = ({proj}) => {
  return (
    <>
    <Navbar />
    <div className='projectDisplay'>
        <h1>{proj.title}</h1>
        <h1>hello</h1>
        <img src={proj.img} alt="" />
    </div>
    {/* I wanna showcase project details, and my workflow */}
    </>
  )
}

export default ProjectDisplay