import { Link } from 'react-router-dom';
import { Popover, Col, Row, Divider, Drawer } from 'antd';
import { CiHeart, CiShoppingBasket } from 'react-icons/ci';
import CheckToken from '../../../../pages/UserPages/homepage/component/CheckToken';
import { ICategories } from '../../../../interfaces/fakeCategories';
export interface IProps {
   data: { body: ICategories[] } | undefined;
   isLoading: boolean;
   open: boolean;
   onClose: () => void;
}
const MenuSideBar = ({ data, isLoading, open, onClose }: IProps) => {
   return (
      <Drawer title='Basic Drawer' placement='right' onClose={() => onClose()} open={open}>
         <div className='pt-4 pb-10  items-center text-center'>
            <div className=' flex gap-10 items-center pb-3'>
               <CheckToken />
               <CiShoppingBasket className='w-8 h-8 ' />
               <CiHeart className='w-8 h-8 ' />
            </div>
            <hr />
            <Row justify='center'>
               <Col span={24} className='text-lg font-medium py-5'>
                  <Link to='/'>Trang chủ</Link>
               </Col>
               <Col span={24} className='text-lg font-medium '>
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
                     <Link to='/products'>Danh mục</Link>
                  </Popover>
               </Col>
               <Col span={24} className='text-lg font-medium py-5'>
                  <Link to='/'>Giới thiệu</Link>
               </Col>
               <Col span={24} className='text-lg font-medium'>
                  <Link to='/'>Liên hệ</Link>
               </Col>
            </Row>
         </div>
      </Drawer>
   );
};

export default MenuSideBar;
