import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DefaultLayout from '../layouts/DefaultLayout';
import ProductPage from '../pages/ProductPage';

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
         }
      ]
   }
]);

export default router;
