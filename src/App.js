import './App.css';
import Navbar from './components/Navbar';
import Me from "./components/Me"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { useContext } from 'react';
import { ThemeContext } from './utils/Theme';
import Qualification from './components/Qualification';
function App() {
  const theme = useContext(ThemeContext)
  return (
    <div className={`App App-${theme}`}>
      <Navbar/>
      <Me/>
      <About/>
      <Skills/>
      <Projects/>
      <Qualification/>
      <Contact/>
    </div>
  );
}

export default App;
