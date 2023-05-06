import React, { useContext } from 'react'
import { ThemeContext } from '../utils/Theme'
import {DiPython,DiJavascript1,DiReact,DiNodejs,DiGit,DiMongodb} from "react-icons/di"
import {SiFlask} from "react-icons/si"
const skillsData = [<DiPython/>,<DiJavascript1/>,<DiReact/>,<SiFlask/>,<DiNodejs/>,<DiGit/>,<DiMongodb/>]
const Skills = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className={`skill skill-${theme}`}>
      <h2 className='section-title'>Skills</h2>
      <section className='skill-section'>
        {skillsData.map((item,index)=><span key={index} className={`skill-logo skill-logo-${theme}`}>
          {item}
        </span>)}
      </section>
    </div>
  )
}

export default Skills