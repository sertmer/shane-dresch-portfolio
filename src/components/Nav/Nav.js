import './Nav.css';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Stills from '../Stills/Stills';

export default function Nav() {
  return(
    <nav>
      <p>nav</p>
      <Contact /> 
      <Projects />
      <Stills />
    </nav>
  )
}