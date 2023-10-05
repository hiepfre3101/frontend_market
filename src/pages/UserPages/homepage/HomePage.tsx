import { Helmet } from 'react-helmet';
import Banner from './component/Banner';
import SubBanner from './component/SubBanner';
import Card from './component/Card';
import { useEffect, useState } from 'react';
import BtnFilter from './component/BtnFilter';
import Delivery from './component/Delivery';
import Decorated from './component/Decorated';
import { useGetAllExpandQuery } from '../../../services/product.service';
import BannerSale from './component/BannerSale';
import { IProduct } from '../../../interfaces/product';
const HomePage = () => {
   const { data, isLoading } = useGetAllExpandQuery({ expand: true });
   const [item, setItems] = useState<IProduct[] | undefined>(data?.body?.docs || []);
   useEffect(() => {
      if (data?.body && !isLoading) setItems(data?.body?.docs);
   }, [data, isLoading]);
   const btnFilter = [...new Set(data?.body?.docs.map((val: any) => val.categoryId.cateName))];
   const filterItems = (cate: any) => {
      const newItems = data?.body?.docs.filter((data: any) => data.categoryId.cateName === cate);
      setItems(newItems);
   };
   const refetch = () => {
      setItems(data?.body?.docs);
   };
   // console.log(item);

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
         <BtnFilter btnFilter={btnFilter} filterItems={filterItems} refetch={refetch} />
         <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 px-40 gap-10 bg-gray-50 '>
            {item && item?.length > 0 ? item.map((prd, index) => <Card key={index} product={prd} link='/' />) : <></>}
         </div>

         <Decorated />
         <BannerSale />
      </div>
   );
};

export default HomePage;
