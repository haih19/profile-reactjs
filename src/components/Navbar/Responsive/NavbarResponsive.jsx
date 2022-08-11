import { useState } from 'react';
import './navbarResponsive.scss';
import { NavLink, Link } from 'react-router-dom';

export const NavbarResponsive = () => {
   const [isDisplayed, setIsDisplayed] = useState(false);

   const handleBarButton = () => {
      setIsDisplayed(!isDisplayed);
   };

   return (
      <>
         {!isDisplayed ? (
            <div id="nav-res-small">
               <div className="title">
                  <div className="logo">
                     <Link to={'/'}>HH</Link>
                  </div>
                  <div className="icon">
                     <button type="submit" onClick={() => handleBarButton()}>
                        <i className="fa-solid fa-bars"></i>
                     </button>
                  </div>
               </div>
            </div>
         ) : (
            <div id="nav-res-full">
               <div className="title">
                  <div className="logo">
                     <Link to={'/'}>HH</Link>
                  </div>
                  <div className="icon">
                     <button type="submit" onClick={() => handleBarButton()}>
                        <i className="fa-solid fa-x"></i>
                     </button>
                  </div>
               </div>
               <div className="content">
                  <ul className="nav-res">
                     <li className="home">
                        <NavLink onClick={() => handleBarButton()} activeclassname="active" to={'/'}>
                           Home
                        </NavLink>
                     </li>
                     <li className="about">
                        <NavLink onClick={() => handleBarButton()} to={'/about'}>
                           About
                        </NavLink>
                     </li>
                     <li className="project">
                        <NavLink onClick={() => handleBarButton()} to={'/project'}>
                           Projects
                        </NavLink>
                     </li>
                     <li className="contact">
                        <NavLink onClick={() => handleBarButton()} to={'/contact'}>
                           Contact
                        </NavLink>
                     </li>
                  </ul>
               </div>
            </div>
         )}
      </>
   );
};
