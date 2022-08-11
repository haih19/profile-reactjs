import './projectModel.scss';
import './projectModelResponsive.scss';
import { Link } from 'react-router-dom';

export const ProjectModel = () => {
   return (
      <div className="project-model-container">
         <div className="title">
            <div className="title-text">
               <p>PROJECTS</p>
            </div>
            <div className="title-line">
               <p></p>
            </div>
         </div>
         <div className="content">
            <div className="project-list">
               <div className="project-item item-1">
                  <div className="item-img">
                     <img
                        src="https://res.cloudinary.com/dqvjijgb5/image/upload/v1660126247/profile/projects/1/1.png"
                        alt=""
                     />
                  </div>
                  <div className="item-inform">
                     <div className="line">
                        <p></p>
                     </div>
                     <div className="inform-title">Shoes Shop</div>
                     <div className="inform-content">
                        <p>To display shoes using Bootstrap</p>
                     </div>
                     <div className="inform-footer">
                        <div className="inform-git">
                           <Link to={''}>Go to Github</Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="project-item item-2">
                  <div className="item-img">
                     <img
                        src="https://res.cloudinary.com/dqvjijgb5/image/upload/v1660126264/profile/projects/3/1.png"
                        alt=""
                     />
                  </div>
                  <div className="item-inform">
                     <div className="line">
                        <p></p>
                     </div>
                     <div className="inform-title">The Band</div>
                     <div className="inform-content">
                        <p>Responsive website</p>
                     </div>
                     <div className="inform-footer">
                        <div className="inform-git">
                           <Link to={''}>Go to Github</Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="project-item item-3">
                  <div className="item-img">
                     <img
                        src="https://res.cloudinary.com/dqvjijgb5/image/upload/v1660126260/profile/projects/4/1.png"
                        alt=""
                     />
                  </div>
                  <div className="item-inform">
                     <div className="line">
                        <p></p>
                     </div>
                     <div className="inform-title">Major assignment - WD</div>
                     <div className="inform-content">
                        <p>Using PHP, Xampp</p>
                     </div>
                     <div className="inform-footer">
                        <div className="inform-git">
                           <Link to={''}>Go to Github</Link>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="project-item item-4">
                  <div className="item-img">
                     <img
                        src="https://res.cloudinary.com/dqvjijgb5/image/upload/v1660126276/profile/projects/5/1.png"
                        alt=""
                     />
                  </div>
                  <div className="item-inform">
                     <div className="line">
                        <p></p>
                     </div>
                     <div className="inform-title">Nodejs Basic</div>
                     <div className="inform-content">
                        <p>CRUD and Rest API</p>
                     </div>
                     <div className="inform-footer">
                        <div className="inform-git">
                           <Link to={''}>Go to Github</Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="project-item item-5">
                  <div className="item-img">
                     <img
                        src="https://res.cloudinary.com/dqvjijgb5/image/upload/v1660126276/profile/projects/2/1.png"
                        alt=""
                     />
                  </div>
                  <div className="item-inform">
                     <div className="line">
                        <p></p>
                     </div>
                     <div className="inform-title">Reactjs Hooks</div>
                     <div className="inform-content">
                        <p>Get Covid Api and show</p>
                     </div>
                     <div className="inform-footer">
                        <div className="inform-git">
                           <Link to={''}>Go to Github</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
