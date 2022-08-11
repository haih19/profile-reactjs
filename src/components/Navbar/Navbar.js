import { Logo } from '../Logo/Logo';
import { NavHeader } from './NavHeader/NavHeader';
import './navbar.scss';

export const Navbar = () => {
   return (
      <div className="navbar">
         <Logo />
         <NavHeader />
      </div>
   );
};
