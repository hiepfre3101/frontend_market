import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DefaultLayout from '../layouts/DefaultLayout';
import ProductPage from '../pages/ProductPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

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
      ]
   }
]);

export default router;
