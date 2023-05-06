import React, { useContext } from 'react'
import { ThemeContext } from '../utils/Theme'

const Contact = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className={`contact contact-${theme}`}>
      <h2 className='section-title'>Contact</h2>
      <form>
        <input type='text' className='name' placeholder='Name'></input>
        <textarea className='message' placeholder='Message'></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact