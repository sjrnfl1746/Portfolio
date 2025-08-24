import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Devansh Sahni</h4>
      <h4>Copyright &copy; 2023 DS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/sjrnfl1746" target='_blank'><FaGithub/></a>
        <a href='mailTo:sjrnfl1746@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer