import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/projects';
import ProjectDisplay from '../components/projectDisplay/ProjectDisplay';

const ProjFilter = () => {
  const {projId} = useParams();
  const project = data.find((e)=>e.id === Number(projId));
   if (!project) return <h1 style={{padding:"10vh"}}>Project Not Found</h1>;
  return (
    <div>
      <ProjectDisplay proj={project}/>
    </div>
  )
}

export default ProjFilter