import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/UserPages/homepage/HomePage';
import DefaultLayout from '../layouts/DefaultLayout';
import ProductPage from '../pages/UserPages/ProductPage';
import LoginPage from '../pages/Auth/LoginPage';
import SignupPage from '../pages/Auth/SignupPage';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/AdminPages/Dashboard';
import ProductAdmin from '../pages/AdminPages/Product/ProductAdmin';
import AccountManager from '../pages/AdminPages/User/AccountManager';
import AddAccount from '../pages/AdminPages/User/AddAccount';
import EditAccount from '../pages/AdminPages/User/EditAccount';
import AddProduct from '../pages/AdminPages/Product/AddProduct';

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
         },
         {
            path: 'accounts',
            element: <AccountManager />
         },
         {
            path: 'accounts/add',
            element: <AddAccount />
         },
         {
            path: 'accounts/:id/edit',
            element: <EditAccount />
         },
         {
            path: 'add-product',
            element: <AddProduct />
         }
      ]
   }
]);

export default router;
