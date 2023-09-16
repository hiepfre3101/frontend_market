import { Helmet } from 'react-helmet';
import Banner from './component/Banner';
import SubBanner from './component/SubBanner';
import Card from './component/Card';
import { useState } from 'react';
import Data from './data';
import BtnFilter from './component/BtnFilter';
import Delivery from './component/Delivery';
import Decorated from './component/decorated';
const HomePage = () => {
   const [item, setItems] = useState(Data);
   const btnFilter = [...new Set(Data.map((val: any) => val.category))];
   const filterItems = (cate: any) => {
      const newItems = Data.filter((data) => data.category === cate);
      setItems(newItems);
   };
   return (
      <div>
         <Helmet>
            <title>Trang chủ</title>
         </Helmet>
         <Banner />
         <Delivery />
         <SubBanner />
         <div className='text pb-12'>
            <h2 className='text text-center font-bold  text-[32px] '>Sản phẩm nổi bật</h2>
         </div>
         <BtnFilter btnFilter={btnFilter} filterItems={filterItems} setItems={setItems} />
         <Card item={item} />
         <Decorated />
      </div>
   );
};

export default HomePage;
