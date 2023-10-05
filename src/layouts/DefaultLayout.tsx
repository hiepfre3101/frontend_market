import Header from '../components/layout/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import { useGetTokenQuery } from '../services/auth.service';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { saveTokenAndUser } from '../slices/authSlice';

const DefaultLayout = () => {
   const { data } = useGetTokenQuery();
   const dispatch = useDispatch();
   useEffect(() => {
      if (data?.body?.data && data?.body?.accessToken) {
         dispatch(saveTokenAndUser({ accessToken: data?.body?.accessToken, user: data?.body?.data }));
      }
   }, [data]);
   return (
      <>
         {/* <Header /> */}
         <Outlet />
         {/* <Footer /> */}
      </>
   );
};

export default DefaultLayout;
