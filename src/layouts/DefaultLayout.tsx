import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
   return (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   );
};

export default DefaultLayout;
