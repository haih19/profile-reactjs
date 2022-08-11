import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { AboutModel } from '../../models/about/aboutModel';
import MediaQuery from 'react-responsive';
import { NavbarResponsive } from '../../components/Navbar/Responsive/NavbarResponsive';

export const AboutPage = () => {
   return (
      <>
         <MediaQuery minWidth="46.25em">
            <Navbar />
         </MediaQuery>
         <MediaQuery maxWidth="46.1875em">
            <NavbarResponsive />
         </MediaQuery>
         <AboutModel />
         <Footer />
      </>
   );
};
