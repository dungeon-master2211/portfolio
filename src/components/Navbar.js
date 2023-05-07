import React, { useContext} from 'react'
import { ThemeContext, ThemeDispatchContext } from '../utils/Theme'
import {BsSun,BsFillMoonFill} from "react-icons/bs"
const Navbar = () => {
    const theme = useContext(ThemeContext)
    const dispatch = useContext(ThemeDispatchContext)
    function changeTheme(){
        theme==='dark' ?dispatch({type:'light'}):dispatch({type:'dark'})
    }
    
  return (
    <div className={`navbar navbar-${theme}`}>
      
      <a href="#about">About</a>
      
      <a href="#skill">Skill</a>
      <a href="#project">Project</a>
      
      <a href="#contact">Contact</a>
      <button onClick={()=>changeTheme()} className={`theme-button theme-button-${theme}`}>{theme==='dark'?<BsSun/>:<BsFillMoonFill/>}</button>
        
    </div>
  )
}

export default Navbar