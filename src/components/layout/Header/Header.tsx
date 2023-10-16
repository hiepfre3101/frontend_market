import { SearchOutlined } from '@ant-design/icons';
import { AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import { FaChevronDown, FaXmark } from 'react-icons/fa6';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

const Header = () => {
   function scrollFunction() {
      const btn_totop = document.querySelector('.section-icon-to-top');
      if (document.documentElement.scrollTop > 400) {
         btn_totop?.classList.add('!visible');
         btn_totop?.classList.add('!opacity-100');
      } else {
         btn_totop?.classList.remove('!visible');
         btn_totop?.classList.remove('!opacity-100');
      }
   }
   window.onscroll = function () {
      scrollFunction();
   };

   const showMiniCart = () => {
      const mini_cart_overlay = document.querySelector('.mini-cart-overlay');
      mini_cart_overlay?.classList.toggle('hidden');
      const wrap_mini_cart = document.querySelector('.wrap-mini-cart');
      wrap_mini_cart?.classList.toggle('!translate-x-[0%]');
   };
   const showMenuReponsive = () => {
      const bodyElement = document.querySelector('body');
      bodyElement?.classList.toggle('overflow-hidden');
      const overlay_menu_homepage = document.querySelector('.overlay-menu-homepage');
      overlay_menu_homepage?.classList.toggle('!opacity-[0.15]');
      overlay_menu_homepage?.classList.toggle('!visible');

      const header_menu = document.querySelector('.header-menu');
      header_menu?.classList.toggle('max-xl:translate-x-[0%]');
   };
   const showCategoriesMenu = () => {
      const cate_menu = document.querySelector('.cate-menu');
      cate_menu?.classList.toggle('max-xl:max-h-[41px]');
   };
   const showModalSearch = () => {
      const bodyElement = document.querySelector('body');
      bodyElement?.classList.toggle('overflow-hidden');
      const section_search_modal = document.querySelector('.section-search-modal');
      const section_overlay_search = document.querySelector('.section-overlay-search');
      setTimeout(() => {
         section_overlay_search?.classList.toggle('hidden');
      }, 300);
      setTimeout(() => {
         section_search_modal?.classList.toggle('hidden');
      }, 500);
      setTimeout(() => {
         section_search_modal?.classList.toggle('translate-y-[0%]');
      }, 600);
   };

   return (
      <header className='header  fixed top-0 right-0 left-0 z-[5] transition-all duration-500 border-b-[1px] bg-white border-[#e2e2e2]  shadow-[0px_0px_10px_rgba(51,51,51,0.15)]'>
         <section className='mx-auto px-[30px] w-full relative max-w-[1520px] m-auto'>
            <div className='header-content flex items-center max-xl:justify-between max-xl:py-[15px] '>
               <div className='header-logo xl:w-[15%] max-xl:[w-auto]'>
                  <a href='/'>
                     <img
                        className='logo-img max-w-[120px]'
                        src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/logo/logo.png'
                        alt=''
                     />
                  </a>
               </div>
               <div
                  onClick={showMenuReponsive}
                  className='overlay-menu-homepage xl:hidden fixed w-[110%] top-0 bottom-0 left-0 right-0 z-[7] opacity-0 bg-[#333333]   invisible'
               ></div>
               <div className='header-menu xl:w-[60%] max-xl:fixed  max-xl:transition-all max-xl:duration-500 max-xl:translate-x-[-100%]  max-xl:bottom-0 top-0 left-0 w-[320px] max-xl:z-[8] max-xl:bg-white'>
                  <ul className='main-menu flex max-xl:flex  max-xl:flex-col'>
                     <li className='cursor-pointer main-menu-item text-[20px] flex justify-end xl:hidden  xl:py-[40px] xl:px-[15px] font-extrabold group  max-xl:text-[#6f6f6f] max-xl:text-[14px] max-xl:py-[10px] max-xl:px-[10px] max-xl:border-t-[1px]  max-xl:border-[#e2e2e2]'>
                        <span onClick={showMenuReponsive} className='cursor-pointer'>
                           <FaXmark className='text-[20px]'></FaXmark>
                        </span>
                     </li>
                     <li className=' cursor-pointer main-menu-item group/menu-item text-[17px] xl:py-[40px] xl:px-[15px] font-bold group  max-xl:text-[#6f6f6f] max-xl:text-[14px] max-xl:py-[10px] max-xl:px-[15px] max-xl:border-t-[1px]  max-xl:border-[#e2e2e2] relative'>
                        <a
                           href=''
                           className='group-hover:text-[#51A55C] after:content-[""] after:w-[0] after:h-[2px] after:bg-[#51A55C] after:max-xl:hidden after:transition-all after:duration-300 group-hover/menu-item:after:w-[calc(100%-30px)] after:block after:absolute after:bottom-0 after:left-[15px] '
                        >
                           Trang chủ
                        </a>
                     </li>
                     <li className='cursor-pointer  main-menu-item text-[17px] xl:py-[40px] xl:px-[15px] font-bold group max-xl:text-[#6f6f6f] max-xl:text-[14px] max-xl:py-[10px] max-xl:px-[15px] max-xl:border-t-[1px]  max-xl:border-[#e2e2e2] relative group/menu-item'>
                        <a
                           href=''
                           className='group-hover:text-[#51A55C] after:content-[""] after:w-[0] after:h-[2px] after:bg-[#51A55C] after:max-xl:hidden after:transition-all after:duration-300 group-hover/menu-item:after:w-[calc(100%-30px)] after:block after:absolute after:bottom-0 after:left-[15px]'
                        >
                           Giới thiệu
                        </a>
                     </li>
                     <li className='cursor-pointer  main-menu-item   group/categories-menu cate-menu max-xl:overflow-hidden max-xl:max-h-[41px] text-[17px] xl:py-[40px] xl:px-[15px] font-bold group  max-xl:text-[#6f6f6f] max-xl:text-[14px] max-xl:py-[10px] max-xl:px-[15px] max-xl:border-t-[1px]  max-xl:border-[#e2e2e2] relative group/menu-item'>
                        <div onClick={showCategoriesMenu} className='w-full h-full xl:hidden absolute'></div>
                        <div className='flex items-center group-hover:text-[#51A55C] max-xl:justify-between'>
                           <span className='after:content-[""] xl:hidden after:w-[0] after:h-[2px] after:bg-[#51A55C] after:max-xl:hidden after:transition-all after:duration-300 group-hover/menu-item:after:w-[calc(100%-30px)] after:block after:absolute after:bottom-0 after:left-[15px]'>
                              Danh mục
                           </span>
                           <a href='/products' className='after:content-[""] max-xl:hidden after:w-[0] after:h-[2px] after:bg-[#51A55C] after:max-xl:hidden after:transition-all after:duration-300 group-hover/menu-item:after:w-[calc(100%-30px)] after:block after:absolute after:bottom-0 after:left-[15px]'>
                              Danh mục
                           </a>
                           <span className='text-[11px] ml-[5px]'>
                              <FaChevronDown></FaChevronDown>
                           </span>
                        </div>
                        <ul className='sub-menu xl:min-w-[175px] xl:absolute  xl:top-[100%]  xl:shadow-[0px_0px_10px_rgba(51,51,51,0.15)] xl:invisible bg-white xl:translate-y-[20%] xl:transition-all xl:duration-500 xl:opacity-0 xl:group-hover/categories-menu:translate-y-[0%] xl:z-[-1] xl:group-hover/categories-menu:z-[3] xl:group-hover/categories-menu:visible xl:group-hover/categories-menu:opacity-100 max-xl:w-full max-xl:mt-[9px]  '>
                           <li className='group/sub-menu sub-menu-item py-[10px] px-[15px]  cursor-pointer'>
                              <a href='#' className='group-hover/sub-menu:text-[#51A55C] text-[#6f6f6f] font-medium '>
                                 Táo
                              </a>
                           </li>
                           <li className='group/sub-menu sub-menu-item py-[10px] px-[15px] cursor-pointer'>
                              <a href='#' className='group-hover/sub-menu:text-[#51A55C] text-[#6f6f6f] font-medium'>
                                 Xoài
                              </a>
                           </li>
                           <li className='group/sub-menu sub-menu-item py-[10px] px-[15px] cursor-pointer'>
                              <a href='#' className='group-hover/sub-menu:text-[#51A55C] text-[#6f6f6f] font-medium'>
                                 Táo
                              </a>
                           </li>
                           <li className='group/sub-menu sub-menu-item py-[10px] px-[15px] cursor-pointer'>
                              <a href='#' className='group-hover/sub-menu:text-[#51A55C] text-[#6f6f6f] font-medium'>
                                 Táo
                              </a>
                           </li>
                           <li className='group/sub-menu sub-menu-item py-[10px] px-[15px] cursor-pointer'>
                              <a href='#' className='group-hover/sub-menu:text-[#51A55C] text-[#6f6f6f] font-medium'>
                                 Táo
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li className='cursor-pointer  main-menu-item text-[17px] xl:py-[40px] xl:px-[15px] font-bold group max-xl:text-[#6f6f6f] max-xl:text-[14px] max-xl:py-[10px] max-xl:px-[15px] max-xl:border-t-[1px]  max-xl:border-[#e2e2e2] relative group/menu-item'>
                        <a
                           href=''
                           className='group-hover:text-[#51A55C] after:content-[""] after:w-[0] after:h-[2px] after:bg-[#51A55C] after:max-xl:hidden after:transition-all after:duration-300 group-hover/menu-item:after:w-[calc(100%-30px)] after:block after:absolute after:bottom-0 after:left-[15px]'
                        >
                           Liên hệ
                        </a>
                     </li>
                  </ul>
               </div>
               <div className='header-icon xl:w-[25%]'>
                  <ul className='list-header-icon flex justify-end items-center'>
                     <li
                        onClick={showMenuReponsive}
                        className='header-icon-item header-search-icon text-[20px] ml-[30px] hidden max-xl:block transition-colors duration-300 cursor-pointer hover:text-[#d2401e]'
                     >
                        <AiOutlineMenu></AiOutlineMenu>
                     </li>
                     <li
                        onClick={showModalSearch}
                        className='max-sm:hidden header-icon-item header-search-icon text-[20px] ml-[30px] transition-colors duration-300 cursor-pointer hover:text-[#d2401e]'
                     >
                        <SearchOutlined></SearchOutlined>
                     </li>
                     <li className='max-sm:hidden header-icon-item header-search-icon text-[20px] ml-[30px] transition-colors duration-300 cursor-pointer hover:text-[#d2401e]'>
                        <AiOutlineUser></AiOutlineUser>
                     </li>
                     <li
                        onClick={showMiniCart}
                        className='max-sm:hidden header-icon-item header-search-icon text-[20px] ml-[30px] relative transition-colors duration-300 cursor-pointer hover:text-[#d2401e]   '
                     >
                        <span>
                           <HiOutlineShoppingBag></HiOutlineShoppingBag>
                        </span>{' '}
                        <span className='absolute top-[-10px] right-[-10px] w-[20px] h-[20px] text-center leading-5 rounded-[50%] bg-[#d2401e] text-[14px] text-[white]'>
                           2
                        </span>
                     </li>
                  </ul>
               </div>
            </div>
         </section>
      </header>
   );
};

export default Header;
