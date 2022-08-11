import { NavLink } from 'react-router-dom';
import './navHeader.scss';
import './navHeaderResponsive.scss';

export const NavHeader = () => {
   return (
      <ul className="nav-link">
         <li>
            <NavLink activeclassname="active" to={'/#'}>
               Home
            </NavLink>
         </li>
         <li>
            <NavLink to={'/#about'}>About</NavLink>
         </li>
         <li>
            <NavLink to={'/#project'}>Projects</NavLink>
         </li>
         <li>
            <NavLink to={'/#contact'}>Contact</NavLink>
         </li>
      </ul>
   );
};
