const SlideLogo = () => {
   return (
      <div className=''>
         <hr />
         <div className='mt-16 relative'>
            <img src='http://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/bg-footer8.jpg' alt='' />
            <div className='absolute lg:top-1/2 lg:left-1/2 md:top-20 md:left-[50%] top-16 left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center'>
               <h1 className='lg:text-4xl md:text-xl text-lg font-bold text-white'>Đăng ký để nhận cập nhật</h1>
               <div className='items-center lg:pt-5 lg:pb-7 lg:ml-48 md:pt-2 md:ml-[37%] ml-[27%]'>
                  <img src='https://wpbingosite.com/wordpress/kola/wp-content/themes/kola/images/bottom3.png' alt='' />
               </div>

               <h4 className='lg:text-base md:text-sm text-xs lg:pb-3  text-white'>
                  Để lại email để không bỏ lỡ bất kỳ ưu đãi nào
               </h4>
               <div className='flex justify-center lg:mt-4'>
                  <div className='flex items-center'>
                     <input
                        placeholder='Email ......'
                        className='lg:w-[430px] lg:h-12 md:w-[400px] md:h-8 [260px] h-6 rounded-3xl  p-2 pl-16'
                     />
                     <button className='bg-[#80b235] lg:w-24 md:w-20 text-white lg:h-12 md:h-8 w-16 text-xs md:text-base h-6 rounded-3xl '>
                        Đăng Ký
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SlideLogo;
