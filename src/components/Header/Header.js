import './Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <NavLink to='/' className='name'>SHANE DRESCH</NavLink>
      <h2>C I N E M A T O G R A P H E R</h2>
    </header>
  )
}

