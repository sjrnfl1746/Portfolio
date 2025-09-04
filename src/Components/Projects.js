import React from 'react';
import ProjectBox from './ProjectBox';
import MyPetLogImage from '../images/MyPetLogImage.png'
import SaladayImage from '../images/SaladayImage.png'
import DiaryImage from '../images/DiaryImage.png'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={SaladayImage} projectName="Saladay" />
        <ProjectBox projectPhoto={DiaryImage} projectName="Diary" />
        <ProjectBox projectPhoto={MyPetLogImage} projectName="MyPetLog" />
      </div>

    </div>
  )
}

export default Projects