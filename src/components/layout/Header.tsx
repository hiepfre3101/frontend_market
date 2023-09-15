import { Link } from 'react-router-dom';
import { Popover, Col, Row } from 'antd';
import User from '../../assets/icons/User';
import GlassIcon from '../../assets/icons/GlassIcon';
import CartIcon from '../../assets/icons/CartIcon';
import HeartIcon from '../../assets/icons/HeartIcon';
import LeaftIcon from '../../assets/icons/LeaftIcon';

const Header = () => {
   return (
      <div className='px-48'>
         <div className='header-top  flex justify-between items-center'>
            <div className='left'>
               <div className='w-20 flex justify-between items-center pb-3'>
                  <User className='w-7 h-7' />
                  <HeartIcon className='w-7 h-7' />
               </div>
            </div>
            <div className='text-center'>
               <div className='w-56 h-44'>
                  <img src='https://f46-zpg-r.zdn.vn/9171591183498640060/6cc7a48c6564b03ae975.jpg' alt='' />
               </div>

               <div className='text-base pt-2 pb-7 px-2 items-center flex justify-center'>
                  <LeaftIcon className='w-7 h-7 pr-2' />
                  NATURE INSPIRED
                  <LeaftIcon className='w-7 h-7 pl-2' />
               </div>
            </div>
            <div className='w-20 flex justify-between items-center pb-3'>
               <GlassIcon className='w-7 h-7' />
               <CartIcon className='w-7 h-7' />
            </div>
         </div>

         <hr />
         <div className='header-bottom pt-4  items-center text-center'>
            <Row justify='center'>
               <Col span={4} className='text-lg font-medium'>
                  <Link to='/'>Home</Link>
               </Col>
               <Col span={4} className='text-lg font-medium'>
                  <Popover content={<div></div>} title='Title'>
                     <Link to='/'>Menu</Link>
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
