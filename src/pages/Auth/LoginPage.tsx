import { Button, Form, Input, message } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../services/auth.service';
import { saveTokenAndUser } from '../../slices/authSlice';
import { GoogleOutlined } from '@ant-design/icons';

export interface AuthLoginInput {
    email: string;
    password: string;
}

const LoginPage = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [login, { data, isLoading, error }] = useLoginMutation();

   useEffect(() => {
      console.log(error);
      if (error?.data?.message) {
         message.error(error?.data?.message);
      }
   }, [error]);

   useEffect(() => {
      if (data?.message?.match('Form error:')) {
         return alert(data.message);
      }
      if (!isLoading && data) {
         dispatch(saveTokenAndUser({ token: data.accessToken, user: data.data }));
         if (data.data?.role == 'admin') return navigate('/admin');
         navigate('/');
      }
   }, [data, isLoading]);

   const onFinish = (values: AuthLoginInput) => {
      try {
         login(values);
         return;
      } catch (error) {
         alert('Login failed');
      }
   };
   return (
      <div className='m-auto w-[300px] max-w-[97%]'>
         <h3 style={{ textAlign: 'center', marginTop: '30px' }}>Login</h3>
         <div id='formLogin' className='m-auto'>
            <Form layout='vertical' initialValues={{ remember: true }} onFinish={onFinish}>
               <Form.Item
                  label='Email'
                  name='email'
                  rules={[
                     { required: true, message: 'Please input your email!' },
                     { type: 'email', message: 'Please enter a valid email address!' }
                  ]}
                  hasFeedback
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  label='Password'
                  name='password'
                  rules={[
                     { required: true, message: 'Please input your password!' },
                     { min: 6, message: 'The password must be at least 6 characters long!' }
                  ]}
                  hasFeedback
               >
                  <Input.Password />
               </Form.Item>
               <Form.Item style={{ textAlign: 'center' }}>
                  <Button type='primary' htmlType='submit'>
                     Login
                  </Button>
                  <p style={{ textAlign: 'center' }}>Or</p>
                  <Link to={'http://localhost:8000/api/auth/google/login'}>
                     <Button htmlType='button' type='primary' icon={<GoogleOutlined />}>
                        Login with Google
                     </Button>
                  </Link>
               </Form.Item>
               <Form.Item style={{ textAlign: 'center' }}>
                  <p>
                     Do not have an account?<Link className='text-blue-400' to='/signup'> Register here</Link>
                  </p>
               </Form.Item>
            </Form>
         </div>
      </div>
   );
};

export default LoginPage;
