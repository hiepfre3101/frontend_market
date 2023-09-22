import React, { useState } from 'react';
import { PieChartOutlined, NotificationOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router';
import ProductIcon from '../components/Icons/ProductIcon';
import { Link } from 'react-router-dom';
import TicketIcon from '../components/Icons/TicketIcon';
import OrderIcon from '../components/Icons/OrderIcon';

import { useGetTokenQuery } from '../services/auth.service';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { saveTokenAndUser } from '../slices/authSlice';
import {  useSelector } from 'react-redux';
import { IAuth } from '../slices/authSlice';

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
   return {
      key,
      icon,
      children,
      label
   } as MenuItem;
}

const items: MenuItem[] = [
   
   getItem('Tài khoản của tôi', '2', <ProductIcon />, [
      getItem(<Link to='/account/profile'>Hồ sơ</Link>, '3'),
      getItem(<Link to='/account/address'>Địa chỉ</Link>, '4'),
      getItem(<Link to='/account/password'>Mật khẩu</Link>, '5')
   ]),
   getItem(<Link to='/account/purchase'>Đơn hàng</Link>, 'sub1', <OrderIcon />),
   getItem(<Link to='/account/profile'>Mã khuyễn mãi</Link>, 'sub2', <TicketIcon />),
   getItem(<Link to='/account/profile'>Thông báo người dùng</Link>, 'sub3', <NotificationOutlined />)
];

const ProfileLayout = () => {
    const auth = useSelector((state: { userReducer: IAuth }) => state.userReducer);
 
    const { data } = useGetTokenQuery();
    const dispatch = useDispatch();
    useEffect(() => {
       if (data?.body?.data && data?.body?.accessToken) {
          dispatch(saveTokenAndUser({ accessToken: data?.body?.accessToken, user: data?.body?.data }));
       }
    }, [data]);
   const [collapsed, setCollapsed] = useState(false);
   const ButtonTrigger = (
      <button className='bg-greenPrimary text-white w-full font-semibold'>{collapsed ? 'Hiện' : 'Ẩn'}</button>
   );
   const {
      token: { colorBgContainer }
   } = theme.useToken();

   return (
      <Layout style={{ minHeight: '100vh' }}>
         <Sider
            width={250}
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            style={{ background: colorBgContainer }}
            trigger={ButtonTrigger}
         >
            <div className='max-h-[150px] flex justify-center items-center mt-10'>
            <img src={auth?.user?.avatar} className='w-50  aspect-square m-0 rounded-full cursor-pointer' />
            </div>
            <Menu theme='light' defaultSelectedKeys={['1']} mode='inline' items={items} />
         </Sider>
         <Layout>
            
            <Content style={{ margin: '0 16px' }}>
               <Breadcrumb style={{ margin: '16px 0' }}>
                  
               </Breadcrumb>
               <Outlet />
            </Content>
            
         </Layout>
      </Layout>
   );
};


export default ProfileLayout