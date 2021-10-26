import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  return(
    <nav>
      <Link to='/projects'>Projects</Link>
      <Link to='/stills'>Stills</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  )
}