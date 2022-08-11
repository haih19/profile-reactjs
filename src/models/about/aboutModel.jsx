import './aboutModel.scss';
import './aboutModelResponsive.scss';

export const AboutModel = () => {
   return (
      <div className="about-model-container">
         <div className="about-list">
            <div className="about-item-1">
               <div className="item-header">
                  <div className="item-header-title">
                     <p>About me</p>
                  </div>
                  <div className="item-header-line">
                     <p></p>
                  </div>
               </div>
               <div className="item-content">
                  <div className="content-element">
                     <div className="element-text">
                        <p>
                           Hello there! My name is <span>Hai Hoang</span>. I am a Web developer, and I'm very passionate
                           and dedicated to my work.
                        </p>
                     </div>
                  </div>
                  <div className="content-element">
                     <div className="element">
                        <div className="element-1">
                           <label htmlFor="">
                              <span>Name:</span>
                           </label>
                        </div>
                        <div className="element-2">
                           <p>Hai Hoang</p>
                        </div>
                     </div>
                     <div className="element">
                        <div className="element-1">
                           <label htmlFor="">
                              <span>Address:</span>
                           </label>
                        </div>
                        <div className="element-2">
                           <p>Hanoi, Vietnam</p>
                        </div>
                     </div>
                     <div className="element">
                        <div className="element-1">
                           <label htmlFor="">
                              <span>Study:</span>
                           </label>
                        </div>
                        <div className="element-2">
                           <p>PTIT</p>
                        </div>
                     </div>
                     <div className="element">
                        <div className="element-1">
                           <label htmlFor="">
                              <span>Mail:</span>
                           </label>
                        </div>
                        <div className="element-2">
                           <a href="mailto:haih19.work@gmail.com">haih19.work@gmail.com</a>
                        </div>
                     </div>
                     <div className="element">
                        <div className="element-1">
                           <label htmlFor="">
                              <span>Phone:</span>
                           </label>
                        </div>
                        <div className="element-2">
                           <a href="tel:+84327520041">+84 327 520 041</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="about-item-2">
               <div className="item-left">
                  <div className="item-header">
                     <div className="item-header-title">
                        <p>Programming</p>
                     </div>
                     <div className="item-header-line">
                        <p></p>
                     </div>
                  </div>
                  <div className="item-content">
                     <div className="content-element">
                        <div className="icon">
                           <i className="fa-solid fa-play"></i>
                        </div>
                        <div className="name">
                           <p>HTML</p>
                        </div>
                     </div>
                     <div className="content-element">
                        <div className="icon">
                           <i className="fa-solid fa-play"></i>
                        </div>
                        <div className="name">
                           <p>CSS</p>
                        </div>
                     </div>
                     <div className="content-element">
                        <div className="icon">
                           <i className="fa-solid fa-play"></i>
                        </div>
                        <div className="name">
                           <p>JavaScript</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="item-right">
                  <div className="item-header">
                     <div className="item-header-title">
                        <p>Libraries &amp; Frameworks</p>
                     </div>
                     <div className="item-header-line">
                        <p></p>
                     </div>
                  </div>
                  <div className="item-content">
                     <div className="content-element">
                        <div className="icon">
                           <i className="fa-solid fa-play"></i>
                        </div>
                        <div className="name">
                           <p>Bootstrap</p>
                        </div>
                     </div>
                     <div className="content-element">
                        <div className="icon">
                           <i className="fa-solid fa-play"></i>
                        </div>
                        <div className="name">
                           <p>Reactjs</p>
                        </div>
                     </div>
                     <div className="content-element">
                        <div className="icon">
                           <i className="fa-solid fa-play"></i>
                        </div>
                        <div className="name">
                           <p>Nodejs</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="about-item-3">
               <div className="item-header">
                  <div className="item-header-title">
                     <p>Education</p>
                  </div>
                  <div className="item-header-line">
                     <p></p>
                  </div>
               </div>
               <div className="item-content">
                  <div className="content-element">
                     <div className="year">
                        <p>2018 - running</p>
                     </div>
                     <div className="education-name">
                        <div className="name">Posts and Telecommunications Institute of Technology</div>
                        <div className="level">Bachelor Degree</div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="about-item-4">
               <div className="item-header">
                  <div className="item-header-title">
                     <p>Services</p>
                  </div>
                  <div className="item-header-line">
                     <p></p>
                  </div>
               </div>
               <div className="item-content">
                  <div className="content-element">
                     <div className="icon">
                        <i className="fa-solid fa-play"></i>
                     </div>
                     <div className="name">
                        <p>Website Development</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
