const SlideLogo = () => {
   return (
      <div className=''>
         <hr />
         <div className='mt-16 relative'>
            <img src='http://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/bg-footer8.jpg' alt='' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
               <h1 className='text-4xl font-bold text-white'>Đăng ký để nhận cập nhật</h1>
               <div className='items-center pt-5 pb-7 ml-48'>
                  <img src='https://wpbingosite.com/wordpress/kola/wp-content/themes/kola/images/bottom3.png' alt='' />
               </div>

               <h4 className='text-base pb-3  text-white'>Để lại email để không bỏ lỡ bất kỳ ưu đãi nào</h4>
               <div className='flex justify-center mt-4'>
                  <div className='flex items-center'>
                     <input placeholder='Email ......' className='w-[430px] h-12 rounded-3xl  p-2 pl-16' />
                     <button className='bg-[#80b235] w-24 text-white h-12 rounded-3xl '>Đăng Ký</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SlideLogo;
