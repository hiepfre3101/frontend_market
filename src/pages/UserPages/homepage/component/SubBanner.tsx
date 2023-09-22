const SubBanner = () => {
   return (
      <div className='sale-products relative'>
         <div className='grid grid-cols-2 mx-20 my-10 gap-7'>
            <div>
               <img src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/banner/banner-1.png' alt='' />
               <h4 className='absolute text-[#e80808] font-bold lg:text-[15px] text-[10px]  lg:top-[34%] lg:left-[10%] md:top-[33%] top-[33%] md:left-[14%] left-[15%] transform -translate-y-1/2'>
                  SALE UP 80% OFF
               </h4>
               <h2 className='absolute  font-bold  transform -translate-y-1/2 lg:text-[32px] md:text-[15px] text-[13px] lg:top-40 lg:left-[9%] md:left-[14%] left-[15%] md:top-20 top-14'>
                  Bitter melon
               </h2>
               <button className='absolute  text-[#e80808] transform -translate-y-1/2 bg-white  rounded-3xl lg:top-[64%] lg:left-[10%] lg:w-36 lg:h-10 lg:text-[16px] top-[70%] left-[15%] text-[10px] w-20 h-8'>
                  SHOP NOW
               </button>
            </div>
            <div>
               <img src='https://spacingtech.com/html/tm/freozy/freezy-ltr/image/banner/banner-2.png' alt='' />
               <h4 className='absolute text-[#e80808] font-bold lg:text-[15px] text-[10px] lg:top-[34%] lg:left-[56%] top-[34%]  md:left-[55%] left-[54%] transform -translate-y-1/2'>
                  SALE UP 35% OFF
               </h4>
               <h2 className='absolute  font-bold transform -translate-y-1/2 lg:text-[32px] lg:top-40 lg:left-[55%] md:text-[15px] text-[13px] md:top-20 top-14 md:left-[55%] left-[54%]'>
                  Healthy juice
               </h2>
               <button className='absolute text-[#e80808] transform -translate-y-1/2 bg-white lg:top-[64%] lg:text-[16px] lg:left-[56%] top-[70%] text-[10px]  md:left-[56%] left-[54%] lg:w-36 lg:h-10 w-20 h-8 rounded-3xl'>
                  SHOP NOW
               </button>
            </div>
         </div>
      </div>
   );
};

export default SubBanner;
