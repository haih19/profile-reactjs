import { Link } from 'react-router-dom';
import './smFooter.scss';
import './smFooterResponsive.scss';

export const SocialMediaFooter = () => {
   const handleOnclickFace = () => {
      window.location.href = 'https://www.facebook.com/hai.h19/';
   };
   const handleOnclickTwitter = () => {
      window.location.href = 'https://twitter.com/haih19c';
   };
   const handleOnclickInsta = () => {
      window.location.href = 'https://www.instagram.com/haih19/';
   };
   const handleOnclickGit = () => {
      window.location.href = 'https://github.com/haih19';
   };

   return (
      <div className="social-media-list">
         <div className="social-media-item">
            <Link onClick={() => handleOnclickFace()} to="">
               <i className="facebook fa-brands fa-facebook-f"></i>
            </Link>
         </div>
         <div className="social-media-item">
            <Link onClick={() => handleOnclickTwitter()} to="">
               <i className="twitter fa-brands fa-twitter"></i>
            </Link>
         </div>
         <div className="social-media-item">
            <Link onClick={() => handleOnclickInsta()} to="">
               <i className="instagram fa-brands fa-instagram"></i>
            </Link>
         </div>
         <div className="social-media-item">
            <Link onClick={() => handleOnclickGit()} to="">
               <i className="github fa-brands fa-github"></i>
            </Link>
         </div>
      </div>
   );
};
