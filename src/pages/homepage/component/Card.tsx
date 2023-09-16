import CartIcon from '../../../assets/icons/CartIcon';
import HeartIcon from '../../../assets/icons/HeartIcon';

const Card = ({ item }: any) => {
   return (
      <section className='grid grid-cols-3 gap-10 pl-28 pr-28  bg-gray-50 min-h-screen'>
         {item.map((data: any) => (
            <div className='bg-white shadow-md hover:scale-105 duration-300'>
               <a href=''>
                  <img className='w-80 h-72 object-cover' src={data.image} alt='' />
               </a>
               <div className='px-4 py-3'>
                  <span className='text-gray-400 uppercase text-sm'>{data.category}</span>
                  <p className='text-lg font-bold block truncate capitalize'>{data.name}</p>
                  <div className='flex items-center'>
                     <p className='text-lg font-semibold my-3'>${data.price}</p>
                     <del>
                        <p className='text-sm text-gray-600 ml-2'></p>
                     </del>
                     <div className='ml-auto items-center text-center'>
                        <CartIcon className='mb-2 ' />
                        <HeartIcon />
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </section>
   );
};

export default Card;
