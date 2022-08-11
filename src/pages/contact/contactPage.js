import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { ContactModel } from '../../models/contact/contactModel';
import { NavbarResponsive } from '../../components/Navbar/Responsive/NavbarResponsive';
import MediaQuery from 'react-responsive';

export const ContactPage = () => {
   return (
      <>
         <MediaQuery minWidth="46.25em">
            <Navbar />
         </MediaQuery>
         <MediaQuery maxWidth="46.1875em">
            <NavbarResponsive />
         </MediaQuery>
         <ContactModel></ContactModel>
         <Footer />
      </>
   );
};
