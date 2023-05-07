import React, { useContext } from 'react'
import { ThemeContext } from '../utils/Theme'
import Developer from "../assets/developer.gif"
const About = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className={`about about-${theme}`} id="about">
      
      <section className={`about-card about-card-${theme}`}>
        <h2 className='section-title'>About Me</h2>
        <section className='about-description'>
          <div>
            <img src={Developer} alt='animation' className='animation-gif'/>
          </div>
          <div className='desc-text'>
            <p>I am a highly skilled Full Stack Developer with expertise in Python, JavaScript, Flask, React, Node.js, and MongoDB. With 1.5+ years of experience, I have developed a strong passion for software engineering, which has led me to work on many exciting projects.</p>
            <p>I am proficient in both front-end and back-end development, with experience in creating robust and reliable APIs and integrating them into web applications.</p>

          </div>

        </section>
      </section>

    </div>
  )
}

export default About