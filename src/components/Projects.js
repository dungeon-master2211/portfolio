import React, { useContext } from 'react'
import { ThemeContext } from '../utils/Theme'
import SocialMedia from "../assets/socialmedia.PNG"
const Projects = () => {
  const theme = useContext(ThemeContext)
  const projectData = [{
    img_src:SocialMedia,
    name:'Social Media App',
    description:'A social media web app that allow users to post, upload image, edit post, delete, like, comment, add friends and chat with them.',
    link:'https://chatapp-6t82.onrender.com/'
  },
  {
    img_src:SocialMedia,
    name:'Social Media App',
    description:'A social media web app that allow users to post, upload image, edit post, delete, like, comment, add friends and chat with them.',
    link:'https://chatapp-6t82.onrender.com/'
  },
  {
    img_src:SocialMedia,
    name:'Social Media App',
    description:'A social media web app that allow users to post, upload image, edit post, delete, like, comment, add friends and chat with them.',
    link:'https://chatapp-6t82.onrender.com/'
  }
  ]
  return (
    <div className={`project project-${theme}`} id="project">
      <h2 className='section-title'>Projects</h2>
      <section className={`project-section project-section-${theme}`}>
        {projectData.map((item,index)=>{
          return <section key={index} className={`project-card project-card-${theme}`}>
            <img src={item.img_src} alt='project-snapshot' className='project-snapshot' ></img>
            <span className='project-name' >{item.name}</span>
            <span className='project-description'>{item.description}</span>
            <span className='btn-grp'>
              <button className='show-modal'>Show More</button>
              <a href={item.link} className='project-link' target='blank'>View</a>
              
            </span>
            
          </section>
        })}
      </section>
    </div>
  )
}

export default Projects