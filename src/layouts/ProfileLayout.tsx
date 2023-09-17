import Header from '../components/layout/Header';
import { Link, Outlet } from 'react-router-dom';
const ProfileLayout = () => {
    return (
        <>



            <aside id="separator-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>

                            <Link to='/account/profile'><span className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Dashboard</span></Link>


                        </li>
                        <li>
                            <Link to='/account/profile'><span className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Hồ sơ</span></Link>
                        </li>
                        <li>
                            <Link to='/account/address'><span className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Địa chỉ</span></Link>
                        </li>
                        <li>
                            <Link to='/account/password'><span className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Mật khẩu</span></Link>
                        </li>
                        <li>
                            <Link to='/account/purchase'><span className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Đơn mua</span></Link>
                        </li>
                        <li>
                            <Link to='/account/profile'><span className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">Kho vouchers</span></Link>
                        </li>

                    </ul>

                </div>
            </aside>

            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default ProfileLayout