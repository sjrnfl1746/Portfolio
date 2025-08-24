import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Lee jae uk</b></h1>
          <Typed/>
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 style={{
            marginBottom: '20px',
            display: 'block'
          }}>
            <b>Introduction</b>
          </h1>
          <p>안녕하세요. 풀스택 개발자 이재욱입니다.<br/>
            저는 프론트엔드와 백엔드를 모두 다루는 풀스택 개발자로, 주 언어는 <b>Java</b>입니다.
            <b>React</b>와 <b>JavaScript</b>로 직관적인 사용자 인터페이스를 구현하고,
            <b>Java</b>와 <b>Spring Boot</b>를 활용해 안정적이고 효율적인 서버와 데이터베이스를 설계합니다.
            또한 <b>GitHub</b>와 <b>Postman</b>등 다양한 개발 도구와 기술을 다루며 프로젝트를 완성해왔습니다.<br/>
            저는 새로운 기술을 배우고 실제 프로젝트에 적용하며 성장하는 것을 즐깁니다.
            앞으로도 끊임없이 발전하며 더 나은 서비스를 만들어내는 개발자가 되고자 합니다.
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home