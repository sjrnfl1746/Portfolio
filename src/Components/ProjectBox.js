import React from 'react';
import {FaGithub} from "react-icons/fa";
import './ProjectBox.css'


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {

      SaladayDesc:"Spring Boot, REST API, React로 샐러드 판매 키오스크 및 Admin 페이지를 구현해 보았습니다.",
      SaladayGithub:"https://github.com/sjrnfl1746/saladay_admin",

      DiaryDesc:"React를 활용하여 감정 일기장을 구현해 보았습니다.",
      DiaryGithub:"https://github.com/sjrnfl1746/react_edu_diary_250805",

      MyPetLogDesc:"React, Spring Boot Api를 활용하여 반려동물 커뮤니티 및 쇼핑몰 사이트를 구현해 보았습니다.",
      MyPetLogGithub:"https://github.com/sjrnfl1746/mypetlog_customer",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }

  return (
    <div className='projectBox'>
        <img className='projectPhoto' src={projectPhoto} alt="Project display" />
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox