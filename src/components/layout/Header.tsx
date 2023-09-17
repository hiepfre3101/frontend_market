import { Link } from 'react-router-dom';
import { Popover, Col, Row, Divider } from 'antd';
import { CiUser, CiHeart, CiSearch, CiShoppingBasket } from 'react-icons/ci';
import LeaftIcon from '../../assets/icons/LeaftIcon';
import { useGetAllCateQuery } from '../../services/cate.service';
import SearchFilter from '../../pages/UserPages/homepage/component/SearchFilter';
const Header = () => {
   const { data, isLoading } = useGetAllCateQuery();

   return (
      <div className='px-48'>
         <div className='header-top  flex justify-between items-center'>
            <div className='left'>
               <div className='w-20 flex justify-between items-center pb-3'>
                  <Popover
                     placement='bottom'
                     content={
                        <>
                           <Link to={'/signup'}>SignUp</Link>
                           <br />
                           <Link to={'/login'}>Login</Link>
                        </>
                     }
                     trigger='click'
                  >
                     <span>
                        <CiUser className='w-7 h-7' />
                     </span>
                  </Popover>
                  <CiHeart className='w-7 h-7' />
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
                  <Link to='/'>Home</Link>
               </Col>
               <Col span={4} className='text-lg font-medium'>
                  <Popover
                     placement='bottom'
                     content={
                        <div>
                           {isLoading
                              ? '...loading'
                              : data?.body?.map((item) => (
                                   <div className=''>
                                      <Divider orientation='left' orientationMargin={0}>
                                         <h1>{item.cateName}</h1>
                                      </Divider>
                                      {item.subCategories.map((sub: any) => (
                                         <>
                                            <Link to={'/products?category=' + sub._id}>{sub.subCateName}</Link>
                                            <br />
                                         </>
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
                  <Link to='/'>About</Link>
               </Col>
               <Col span={4} className='text-lg font-medium'>
                  <Link to='/'>Contact</Link>
               </Col>
            </Row>
         </div>
      </div>
   );
};

export default Header;
