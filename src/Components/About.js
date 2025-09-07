import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import './About.css';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';
import pdf from "../assets/resume.pdf";
import {BsDownload} from "react-icons/bs";

const About = () => {
    return (
        <>
            <div className='AboutPage'>
                <div className='AboutText'>
                    <h2 style={{
                        display: 'inline-block',
                        borderBottom: '2px solid',
                        paddingBottom: '5px',
                        marginBottom: '15px',
                    }}>
                        <b>About Me</b>
                    </h2>
                    <div style={{
                        marginBottom: '30px'
                    }}>
                        안녕하세요. 풀스택 개발자 이재욱입니다.
                        React와 Java를 활용해 프론트엔드와 백엔드를 모두 다루며,
                        새로운 기술을 배우고 프로젝트에 적용하는 것을 즐깁니다.
                    </div>

                    <h2 style={{
                        display: 'inline-block',
                        borderBottom: '2px solid',
                        paddingBottom: '5px',
                        marginBottom: '15px',
                    }}>
                        <b>Profile</b>
                    </h2>
                    <div style={{display: 'flex', gap: '40px', marginBottom: '15px'}}>
                        <span><b>Name</b></span>
                        <span>이재욱</span>
                    </div>
                    <div style={{display: 'flex', gap: '40px', marginBottom: '15px'}}>
                        <span><b>Birth</b></span>
                        <span>2000.11.10</span>
                    </div>
                    <div style={{display: 'flex', gap: '40px', marginBottom: '30px'}}>
                        <span><b>Mail</b></span>
                        <span>sjrnfl1746@gmail.com</span>
                    </div>

                    <h2 style={{
                        display: 'inline-block',
                        borderBottom: '2px solid',
                        paddingBottom: '5px',
                        marginBottom: '15px',
                    }}>
                        <b>Experience</b>
                    </h2>
                    <div style={{display: 'flex', gap: '40px', marginBottom: '30px', alignItems: 'center'}}>
                        <span style={{fontSize: '18px'}}><b>2025.03 ~ 2025.09</b></span>
                        <span style={{fontSize: '18px'}}>공공데이터 융합 풀스택 개발자 양성과정 수료</span>
                    </div>

                    <h2 style={{
                        display: 'inline-block',
                        borderBottom: '2px solid',
                        paddingBottom: '5px',
                        marginBottom: '15px',
                    }}>
                        <b>certificate</b>
                    </h2>

                    <div style={{display: 'flex', gap: '40px', marginBottom: '15px', alignItems: 'center'}}>
                        <b>2025</b> 정보처리기사
                    </div>

                    <div style={{display: 'flex', gap: '40px', marginBottom: '15px', alignItems: 'center'}}>
                        <b>2019</b> 운전면허 1종 보통
                    </div>

                </div>

                <div className="tilt-container">
                    <Tilt>
                        <img
                            src="/images/myprofile.jpg"
                            alt="Profile"
                            className="illustration"
                            style={{width: '300px', height: 'auto', borderRadius: '10px'}}
                        />
                    </Tilt>
                </div>

            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <h1>My <b>Resume</b></h1>
                <a href={pdf} download="Resume.pdf">
                    <button className='downloadCV' type='button'>
                        <h3><BsDownload/>&nbsp; Download</h3>
                    </button>
                </a>
            </div>

            <h1 className='SkillsHeading'><b>Tech Stack</b></h1>
            <div className='skills'>

                <Skills skill='Java'/>
                <Skills skill='Spring Boot'/>
                <Skills skill='HTML'/>
                <Skills skill='CSS'/>
                <Skills skill='JavaScript'/>
                <Skills skill='React'/>
                <Skills skill='MariaDB'/>
                <Skills skill='Github'/>
                <Skills skill='Postman'/>
                <Skills skill='SWAGGER'/>
                <Skills skill='Notion'/>
                <Skills skill='Figma'/>

            </div>
        </>
    )
}

export default About