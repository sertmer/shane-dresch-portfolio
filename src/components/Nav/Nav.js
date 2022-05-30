import './Nav.css';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return(
    <nav>
      <NavLink className='navigation-link' activeClassName='navigation-link-active' to='/projects'>Projects</NavLink>
      {/* <NavLink to='/stills'>Stills</NavLink> */}
      <NavLink className='navigation-link' activeClassName='navigation-link-active' to='/contact'>Contact</NavLink>
    </nav>
  )
}