import {
   BellOutlined,
   CaretRightOutlined,
   HeartOutlined,
   ProfileOutlined,
   SearchOutlined,
   ShopOutlined,
   ShoppingCartOutlined,
   StarOutlined,
   UserOutlined
} from '@ant-design/icons';
const ProductPage = () => {
   return (
      <>
         <div className='main max-lg:pb-[70px]'>
            <section className='top-mobile-menu'>

            </section>
            <section className="banner max-lg:hidden bg-[url('https://img.freepik.com/premium-photo/fresh-vegetables-fruits-fennel-avocado-pomegranate-berries-cabbage-basil-organic-healthy-vegan-food-black-stone-background_187166-6.jpg?w=2000')] bg-top-center bg-no-repeat bg-cover ">
               <div className=' mx-auto px-[15px] 2xl:w-[1170px]  xl:w-[970px]  md:w-[750px] sm:w-full  '>
                  <div className='banner-content text-center py-[30px] '>
                     <p className='banner-title text-white text-[30px]'>ALL PRODUCTS</p>
                     <div className='sub-title '>
                        <p className='text-white'>
                           <a href="/">Home</a> <CaretRightOutlined className='align-baseline' /> <a href="/products">All products</a>
                        </p>
                     </div>
                  </div>
               </div>
            </section>
            <section className='section-main mt-[20px] '>
               <div className=' flex max-lg:flex-wrap mx-auto px-[15px] xl:w-[1170px]  lg:w-[970px]  md:w-[750px] '>
                  <div className='main-header w-[25%]  max-lg:w-[100%]  max-md:p-0'>
                     <div className='categories border-b-2 border-[#cccccc] pb-[30px] mb-[30px]'>
                        <h1 className='font-bold text-[20px] '>Danh mục</h1>
                        <hr className='w-[30%] bg-red-500  h-[3px] mt-[5px] mb-[10px]' />
                        <div className='list-categories flex max-lg:gap-y-[20px] flex-col max-lg:flex-wrap max-lg:flex-row  '>
                           <a
                              href=''
                              className="max-lg:w-[25%] max-lg:flex max-lg:flex-col max-lg:items-center before:content-['\2022'] hover:text-red-500 before:p-[3px] before:text-[22px] before:max-lg:hidden before:text-red-500"
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
                              className="max-lg:w-[25%] max-lg:flex max-lg:flex-col max-lg:items-center before:content-['\2022'] hover:text-red-500 before:p-[3px] before:text-[22px] before:max-lg:hidden before:text-red-500"
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
                              className="max-lg:w-[25%] max-lg:flex max-lg:flex-col max-lg:items-center before:content-['\2022'] hover:text-red-500 before:p-[3px] before:text-[22px] before:max-lg:hidden before:text-red-500"
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
                              className="max-lg:w-[25%] max-lg:flex max-lg:flex-col max-lg:items-center before:content-['\2022'] hover:text-red-500 before:p-[3px] before:text-[22px] before:max-lg:hidden before:text-red-500"
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
                              className="max-lg:w-[25%] max-lg:flex max-lg:flex-col max-lg:items-center before:content-['\2022'] hover:text-red-500 before:p-[3px] before:text-[22px] before:max-lg:hidden before:text-red-500"
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
                     <div className='top-rated-products '>
                        <h1 className='font-bold text-[20px] '>Top sản phẩm mua nhiều nhất</h1>
                        <hr className='w-[30%] bg-red-500  h-[3px] mt-[5px] mb-[30px] ' />
                        <div className='list-product-top max-lg:pb-[30px] max-lg:gap-y-[20px]   max-lg:mb-[30px] max-m:pb-[20px] max-md:border-b-2 border-[#cccccc] flex flex-col max-lg:justify-evenly max-lg:flex-row max-lg:flex-wrap'>
                           <div className='product-top   flex gap-[10px] max-lg:flex-wrap max-lg:w-[40%] items-center p-[10px]  lg:hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer rounded-md'>
                              <div className='w-[35%] max-md:w-[100%] '>
                                 <img
                                    className='product-top-img '
                                    src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                    alt=''
                                 />
                              </div>
                              <div className='product-top-detail w-[65%] max-md:w-[100%] '>
                                 <p className='product-top-name font-bold'>Xoài</p>
                                 <span className='text-red-500'>$300</span>
                                 <div className='star flex text-red-500'>
                                    <StarOutlined /> <StarOutlined /> <StarOutlined /> <StarOutlined /> <StarOutlined />
                                 </div>
                              </div>
                           </div>
                           <div className='product-top   flex gap-[10px] max-lg:flex-wrap max-lg:w-[40%] items-center p-[10px]  lg:hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer rounded-md'>
                              <div className='w-[35%] max-md:w-[100%] '>
                                 <img
                                    className='product-top-img '
                                    src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                    alt=''
                                 />
                              </div>
                              <div className='product-top-detail w-[65%] max-md:w-[100%] '>
                                 <p className='product-top-name font-bold'>Xoài</p>
                                 <span className='text-red-500'>$300</span>
                                 <div className='star flex text-red-500'>
                                    <StarOutlined /> <StarOutlined /> <StarOutlined /> <StarOutlined /> <StarOutlined />
                                 </div>
                              </div>
                           </div>
                           <div className='product-top   flex gap-[10px] max-lg:flex-wrap max-lg:w-[40%] items-center p-[10px]  lg:hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer rounded-md'>
                              <div className='w-[35%] max-md:w-[100%] '>
                                 <img
                                    className='product-top-img '
                                    src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                    alt=''
                                 />
                              </div>
                              <div className='product-top-detail w-[65%] max-md:w-[100%] '>
                                 <p className='product-top-name font-bold'>Xoài</p>
                                 <span className='text-red-500'>$300</span>
                                 <div className='star flex text-red-500'>
                                    <StarOutlined /> <StarOutlined /> <StarOutlined /> <StarOutlined /> <StarOutlined />
                                 </div>
                              </div>
                           </div>
                           <div className='product-top   flex gap-[10px] max-lg:flex-wrap max-lg:w-[40%] items-center p-[10px]  lg:hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] max-lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer rounded-md'>
                              <div className='w-[35%] max-md:w-[100%] '>
                                 <img
                                    className='product-top-img '
                                    src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                    alt=''
                                 />
                              </div>
                              <div className='product-top-detail w-[65%] max-md:w-[100%] '>
                                 <p className='product-top-name font-bold'>Xoài</p>
                                 <span className='text-red-500'>$300</span>
                                 <div className='star flex text-red-500'>
                                    <StarOutlined /> <StarOutlined /> <StarOutlined /> <StarOutlined /> <StarOutlined />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className=' px-[20px] max-md:px-0 main-content max-border-l-2 border-[#cccccc]   w-[75%] max-lg:w-[100%] '>
                     <div className='product-item'>
                        <h1 className='cate-name font-bold text-[20px] my-[20px] pl-[10px] '>THỊT</h1>
                        <div className='list-products grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 max-sm:grid-cols-2  gap-[15px]'>
                           <div className='wrap-product relative overflow-hidden group max-md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md '>
                              <a href='adfa '>
                                 <div className=' product overflow-hidden   relative    p-[10px] '>
                                    <img
                                       className=''
                                       src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                       alt=''
                                    />
                                    <p className='product-name font-bold'>Xoài</p>
                                    <span className='price text-red-500 font-bold'>30.000</span>
                                 </div>
                              </a>
                              <div className='xl:group-hover:translate-y-[-400%] z-10 max-md:group-focus:translate-y-[-400%] translate-y-[100%] transition duration-150 ease-in-out left-[10%] absolute bg-white py-[5px] product-action w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center m-auto rounded-full '>
                                 <button type='button' className='w-[30%]  flex items-center'>
                                    <ShoppingCartOutlined className=' m-auto hover:text-red-500 ' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <HeartOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <SearchOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                              </div>
                           </div>
                           <div className='wrap-product relative overflow-hidden group max-md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md '>
                              <a href='adfa '>
                                 <div className=' product overflow-hidden   relative    p-[10px] '>
                                    <img
                                       className=''
                                       src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                       alt=''
                                    />
                                    <p className='product-name font-bold'>Xoài</p>
                                    <span className='price text-red-500 font-bold'>30.000</span>
                                 </div>
                              </a>
                              <div className='xl:group-hover:translate-y-[-400%] z-10 max-md:group-focus:translate-y-[-400%] translate-y-[100%] transition duration-150 ease-in-out left-[10%] absolute bg-white py-[5px] product-action w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center m-auto rounded-full '>
                                 <button type='button' className='w-[30%]  flex items-center'>
                                    <ShoppingCartOutlined className=' m-auto hover:text-red-500 ' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <HeartOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <SearchOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                              </div>
                           </div>
                           <div className='wrap-product relative overflow-hidden group max-md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md '>
                              <a href='adfa '>
                                 <div className=' product overflow-hidden   relative    p-[10px] '>
                                    <img
                                       className=''
                                       src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                       alt=''
                                    />
                                    <p className='product-name font-bold'>Xoài</p>
                                    <span className='price text-red-500 font-bold'>30.000</span>
                                 </div>
                              </a>
                              <div className='xl:group-hover:translate-y-[-400%] z-10 max-md:group-focus:translate-y-[-400%] translate-y-[100%] transition duration-150 ease-in-out left-[10%] absolute bg-white py-[5px] product-action w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center m-auto rounded-full '>
                                 <button type='button' className='w-[30%]  flex items-center'>
                                    <ShoppingCartOutlined className=' m-auto hover:text-red-500 ' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <HeartOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <SearchOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                              </div>
                           </div>
                           <div className='wrap-product relative overflow-hidden group max-md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md '>
                              <a href='adfa '>
                                 <div className=' product overflow-hidden   relative    p-[10px] '>
                                    <img
                                       className=''
                                       src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                       alt=''
                                    />
                                    <p className='product-name font-bold'>Xoài</p>
                                    <span className='price text-red-500 font-bold'>30.000</span>
                                 </div>
                              </a>
                              <div className='xl:group-hover:translate-y-[-400%] z-10 max-md:group-focus:translate-y-[-400%] translate-y-[100%] transition duration-150 ease-in-out left-[10%] absolute bg-white py-[5px] product-action w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center m-auto rounded-full '>
                                 <button type='button' className='w-[30%]  flex items-center'>
                                    <ShoppingCartOutlined className=' m-auto hover:text-red-500 ' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <HeartOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <SearchOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                              </div>
                           </div>
                           <div className='wrap-product relative overflow-hidden group max-md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md '>
                              <a href='adfa '>
                                 <div className=' product overflow-hidden   relative    p-[10px] '>
                                    <img
                                       className=''
                                       src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                       alt=''
                                    />
                                    <p className='product-name font-bold'>Xoài</p>
                                    <span className='price text-red-500 font-bold'>30.000</span>
                                 </div>
                              </a>
                              <div className='xl:group-hover:translate-y-[-400%] z-10 max-md:group-focus:translate-y-[-400%] translate-y-[100%] transition duration-150 ease-in-out left-[10%] absolute bg-white py-[5px] product-action w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center m-auto rounded-full '>
                                 <button type='button' className='w-[30%]  flex items-center'>
                                    <ShoppingCartOutlined className=' m-auto hover:text-red-500 ' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <HeartOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <SearchOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                              </div>
                           </div>
                           <div className='wrap-product relative overflow-hidden group max-md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md '>
                              <a href='adfa '>
                                 <div className=' product overflow-hidden   relative    p-[10px] '>
                                    <img
                                       className=''
                                       src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                       alt=''
                                    />
                                    <p className='product-name font-bold'>Xoài</p>
                                    <span className='price text-red-500 font-bold'>30.000</span>
                                 </div>
                              </a>
                              <div className='xl:group-hover:translate-y-[-400%] z-10 max-md:group-focus:translate-y-[-400%] translate-y-[100%] transition duration-150 ease-in-out left-[10%] absolute bg-white py-[5px] product-action w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center m-auto rounded-full '>
                                 <button type='button' className='w-[30%]  flex items-center'>
                                    <ShoppingCartOutlined className=' m-auto hover:text-red-500 ' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <HeartOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <SearchOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                              </div>
                           </div>
                           <div className='wrap-product relative overflow-hidden group max-md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md '>
                              <a href='adfa '>
                                 <div className=' product overflow-hidden   relative    p-[10px] '>
                                    <img
                                       className=''
                                       src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                       alt=''
                                    />
                                    <p className='product-name font-bold'>Xoài</p>
                                    <span className='price text-red-500 font-bold'>30.000</span>
                                 </div>
                              </a>
                              <div className='xl:group-hover:translate-y-[-400%] z-10 max-md:group-focus:translate-y-[-400%] translate-y-[100%] transition duration-150 ease-in-out left-[10%] absolute bg-white py-[5px] product-action w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center m-auto rounded-full '>
                                 <button type='button' className='w-[30%]  flex items-center'>
                                    <ShoppingCartOutlined className=' m-auto hover:text-red-500 ' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <HeartOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <SearchOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                              </div>
                           </div>
                           <div className='wrap-product relative overflow-hidden group max-md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md '>
                              <a href='adfa '>
                                 <div className=' product overflow-hidden   relative    p-[10px] '>
                                    <img
                                       className=''
                                       src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                       alt=''
                                    />
                                    <p className='product-name font-bold'>Xoài</p>
                                    <span className='price text-red-500 font-bold'>30.000</span>
                                 </div>
                              </a>
                              <div className='xl:group-hover:translate-y-[-400%] z-10 max-md:group-focus:translate-y-[-400%] translate-y-[100%] transition duration-150 ease-in-out left-[10%] absolute bg-white py-[5px] product-action w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center m-auto rounded-full '>
                                 <button type='button' className='w-[30%]  flex items-center'>
                                    <ShoppingCartOutlined className=' m-auto hover:text-red-500 ' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <HeartOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <SearchOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                              </div>
                           </div>

                        </div>
                     </div>
                     <div className='product-item'>
                        <h1 className='cate-name font-bold text-[20px] my-[20px] pl-[10px] '>THỊT</h1>
                        <div className='list-products grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 max-sm:grid-cols-2  gap-[15px]'>
                           <div className='wrap-product relative overflow-hidden group max-md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md '>
                              <a href='adfa '>
                                 <div className=' product overflow-hidden   relative    p-[10px] '>
                                    <img
                                       className=''
                                       src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                       alt=''
                                    />
                                    <p className='product-name font-bold'>Xoài</p>
                                    <span className='price text-red-500 font-bold'>30.000</span>
                                 </div>
                              </a>
                              <div className='xl:group-hover:translate-y-[-400%] z-10 max-md:group-focus:translate-y-[-400%] translate-y-[100%] transition duration-150 ease-in-out left-[10%] absolute bg-white py-[5px] product-action w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center m-auto rounded-full '>
                                 <button type='button' className='w-[30%]  flex items-center'>
                                    <ShoppingCartOutlined className=' m-auto hover:text-red-500 ' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <HeartOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <SearchOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                              </div>
                           </div>
                           <div className='wrap-product relative overflow-hidden group max-md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md '>
                              <a href='adfa '>
                                 <div className=' product overflow-hidden   relative    p-[10px] '>
                                    <img
                                       className=''
                                       src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                       alt=''
                                    />
                                    <p className='product-name font-bold'>Xoài</p>
                                    <span className='price text-red-500 font-bold'>30.000</span>
                                 </div>
                              </a>
                              <div className='xl:group-hover:translate-y-[-400%] z-10 max-md:group-focus:translate-y-[-400%] translate-y-[100%] transition duration-150 ease-in-out left-[10%] absolute bg-white py-[5px] product-action w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center m-auto rounded-full '>
                                 <button type='button' className='w-[30%]  flex items-center'>
                                    <ShoppingCartOutlined className=' m-auto hover:text-red-500 ' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <HeartOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <SearchOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                              </div>
                           </div>
                           <div className='wrap-product relative overflow-hidden group max-md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md '>
                              <a href='adfa '>
                                 <div className=' product overflow-hidden   relative    p-[10px] '>
                                    <img
                                       className=''
                                       src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                       alt=''
                                    />
                                    <p className='product-name font-bold'>Xoài</p>
                                    <span className='price text-red-500 font-bold'>30.000</span>
                                 </div>
                              </a>
                              <div className='xl:group-hover:translate-y-[-400%] z-10 max-md:group-focus:translate-y-[-400%] translate-y-[100%] transition duration-150 ease-in-out left-[10%] absolute bg-white py-[5px] product-action w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center m-auto rounded-full '>
                                 <button type='button' className='w-[30%]  flex items-center'>
                                    <ShoppingCartOutlined className=' m-auto hover:text-red-500 ' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <HeartOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <SearchOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                              </div>
                           </div>
                           <div className='wrap-product relative overflow-hidden group max-md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md '>
                              <a href='adfa '>
                                 <div className=' product overflow-hidden   relative    p-[10px] '>
                                    <img
                                       className=''
                                       src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                       alt=''
                                    />
                                    <p className='product-name font-bold'>Xoài</p>
                                    <span className='price text-red-500 font-bold'>30.000</span>
                                 </div>
                              </a>
                              <div className='xl:group-hover:translate-y-[-400%] z-10 max-md:group-focus:translate-y-[-400%] translate-y-[100%] transition duration-150 ease-in-out left-[10%] absolute bg-white py-[5px] product-action w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center m-auto rounded-full '>
                                 <button type='button' className='w-[30%]  flex items-center'>
                                    <ShoppingCartOutlined className=' m-auto hover:text-red-500 ' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <HeartOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <SearchOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                              </div>
                           </div>
                           <div className='wrap-product relative overflow-hidden group max-md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md '>
                              <a href='adfa '>
                                 <div className=' product overflow-hidden   relative    p-[10px] '>
                                    <img
                                       className=''
                                       src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                       alt=''
                                    />
                                    <p className='product-name font-bold'>Xoài</p>
                                    <span className='price text-red-500 font-bold'>30.000</span>
                                 </div>
                              </a>
                              <div className='xl:group-hover:translate-y-[-400%] z-10 max-md:group-focus:translate-y-[-400%] translate-y-[100%] transition duration-150 ease-in-out left-[10%] absolute bg-white py-[5px] product-action w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center m-auto rounded-full '>
                                 <button type='button' className='w-[30%]  flex items-center'>
                                    <ShoppingCartOutlined className=' m-auto hover:text-red-500 ' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <HeartOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <SearchOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                              </div>
                           </div>
                           <div className='wrap-product relative overflow-hidden group max-md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md '>
                              <a href='adfa '>
                                 <div className=' product overflow-hidden   relative    p-[10px] '>
                                    <img
                                       className=''
                                       src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                       alt=''
                                    />
                                    <p className='product-name font-bold'>Xoài</p>
                                    <span className='price text-red-500 font-bold'>30.000</span>
                                 </div>
                              </a>
                              <div className='xl:group-hover:translate-y-[-400%] z-10 max-md:group-focus:translate-y-[-400%] translate-y-[100%] transition duration-150 ease-in-out left-[10%] absolute bg-white py-[5px] product-action w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center m-auto rounded-full '>
                                 <button type='button' className='w-[30%]  flex items-center'>
                                    <ShoppingCartOutlined className=' m-auto hover:text-red-500 ' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <HeartOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <SearchOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                              </div>
                           </div>
                           <div className='wrap-product relative overflow-hidden group max-md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md '>
                              <a href='adfa '>
                                 <div className=' product overflow-hidden   relative    p-[10px] '>
                                    <img
                                       className=''
                                       src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                       alt=''
                                    />
                                    <p className='product-name font-bold'>Xoài</p>
                                    <span className='price text-red-500 font-bold'>30.000</span>
                                 </div>
                              </a>
                              <div className='xl:group-hover:translate-y-[-400%] z-10 max-md:group-focus:translate-y-[-400%] translate-y-[100%] transition duration-150 ease-in-out left-[10%] absolute bg-white py-[5px] product-action w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center m-auto rounded-full '>
                                 <button type='button' className='w-[30%]  flex items-center'>
                                    <ShoppingCartOutlined className=' m-auto hover:text-red-500 ' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <HeartOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <SearchOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                              </div>
                           </div>
                           <div className='wrap-product relative overflow-hidden group max-md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md '>
                              <a href='adfa '>
                                 <div className=' product overflow-hidden   relative    p-[10px] '>
                                    <img
                                       className=''
                                       src='https://www.chuahoangphap.com.vn/Images/News/bizmac__full_27002.jpg'
                                       alt=''
                                    />
                                    <p className='product-name font-bold'>Xoài</p>
                                    <span className='price text-red-500 font-bold'>30.000</span>
                                 </div>
                              </a>
                              <div className='xl:group-hover:translate-y-[-400%] z-10 max-md:group-focus:translate-y-[-400%] translate-y-[100%] transition duration-150 ease-in-out left-[10%] absolute bg-white py-[5px] product-action w-[80%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex justify-center m-auto rounded-full '>
                                 <button type='button' className='w-[30%]  flex items-center'>
                                    <ShoppingCartOutlined className=' m-auto hover:text-red-500 ' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <HeartOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                                 <button type='button' className='w-[30%] flex items-center'>
                                    <SearchOutlined className=' m-auto hover:text-red-500' />
                                 </button>
                              </div>
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
                     
          <div className='test relative w-[24px] h-[24px] m-auto '  >

          <ShoppingCartOutlined style={{ fontSize: '24px' }}  />
                       

                     <p className="custom-badge w-[16px] h-[16px] leading-[16px] rounded-[50%] text-[9px]  right-[-6px] top-[-1px] bg-red-500 absolute text-white">
                     0
                        </p>
          </div>
                     <p className=' text-[12px] mt-[3px]'>Giỏ hàng</p>
                  </div>
                  <div className='mobile-menu-item text-[#939596] p-[5px] text-center w-[20%]'>
                  <ProfileOutlined  style={{ fontSize: '24px' }} />

                     <p className=' text-[12px]'>Danh mục</p>
                  </div>

                  <div className='mobile-menu-item text-[#939596] p-[5px] text-center w-[20%]'>
                  <BellOutlined style={{ fontSize: '24px' }} />
         
                     <p className=' text-[12px]'>Thông báo</p>
                  </div>
                  <div className='mobile-menu-item text-[#939596] p-[5px] text-center w-[20%]'>
                  <UserOutlined style={{ fontSize: '24px' }}  />
                     <p className=' text-[12px]'>Tài khoản</p>
                  </div>
               </div>
            </section>
         </div>
      </>
   );
};
export default ProductPage;
