import { Link } from 'react-router-dom';
import { Popover } from 'antd';
import { CiUser } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { IAuth, deleteTokenAndUser } from '../../../../slices/authSlice';
import { useClearTokenMutation } from '../../../../services/auth.service';

const CheckToken = () => {
   const auth = useSelector((state: { userReducer: IAuth }) => state.userReducer);
   console.log(auth);
   const [clearToken] = useClearTokenMutation();
   const dispatch = useDispatch();
   const onHandleLogout = () => {
      dispatch(deleteTokenAndUser());
      clearToken();
   };
   
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
                        <Link to={'/account/profile'}>Tài Khoản</Link>
                        <br />
                        <button onClick={() => onHandleLogout()}>Đăng xuất</button>
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
