import React, { useContext } from 'react'
import { ThemeContext } from '../utils/Theme'
import MyAvatar from "../assets/mypic.png"
import {AiFillLinkedin,AiFillGithub} from "react-icons/ai"
const Me = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className={`me me-${theme}`} id="me">
      <section className='name'>
        <h2>Hello, I am</h2>
        <h1>Harshit Srivastava</h1>
        <span className='short-intro'>I'm a professional Full Stack Developer</span>
        <section className='socials'>
            <span className={`social-logo social-logo-${theme}`}><a href={'https://www.linkedin.com/in/harshit-srivastava-2b293b182/'} target='blank'><AiFillLinkedin/></a></span>
            <span className={`social-logo social-logo-${theme}`}><a href={'https://github.com/dungeon-master2211'} target='blank'><AiFillGithub/></a></span>
        </section>
      </section>
      <section className='photo'>
        <img src={MyAvatar} alt='avatar' className='avatar'></img>
      </section>
    </div>
  )
}

export default Me