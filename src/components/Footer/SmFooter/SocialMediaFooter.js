import { Link } from 'react-router-dom';
import './smFooter.scss';
import './smFooterResponsive.scss';

export const SocialMediaFooter = () => {
   return (
      <div className="social-media-list">
         <div className="social-media-item">
            <Link to={'https://www.facebook.com/hai.h19/'}>
               <i className="facebook fa-brands fa-facebook-f"></i>
            </Link>
         </div>
         <div className="social-media-item">
            <Link to={'https://twitter.com/haih19c'}>
               <i className="twitter fa-brands fa-twitter"></i>
            </Link>
         </div>
         <div className="social-media-item">
            <Link to={'https://www.instagram.com/haih19/'}>
               <i className="instagram fa-brands fa-instagram"></i>
            </Link>
         </div>
         <div className="social-media-item">
            <Link to={'https://github.com/haih19'}>
               <i className="github fa-brands fa-github"></i>
            </Link>
         </div>
      </div>
   );
};
