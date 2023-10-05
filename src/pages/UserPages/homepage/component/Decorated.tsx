const Decorated = () => {
   return (
      <div className='grid grid-cols-2 px-40 pt-10 pb-10 2xl:gap-10'>
         <div className='grid grid-cols-2 2xl:gap-10'>
            <div>
               <img
                  className='2xl:w-[100%]'
                  src='http://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/banner29.jpg'
                  alt=''
               />
            </div>
            <div className=''>
               <img
                  className='2xl:w-[100%]'
                  src='http://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/banner30.jpg'
                  alt=''
               />
               <img
                  className='w-[95%] 2xl:w-[100%]'
                  src='https://png.pngtree.com/png-clipart/20230126/original/pngtree-100-natural-product-lebel-design-free-vector-transparent-background-png-image_8931766.png'
                  alt=''
               />
            </div>
         </div>

         <div className=''>
            <div className='grid grid-cols-2 lg:pb-8 pb-4 2xl:gap-10'>
               <img
                  className='2xl:w-[100%]'
                  src='http://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/banner31.jpg'
                  alt=''
               />
               <img
                  className='2xl:w-[100%]'
                  src='http://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/banner32.jpg'
                  alt=''
               />
            </div>
            <img
               className='2xl:w-[100%]'
               src='http://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/banner33.jpg'
               alt=''
            />
         </div>
      </div>
   );
};

export default Decorated;
