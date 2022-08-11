import './contactModel.scss';
import './contactModelResponsive.scss';
import { ContactUs } from '../../components/ContactUs/ContactUs';

export const ContactModel = () => {
   return (
      <div className="contact-model-container">
         <div className="contact-header">
            <div className="contact-header-title">
               <p>GET IN TOUCH</p>
            </div>
            <div className="contact-header-line">
               <p></p>
            </div>
         </div>
         <div className="contact-content">
            <div className="inform-list">
               <div className="inform-item">
                  <div className="icon">
                     <i className="location fa-solid fa-location-dot"></i>
                  </div>
                  <div className="name">Hanoi, VietNam</div>
               </div>
               <div className="inform-item">
                  <div className="icon">
                     <i className="mail fa-solid fa-envelope"></i>
                  </div>
                  <div className="name">haih19.work@gmail.com</div>
               </div>
               <div className="inform-item">
                  <div className="icon">
                     <i className="phone fa-solid fa-square-phone"></i>
                  </div>
                  <div className="name"> +84 327 520 041</div>
               </div>
            </div>

            <div className="mail-content">
               <div className="mail-title">
                  <p>Let's talk about everything</p>
               </div>
               {/* <div className="mail-contain">
                  <div className="mail-inform">
                     <div className="mail-inform-1">
                        <div className="input-name">
                           <input type="text" placeholder="name" />
                        </div>
                        <div className="input-email">
                           <input type="email" placeholder="email" />
                        </div>
                     </div>
                     <div className="mail-inform-2">
                        <input type="text" placeholder="Write your message" />
                     </div>
                  </div>
                  <div className="btn-send">
                     <button type="button">Send Message</button>
                  </div>
               </div> */}
               <ContactUs />
            </div>
         </div>
         <div className="map-content">
            <iframe
               title="map"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7450.523161324895!2d105.78087342447529!3d20.982149061547005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accdab6f3ae7%3A0x60ddfd85d24b0c52!2zTeG7mSBMYW8sIEjDoCDEkMO0bmcsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1660122785456!5m2!1svi!2s"
               width="100%"
               height="450"
               style={{ border: 0 }}
               loading="lazy"
               aria-hidden="false"
               tabIndex="0"
            ></iframe>
         </div>
      </div>
   );
};
