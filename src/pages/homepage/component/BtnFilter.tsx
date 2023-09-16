import Data from '../data';

const BtnFilter = ({ btnFilter, filterItems, setItems }: any) => {
   return (
      <div className='flex justify-center mb-10'>
         <div>
            {btnFilter.map((data: any) => (
               <button
                  className='btn  text-[#6AAD12] p-1 px-2 mx-5 text-lg font-bold'
                  onClick={() => filterItems(data)}
               >
                  {data}
               </button>
            ))}
            <button className='text-[#6AAD12] p-1 px-2 mx-5 text-lg font-bold' onClick={() => setItems(Data)}>
               All
            </button>
         </div>
      </div>
   );
};

export default BtnFilter;
