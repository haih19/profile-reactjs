import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { ProjectModel } from '../../models/project/projectModel';
import { NavbarResponsive } from '../../components/Navbar/Responsive/NavbarResponsive';
import MediaQuery from 'react-responsive';

export const ProjectPage = () => {
   return (
      <>
         <MediaQuery minWidth="46.25em">
            <Navbar />
         </MediaQuery>
         <MediaQuery maxWidth="46.1875em">
            <NavbarResponsive />
         </MediaQuery>
         <ProjectModel />
         <Footer />
      </>
   );
};
