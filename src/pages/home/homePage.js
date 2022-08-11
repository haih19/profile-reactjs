import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { HomeModel } from '../../models/home/homeModel';
import { NavbarResponsive } from '../../components/Navbar/Responsive/NavbarResponsive';
import MediaQuery from 'react-responsive';

export const HomePage = () => {
   return (
      <>
         <MediaQuery minWidth="46.25em">
            <Navbar />
         </MediaQuery>
         <MediaQuery maxWidth="46.1875em">
            <NavbarResponsive />
         </MediaQuery>
         <HomeModel />
         <Footer />
      </>
   );
};
