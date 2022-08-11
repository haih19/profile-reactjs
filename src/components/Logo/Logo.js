import { Link } from 'react-router-dom';
import './logo.scss';
import './logoResponsive.scss';

export const Logo = () => {
   return (
      <div className="nav-logo">
         <Link to={'/'}>HH</Link>
      </div>
   );
};
