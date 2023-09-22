import { Link } from 'react-router-dom';
import { Popover, Col, Row, Divider } from 'antd';
import { CiHeart, CiSearch, CiShoppingBasket } from 'react-icons/ci';
import LeaftIcon from '../../assets/icons/LeaftIcon';
import { useGetAllCateQuery } from '../../services/cate.service';
import SearchFilter from '../../pages/UserPages/homepage/component/SearchFilter';
import CheckToken from '../../pages/UserPages/homepage/component/CheckToken';
const Header = () => {
   const { data, isLoading } = useGetAllCateQuery();

   return (
      <div className='px-48'>
         <div className='header-top  flex justify-between items-center'>
            <div className='left'>
               <div className=' flex justify-between items-center  pb-3'>
                  <CheckToken />
                  <CiHeart className='w-7 h-7 ml-5' />
               </div>
            </div>
            <div className='text-center'>
               <div className='w-56 h-36'>
                  <img src='https://f46-zpg-r.zdn.vn/9171591183498640060/6cc7a48c6564b03ae975.jpg' alt='' />
               </div>

               <div className='text-base pt-2 pb-7 px-2 items-center flex justify-center'>
                  <LeaftIcon className='w-7 h-7 pr-2' />
                  NATURE INSPIRED
                  <LeaftIcon className='w-7 h-7 pl-2' />
               </div>
            </div>
            <div className='w-20 flex justify-between items-center pb-3'>
               <SearchFilter>
                  <CiSearch className='w-7 h-7' />
               </SearchFilter>
               <CiShoppingBasket className='w-7 h-7' />
            </div>
         </div>

         <hr />
         <div className='header-bottom pt-4 pb-10  items-center text-center'>
            <Row justify='center'>
               <Col span={4} className='text-lg font-medium'>
                  <Link to='/'>Trang chủ</Link>
               </Col>
               <Col span={4} className='text-lg font-medium'>
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
                     <Link to='/products'>Menu</Link>
                  </Popover>
               </Col>
               <Col span={4} className='text-lg font-medium'>
                  <Link to='/about'>Giới thiệu</Link>
               </Col>
               <Col span={4} className='text-lg font-medium'>
                  <Link to='/contact'>Liên hệ</Link>
               </Col>
            </Row>
         </div>
      </div>
   );
};

export default Header;
