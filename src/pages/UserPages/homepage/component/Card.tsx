import { CiHeart, CiShoppingBasket } from 'react-icons/ci';

const Card = ({ item }: any) => {
   return (
      <section className='grid grid-cols-3 px-40 gap-10 bg-gray-50 '>
         {item?.map((data: any, index: number) => (
            <div key={index} className='bg-white shadow-md  h-max relative'>
               <a href=''>
                  <img
                     className=' object-cover hover:scale-105 duration-300 py-14 px-5'
                     src={data.images[0]}
                     alt=''
                  />
                  <CiHeart className='w-8 h-8 absolute top-3 right-3' />
               </a>
               <div className='px-4 py-3'>
                  <span className='text-gray-400 uppercase text-sm'>{data.categoryId.cateName}</span>
                  <p className='text-lg font-bold block truncate capitalize'>{data.productName}</p>
                  <div className='flex items-center'>
                     <p className='text-lg text-[#5c8918] font-semibold my-3'>${data.price}</p>
                     <del>
                        <p className='text-sm text-gray-600 ml-2'></p>
                     </del>
                     <div className='ml-auto items-center text-center'>
                        <CiShoppingBasket className='w-8 h-8' />
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </section>
   );
};

export default Card;
