import {
   BellOutlined,
   CaretRightOutlined,
   FilterOutlined,
   HeartOutlined,
   ProfileOutlined,
   SearchOutlined,
   ShopOutlined,
   ShoppingCartOutlined,
   UserOutlined
} from '@ant-design/icons';
import { Checkbox, Space } from 'antd';
import { DecimalStep, IntegerStep } from './component/priceInput';
import { AiOutlineCloseCircle, AiOutlineShopping } from 'react-icons/ai';
const ProductPage = () => {
   const showSub = (name: string, afterName: string) => {
      const cate_title = document.querySelector(afterName);
      cate_title?.classList.toggle('after:!rotate-[225deg]');
      cate_title?.classList.toggle('after:bottom-[-8px]');

      const categories = document.querySelector(name);

      categories?.classList.toggle(`lg:!h-[53px]`);
      categories?.classList.toggle(`max-lg:!h-[47px]`);
   };
   const showFilter = () => {
      const main_header = document.querySelector('.main-header');
      main_header?.classList.toggle('max-lg:!translate-y-[0%]');
      const main_header_overlay = document.querySelector('.main-header-overlay');
      main_header_overlay?.classList.toggle('hidden');
   };
   return (
      <>
         <div className='main max-lg:pb-[70px]'>
            <section className='top-mobile-menu'></section>
            <section className="banner before:content-['*'] before:bg-[rgba(0,0,0,0.5)] before:z-3 before:absolute before:left-0 before:right-0 before:h-full relative max-lg:hidden bg-[url('https://img.freepik.com/premium-photo/fresh-vegetables-fruits-fennel-avocado-pomegranate-berries-cabbage-basil-organic-healthy-vegan-food-black-stone-background_187166-6.jpg?w=2000')] bg-top-center bg-no-repeat bg-cover ">
               <div className=' mx-auto px-[15px] 2xl:w-[1170px]  xl:w-[970px]  md:w-[750px] sm:w-full  '>
                  <div className='banner-content text-center py-[30px] z-10 relative'>
                     <p className='banner-title text-white text-[30px]'>ALL PRODUCTS</p>
                     <div className='sub-title '>
                        <p className='text-white'>
                           <a href='/'>Home</a> <CaretRightOutlined className='align-baseline' />{' '}
                           <a href='/products'>All products</a>
                        </p>
                     </div>
                  </div>
               </div>
            </section>
            <section className='section-main mt-[20px]  '>
               <div className=' flex max-lg:flex-wrap mx-auto px-[15px] xl:w-[1170px]   lg:w-[970px]  md:w-[750px] items-start relative'>
                  <div className='main-header-overlay lg:!hidden fixed hidden z-10 left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.5)]'></div>
                  <div className='main-header max-lg:flex max-lg:flex-col  overflow-y-auto max-lg:bottom-0 max-lg:translate-y-[130%] transition-transform duration-300  mx-[-15px] lg:sticky w-[25%] top-0  max-lg:w-[100%] max-lg:fixed z-10 bg-white  max-md:p-0 '>
                     <div className='main-header-title lg:hidden px-[10px] py-[5px] bg-red-500 flex justify-between items-center'>
                        <div>
                           <FilterOutlined className='text-white' />
                           <span className='font-bold text-white ml-[10px]'>Bộ lọc</span>
                        </div>

                        <AiOutlineCloseCircle
                           onClick={showFilter}
                           className='text-white text-[28px]'
                        ></AiOutlineCloseCircle>
                     </div>
                     
               <div className='overflow-y-auto max-lg:px-[10px] max-lg:pt-[10px] lg:px-[5px]'>
               <div
                        className={`categories lg:h-[${
                           60 * 8
                        }px]   max-lg:h-[${
                           60 * (8/2)
                        }px]  overflow-hidden   transition-all duration-200 ease-linear   pb-[30px] mb-[30px] shadow-[0_0_3px_rgba(0,0,0,0.08)] rounded-[4px]`}
                     >
                        <div
                           className='group'
                           onClick={() => {
                              showSub('.categories', '.cate-title');
                           }}
                        >
                           <h1 className=' cursor-pointer cate-title max-lg:text-[14px]   after:transition-transform after:duration-200  font-bold text-[18px] px-[10px] py-[13px] after:content-[""] relative after:top-[-15px] after:bottom-0 after:right-[13px] after:m-auto after:border-[#666] after:border-t-[0px] after:border-r-[1px] after:border-b-[1px] after:border-l-[0px] after:w-[8px] after:h-[8px] after:absolute after:translate-y-[50%] after:rotate-[45deg]'>
                              Danh mục
                           </h1>
                        </div>

                        <div className='list-categories p-[10px]  border-[#eae4e8] gap-y-[20px] flex max-lg:gap-y-[15px] flex-col max-lg:flex-wrap max-lg:flex-row  '>
                           <a
                              href=''
                              className='max-lg:w-[25%] max-lg:flex max-lg:flex-col max-lg:items-center  hover:text-red-500'
                           >
                              <img
                                 className='w-[48px] h-[48px] cate-img hidden max-lg:block'
                                 src='https://hcm.fstorage.vn/images/2023/06/artboard-16-20230608080047.gif'
                                 alt=''
                              />
                              <span className='max-lg:text-[12px] text-center '> Thịt - Hải sản tươi</span>
                           </a>
                           <a
                              href=''
                              className='max-lg:w-[25%] max-lg:flex max-lg:flex-col max-lg:items-center  hover:text-red-500'
                           >
                              <img
                                 className='w-[48px] h-[48px] cate-img hidden max-lg:block'
                                 src='https://hcm.fstorage.vn/images/2023/06/artboard-10-20230608075857.gif'
                                 alt=''
                              />
                              <span className='max-lg:text-[12px] text-center '> Thịt - Hải sản tươi</span>
                           </a>
                           <a
                              href=''
                              className='max-lg:w-[25%] max-lg:flex max-lg:flex-col max-lg:items-center  hover:text-red-500'
                           >
                              <img
                                 className='w-[48px] h-[48px] cate-img hidden max-lg:block'
                                 src='https://hcm.fstorage.vn/images/2023/06/artboard-16-20230608080047.gif'
                                 alt=''
                              />
                              <span className='max-lg:text-[12px] text-center '> Thịt - Hải sản tươi</span>
                           </a>
                           <a
                              href=''
                              className='max-lg:w-[25%] max-lg:flex max-lg:flex-col max-lg:items-center  hover:text-red-500'
                           >
                              <img
                                 className='w-[48px] h-[48px] cate-img hidden max-lg:block'
                                 src='https://hcm.fstorage.vn/images/2023/06/artboard-10-20230608075857.gif'
                                 alt=''
                              />
                              <span className='max-lg:text-[12px] text-center '> Thịt - Hải sản tươi</span>
                           </a>

                           <a
                              href=''
                              className='max-lg:w-[25%] max-lg:flex max-lg:flex-col max-lg:items-center  hover:text-red-500'
                           >
                              <img
                                 className='w-[48px] h-[48px] cate-img hidden max-lg:block'
                                 src='https://hcm.fstorage.vn/images/2023/06/artboard-16-20230608080047.gif'
                                 alt=''
                              />
                              <span className='max-lg:text-[12px] text-center '> Thịt - Hải sản tươi</span>
                           </a>
                           <a
                              href=''
                              className='max-lg:w-[25%] max-lg:flex max-lg:flex-col max-lg:items-center  hover:text-red-500'
                           >
                              <img
                                 className='w-[48px] h-[48px] cate-img hidden max-lg:block'
                                 src='https://hcm.fstorage.vn/images/2023/06/artboard-10-20230608075857.gif'
                                 alt=''
                              />
                              <span className='max-lg:text-[12px] text-center '> Thịt - Hải sản tươi</span>
                           </a>
                           <a
                              href=''
                              className='max-lg:w-[25%] max-lg:flex max-lg:flex-col max-lg:items-center  hover:text-red-500'
                           >
                              <img
                                 className='w-[48px] h-[48px] cate-img hidden max-lg:block'
                                 src='https://hcm.fstorage.vn/images/2023/06/artboard-16-20230608080047.gif'
                                 alt=''
                              />
                              <span className='max-lg:text-[12px] text-center '> Thịt - Hải sản tươi</span>
                           </a>
                           <a
                              href=''
                              className='max-lg:w-[25%] max-lg:flex max-lg:flex-col max-lg:items-center  hover:text-red-500'
                           >
                              <img
                                 className='w-[48px] h-[48px] cate-img hidden max-lg:block'
                                 src='https://hcm.fstorage.vn/images/2023/06/artboard-16-20230608080047.gif'
                                 alt=''
                              />
                              <span className='max-lg:text-[12px] text-center '> Thịt - Hải sản tươi</span>
                           </a>
                        </div>
                     </div>
                     <div
                        className={`origin h-[${32 * 6}px]   overflow-hidden    transition-all duration-200 ease-linear   pb-[30px] mb-[30px] shadow-[0_0_3px_rgba(0,0,0,0.08)] rounded-[4px]`}
                     >
                        <div className='group' onClick={() => showSub('.origin', '.origin-title')}>
                           <h1 className=' cursor-pointer origin-title  max-lg:text-[14px]   after:transition-transform after:duration-200  font-bold text-[18px] px-[10px] py-[13px] after:content-[""] relative after:top-[-15px] after:bottom-0 after:right-[13px] after:m-auto after:border-[#666] after:border-t-[0px] after:border-r-[1px] after:border-b-[1px] after:border-l-[0px] after:w-[8px] after:h-[8px] after:absolute after:translate-y-[50%] after:rotate-[45deg]'>
                              Xuất xứ
                           </h1>
                        </div>

                        <div className='list-origin p-[10px] border-t-[1px] border-[#eae4e8] gap-y-[20px] flex max-lg:gap-y-[20px] flex-col max-lg:flex-wrap max-lg:flex-row  '>
                           <form action='' className='origin-form flex flex-col gap-y-[10px]'>
                              <Checkbox>Mỹ</Checkbox>
                              <Checkbox>Việt Nam</Checkbox>
                              <Checkbox>Checkbox</Checkbox>
                              <Checkbox>Checkbox</Checkbox>
                              <Checkbox>Checkbox</Checkbox>
                              <Checkbox>Checkbox</Checkbox>
                           </form>
                        </div>
                     </div>
                     <div className={` pb-[30px] mb-[30px] shadow-[0_0_3px_rgba(0,0,0,0.08)] rounded-[4px]`}>
                        <div className='group'>
                           <h1 className=' cursor-pointer origin-title  max-lg:text-[14px]    font-bold text-[18px] px-[10px] py-[13px] after:content-[""] relative after:top-[-15px] '>
                              Lọc theo giá
                           </h1>
                        </div>

                        <div className='list-origin p-[10px] border-t-[1px] border-[#eae4e8] gap-y-[20px] flex max-lg:gap-y-[20px] flex-col max-lg:flex-wrap max-lg:flex-row  '>
                           <Space style={{ width: '100%' }} direction='vertical'>
                              max
                              <IntegerStep />
                              min
                              <DecimalStep />
                           </Space>
                        </div>
                     </div>
               </div>
                     <div className="main-header-bottom flex justify-between lg:hidden bg-white fixed bottom-0 px-[5px] pt-[10px] py-[12px] border-t-[1px] border-[#eae4e8] w-full" >
                           <button className='text-[13px] font-[500] bg-[#f3f4f6] border-[1px] border-[#e5e7eb] text-center py-[10px] px-[15px] cursor-pointer block rounded-[2px] outline-none w-[calc(50%-12px)] bg-[] '>HUỶ</button>
                           <button className='text-[13px] text-white font-[500] bg-[#51A55C]  border-[1px] border-[#e5e7eb] text-center py-[10px] px-[15px] cursor-pointer block rounded-[2px] outline-none w-[calc(50%-12px)] bg-[] '>ÁP DỤNG</button>
                     </div>
                  </div>
                  <div className=' px-[20px] max-md:px-0 main-content max-border-l-2 border-[#cccccc]   w-[75%] max-lg:w-[100%] '>
                     <div className='product-item'>
                        <div className='product-item-title flex justify-between items-center '>
                           <h1 className='cate-name font-bold text-[20px] my-[20px] pl-[10px] '>Sản phẩm</h1>
                           <div className='cursor-pointer  w-[100px] '>
                              <button
                                 onClick={showFilter}
                                 className='lg:hidden border-[1px] py-[3px] px-[12px] gap-[5px]  h-[35px] border-[#eae4e8] flex justify-center items-center cursor-pointer rounded-[30px]'
                              >
                                 <span className='text-[14px] '>Bộ lọc</span>
                                 <FilterOutlined />
                              </button>
                           </div>
                        </div>

                        <div className='list-products grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 max-sm:grid-cols-2  gap-[15px]'>
                       <div className='wrap-product relative overflow-hidden group '>
                              <a href='adfa '>
                                 <div className=' product overflow-hidden   relative    p-[10px] '>
                                    <img
                                       className=''
                                       src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                       alt=''
                                    />
                                    <p className='product-name font-bold text-center'>Xoài</p>
                                    <p className='price  text-center font-bold'>300.000</p>
                                    <button type='button' className='group after:group-hover:scale-x-0 hover:text-white after:group-hover:origin-right after:origin-left after:scale-x-1 after:scale-y-1 after:transition-transform after:duration-500 flex relative items-center justify-center w-full bg-[#51A55C] border-[1px] border-[#51A55C] rounded-[5px] h-[32px] after:[""] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-white after:z-[1] p-[1px] overflow-hidden'><AiOutlineShopping className='text-[18px] text-[#51A55C] z-[2]'></AiOutlineShopping><span className='text-[12px] text-[#51A55C] font-[500] z-[2] '>CHỌN MUA</span></button>

                                 </div>
                              </a>
        
                           </div>
                           
                           
                           
                           

                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                           
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className='mobile-menu max-lg:block hidden '>
               <div className='mobile-menu-content pt-[10px] flex justify-between fixed bottom-0 left-0 right-0 rounded-t-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]  bg-white'>
                  <div className='mobile-menu-item text-[#939596] p-[5px] text-center w-[20%]'>
                     <ShopOutlined style={{ fontSize: '24px' }} />
                     <p className=' text-[12px]'>Trang chủ</p>
                  </div>
                  <div className='mobile-menu-item text-[#939596] p-[5px] text-center w-[20%]'>
                     <div className='test relative w-[24px] h-[24px] m-auto '>
                        <ShoppingCartOutlined style={{ fontSize: '24px' }} />

                        <p className='custom-badge w-[16px] h-[16px] leading-[16px] rounded-[50%] text-[9px]  right-[-6px] top-[-1px] bg-red-500 absolute text-white'>
                           0
                        </p>
                     </div>
                     <p className=' text-[12px] mt-[3px]'>Giỏ hàng</p>
                  </div>
                  <div className='mobile-menu-item text-[#939596] p-[5px] text-center w-[20%]'>
                     <ProfileOutlined style={{ fontSize: '24px' }} />

                     <p className=' text-[12px]'>Danh mục</p>
                  </div>

                  <div className='mobile-menu-item text-[#939596] p-[5px] text-center w-[20%]'>
                     <BellOutlined style={{ fontSize: '24px' }} />

                     <p className=' text-[12px]'>Thông báo</p>
                  </div>
                  <div className='mobile-menu-item text-[#939596] p-[5px] text-center w-[20%]'>
                     <UserOutlined style={{ fontSize: '24px' }} />
                     <p className=' text-[12px]'>Tài khoản</p>
                  </div>
               </div>
            </section>
         </div>
      </>
   );
};
export default ProductPage;
