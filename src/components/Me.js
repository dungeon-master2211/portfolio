import React, { useContext } from 'react'
import { ThemeContext } from '../utils/Theme'
import MyAvatar from "../assets/mypic.png"
const Me = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className={`me me-${theme}`}>
      <section className='name'>
        <h2>Hello, I am</h2>
        <h1>Harshit Srivastava</h1>
        <span className='short-intro'>I'm a professional Full Stack Developer</span>
      </section>
      <section className='photo'>
        <img src={MyAvatar} alt='avatar' className='avatar'></img>
      </section>
    </div>
  )
}

export default Me