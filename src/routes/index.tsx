import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/UserPages/homepage/HomePage';
import DefaultLayout from '../layouts/DefaultLayout';
import ProductPage from '../pages/UserPages/ProductPage';
import LoginPage from '../pages/Auth/LoginPage';
import SignupPage from '../pages/Auth/SignupPage';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/AdminPages/Dashboard';
import ProductAdmin from '../pages/AdminPages/Product/ProductAdmin';
import ProfileLayout from '../layouts/ProfileLayout';
import EditProfile from '../pages/ProfilePage/EditProfile';
import EditAddress from '../pages/ProfilePage/EditAddress';
import EditPassword from '../pages/ProfilePage/EditPassword';
import OrderPurchase from '../pages/ProfilePage/OrderPurchase ';

const router = createBrowserRouter([
   {
      path: '/',
      element: <DefaultLayout />,
      children: [
         {
            path: '/',
            element: <HomePage />
         },
         {
            path: '/products',
            element: <ProductPage />
         },
         {
            path: '/login',
            element: <LoginPage />
         },
         {
            path: '/signup',
            element: <SignupPage />
         }
      ]
   },
   {
      path: '/manage',
      element: <AdminLayout />,
      children: [
         {
            path: 'dashboard',
            element: <Dashboard />
         },
         {
            path: 'products',
            element: <ProductAdmin />
         }
      ]
   },
   {
      path: '/account',
      element: <ProfileLayout />,
      children: [
         {
            path: 'profile',
            element: <EditProfile/>
         },
         {
            path: 'address',
            element: <EditAddress/>
         },
         {
            path: 'password',
            element: <EditPassword/>
         },
         {
            path: 'purchase',
            element: <OrderPurchase/>
         },
         {
            path: 'voucher-wallet',
            element: <EditProfile/>
         },
      ]
   }
]);

export default router;
