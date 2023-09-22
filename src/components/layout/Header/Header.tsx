import { useGetAllCateQuery } from '../../../services/cate.service';

import { Link } from 'react-router-dom';
import { Popover, Col, Row, Divider } from 'antd';
import { CiHeart, CiSearch, CiShoppingBasket } from 'react-icons/ci';
import LeaftIcon from '../../../assets/icons/LeaftIcon';
import SearchFilter from '../../../pages/UserPages/homepage/component/SearchFilter';
import CheckToken from '../../../pages/UserPages/homepage/component/CheckToken';

import { useEffect, useState } from 'react';
import { Button } from 'antd';
import { FaBars } from 'react-icons/fa';
import MenuSideBar from './components/MenuSideBar';
const Header = () => {
   const { data, isLoading } = useGetAllCateQuery();
   const [open, setOpen] = useState(false);

   const showDrawer = () => {
      setOpen(true);
   };

   const onClose = () => {
      setOpen(false);
   };
   useEffect(() => {
      setOpen(false);
   }, [window.location.pathname]);
   return (
      <div className='lg:px-40 md:px-32 px-20'>
         <div className='header-top  flex justify-between items-center'>
            <div className='hidden opacity-0 invisible md:block md:opacity-100 md:visible'>
               <div className=' flex justify-between items-center  pb-3'>
                  <span className='hidden opacity-0 invisible md:block md:opacity-100 md:visible'>
                     <CheckToken />
                  </span>
                  <CiHeart className='w-7 h-7 ml-5 hidden opacity-0 invisible md:block md:opacity-100 md:visible' />
               </div>
            </div>
            <div className='text-center'>
               <div className='md:w-48 md:h-36 w-24 h-fit py-2'>
                  <img src='https://f11-zpc.zdn.vn/7828205011300196740/5f46e3c00359d6078f48.jpg' alt='' />
               </div>

               <div className='hidden opacity-0 invisible md:flex md:opacity-100 md:visible text-base pt-3 pb-7 px-2 items-center flex justify-center'>
                  <LeaftIcon className='w-7 h-7 pr-2' />
                  NATURE INSPIRED
                  <LeaftIcon className='w-7 h-7 pl-2' />
               </div>
            </div>
            <div className='w-20 flex justify-between items-center pb-3'>
               <SearchFilter>
                  <CiSearch className='w-7 h-7' />
               </SearchFilter>
               <CiShoppingBasket className='w-7 h-7 hidden opacity-0 invisible md:block md:opacity-100 md:visible' />
               <Button className='md:hidden' type='primary' onClick={showDrawer}>
                  <FaBars />
               </Button>
            </div>
         </div>
         <hr />
         <Row
            justify='center'
            className='py-5 text-center items-center md:gap-10 hidden opacity-0 invisible md:flex md:opacity-100 md:visible'
         >
            <Col span={4} className='lg:text-lg md:text-base font-medium'>
               <Link to='/'>Trang chủ</Link>
            </Col>
            <Col span={4} className='lg:text-lg md:text-base font-medium'>
               <Popover
                  placement='bottom'
                  content={
                     <div>
                        {isLoading
                           ? '...loading'
                           : data?.body?.map((item, index) => (
                                <div key={index} className=''>
                                   <Divider orientation='left' orientationMargin={0}>
                                      <h1>{item.cateName}</h1>
                                   </Divider>
                                   {item.subCategories.map((sub: any, index) => (
                                      <div key={index}>
                                         <Link to={'/products?category=' + sub._id}>{sub.subCateName}</Link>
                                         <br />
                                      </div>
                                   ))}
                                </div>
                             ))}
                     </div>
                  }
               >
                  <Link className='lg:text-lg md:text-base' to='/products'>
                     Danh mục
                  </Link>
               </Popover>
            </Col>
            <Col span={4} className='lg:text-lg md:text-base font-medium'>
               <Link to='/'>Giới thiệu</Link>
            </Col>
            <Col span={4} className='lg:text-lg md:text-base font-medium'>
               <Link to='/'>Liên hệ</Link>
            </Col>
         </Row>
         <MenuSideBar open={open} data={data} isLoading={isLoading} onClose={onClose} />
      </div>
   );
};

export default Header;
