import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/projects';
import ProjectDisplay from '../components/projectDisplay/ProjectDisplay';

const ProjFilter = () => {
  const {projId} = useParams();
  const project = data.find((e)=>e.id === Number(projId));
  return (
    <div>
      <ProjectDisplay proj={project}/>
    </div>
  )
}

export default ProjFilter