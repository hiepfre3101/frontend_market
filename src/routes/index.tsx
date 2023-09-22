import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/UserPages/homepage/HomePage';
import DefaultLayout from '../layouts/DefaultLayout';
import ProductPage from '../pages/UserPages/ProductPage';
import LoginPage from '../pages/Auth/LoginPage';
import SignupPage from '../pages/Auth/SignupPage';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/AdminPages/Dashboard';
import ProductAdmin from '../pages/AdminPages/Product/ProductAdmin';
import AboutPage from '../pages/UserPages/AboutPage';
import ContactPage from '../pages/UserPages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

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
         },
         {
            path: '/about',
            element: <AboutPage />
         },
         {
            path: '/contact',
            element: <ContactPage />
         },
      ]
   },
   {
      path: '*',
      element: <NotFoundPage />
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
   }
]);

export default router;
