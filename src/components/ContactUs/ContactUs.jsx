import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
   const form = useRef();

   const [userName, setUserName] = useState('');
   const [userEmail, setUserEmail] = useState('');
   const [userMessage, setUserMessage] = useState('');

   const handleOnchangeName = (event) => {
      if (event.target.value.length <= 50) {
         setUserName(event.target.value);
      } else {
         toast.warning('Notice! Message must less than 50 characters');
      }
   };
   const handleOnchangeEmail = (event) => {
      setUserEmail(event.target.value);
   };
   const handleOnchangeMessage = (event) => {
      if (event.target.value.length <= 500) {
         setUserMessage(event.target.value);
      } else {
         toast.warning('Notice! Message must less than 500 characters');
      }
   };

   const sendEmail = (e) => {
      e.preventDefault();
      console.log(e.target.value);

      if (userName !== '' && userEmail !== '' && userMessage !== '') {
         emailjs.sendForm('service_kq21ins', 'template_ntu5u6f', form.current, 'XR0i0udR5nXzZOxUp').then(
            (result) => {
               console.log(result.text);
               toast.success('Sended');
               setUserName('');
               setUserEmail('');
               setUserMessage('');
            },
            (error) => {
               console.log(error.text);
            },
         );
      } else {
         toast.error('Missing Name or Email or Message');
         return;
      }
   };

   return (
      <form className="mail-contain" ref={form} onSubmit={sendEmail}>
         <div className="mail-inform">
            <div className="mail-inform-1">
               <div className="input-name">
                  {/* user_name */}
                  <input
                     onChange={(event) => handleOnchangeName(event)}
                     type="text"
                     name="user_name"
                     placeholder="Name"
                     value={userName}
                  />
               </div>
               <div className="input-email">
                  {/* user_email */}
                  <input
                     onChange={(event) => handleOnchangeEmail(event)}
                     type="email"
                     name="user_email"
                     placeholder="Email"
                     value={userEmail}
                  />
               </div>
            </div>
            <div className="mail-inform-2">
               <textarea
                  onChange={(event) => handleOnchangeMessage(event)}
                  name="message"
                  placeholder="Write your message . . ."
                  value={userMessage}
               />
            </div>
         </div>
         <div className="btn-send">
            <button type="submit">Send a Email</button>
         </div>
      </form>
   );
};
