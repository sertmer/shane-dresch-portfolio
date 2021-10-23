import './Nav.css';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Stills from '../Stills/Stills';

export default function Nav() {
  return(
    <nav>
      <Projects />
      <Stills />
      <Contact /> 
    </nav>
  )
}