import React, { useContext, useRef } from 'react'
import { ThemeContext, ThemeDispatchContext } from '../utils/Theme'
import {BsSun,BsFillMoonFill} from "react-icons/bs"
const Navbar = () => {
    const theme = useContext(ThemeContext)
    const dispatch = useContext(ThemeDispatchContext)
    function changeTheme(){
        theme==='dark' ?dispatch({type:'light'}):dispatch({type:'dark'})
    }
    const aboutRef = useRef(null)
    const skillRef = useRef(null)
    const projectRef = useRef(null)
    const contactRef = useRef(null)
  return (
    <div className={`navbar navbar-${theme}`}>
      <span onClick={()=>aboutRef.current.scrollIntoView()}>About</span>
      <span onClick={()=>skillRef.current.scrollIntoView()}>Skill</span>
      <span onClick={()=>projectRef.current.scrollIntoView()}>Project</span>
      <span onClick={()=>contactRef.current.scrollIntoView()}>Contact</span>
      <button onClick={()=>changeTheme()} className={`theme-button theme-button-${theme}`}>{theme==='dark'?<BsSun/>:<BsFillMoonFill/>}</button>
        
    </div>
  )
}

export default Navbar