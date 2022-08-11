import './homeModel.scss';
import { Link } from 'react-router-dom';
import './homeModelResponsive.scss';

export const HomeModel = () => {
   return (
      <div className="home-model-container">
         <p className="home-model-name">
            Hi, I'm <span>Hai Hoang</span>
         </p>
         <p className="home-model-line"></p>
         <p className="home-model-job">
            <span>Web</span> Developer
         </p>
         <Link to={'/contact'}>Get in Touch</Link>
      </div>
   );
};
