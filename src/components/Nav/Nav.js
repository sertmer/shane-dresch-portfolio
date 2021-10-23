import './Nav.css';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Stills from '../Stills/Stills';
import { Route } from 'react-router-dom';

export default function Nav() {
  return(
    <nav>
      <Projects />
      <Stills />
      <Contact /> 
    </nav>
  )
}