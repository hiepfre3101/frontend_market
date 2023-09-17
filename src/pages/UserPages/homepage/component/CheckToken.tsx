import { Link } from 'react-router-dom';
import { Popover } from 'antd';
import { CiUser } from 'react-icons/ci';
import { useSelector } from 'react-redux';
import { IAuth } from '../../../../slices/authSlice';

const CheckToken = () => {
   const auth = useSelector((state: { userReducer: IAuth }) => state.userReducer);
   return (
      <div>
         {!auth?.accessToken ? (
            <Popover
               placement='bottom'
               content={
                  <>
                     <Link to={'/signup'}>Đăng ký</Link>
                     <br />
                     <Link to={'/login'}>Đăng nhập</Link>
                  </>
               }
               trigger='click'
            >
               <span>
                  <CiUser className='w-7 h-7' />
               </span>
            </Popover>
         ) : (
            <>
               <div className='w-[5%] h-full'></div>
               <Popover
                  placement='bottom'
                  content={
                     <>
                        <Link to={'/signup'}>Tài Khoản</Link>
                        <br />
                        <Link to={'/login'}>Đăng xuất</Link>
                     </>
                  }
                  trigger='click'
               >
                  <img src={auth?.user?.avatar} className='w-7  aspect-square m-0 rounded-full cursor-pointer' />
               </Popover>
            </>
         )}
      </div>
   );
};

export default CheckToken;
