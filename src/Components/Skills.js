import React from 'react';
import {FaJava, FaReact, FaGithub, FaHtml5, FaCss3, FaFigma} from "react-icons/fa";
import {SiFigma, SiSpringboot} from "react-icons/si";
import {DiJavascript1} from "react-icons/di";
import {SiPostman, SiMariadb, SiSwagger} from "react-icons/si";
import { SiNotion } from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'Java': <FaJava/>,
        "Spring Boot" : <SiSpringboot/>,
        "HTML": <FaHtml5/>,
        "CSS": <FaCss3/>,
        JavaScript: <DiJavascript1/>,
        React: <FaReact/>,
        "MariaDB": <SiMariadb/>,
        Github : <FaGithub/>,
        Postman: <SiPostman/>,
        "SWAGGER": <SiSwagger/>,
        "Notion": <SiNotion/>,
        "Figma": <FaFigma/>,
    }
    
  return (
      <div
          title={skill}
          className='SkillBox'
          style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px'
          }}
      >
          {icon[skill]}
          <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{skill}</span>
      </div>
  )
}

export default Skills
