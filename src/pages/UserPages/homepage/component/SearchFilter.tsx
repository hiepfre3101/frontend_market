import { useState, useEffect } from 'react';
import { Drawer, Input, Button, Spin, Image } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useSearchProductMutation } from '../../../../services/productsSearch.service';
import { IProduct } from '../../../../interfaces/product';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const SearchFilter = ({ children }: any) => {
   const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
   const [searchValue, setSearchValue] = useState<string>('');
   const [search, { data, isLoading }] = useSearchProductMutation();
   const [items, setItems] = useState<IProduct[]>([]);
   const [searchHistory, setSearchHistory] = useState<string[]>([]);

   useEffect(() => {
      const savedSearchHistory = localStorage.getItem('searchHistory');
      if (savedSearchHistory) {
         setSearchHistory(JSON.parse(savedSearchHistory));
      }
   }, []);

   useEffect(() => {
      if (!isLoading && data?.body) {
         setItems(data.body.docs);
      }
   }, [data, isLoading]);

   const showDrawer = () => {
      setIsDrawerOpen(true);
   };

   const onClose = () => {
      setItems([]);
      setSearchValue('');
      setIsDrawerOpen(false);
   };

   const handleSearch = () => {
      if (searchValue === '') {
         setItems([]);
         search('');
      } else {
         const newSearchHistory = [searchValue, ...searchHistory];
         const histories = newSearchHistory.filter((item) => newSearchHistory.indexOf(item) < 5);
         setSearchHistory(Array.from(new Set(histories)));
         localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
         search(`&_q=${searchValue}`);
      }
   };

   const handleRemoveKeyword = (keyword: string) => {
      const newSearchHistory = searchHistory.filter((item) => item !== keyword);
      setSearchHistory(newSearchHistory);
      localStorage.setItem('searchHistory', JSON.stringify(newSearchHistory));
   };
   const handleKeywordClick = (keyword: string) => {
      setSearchValue(keyword);
   };
   return (
      <>
         <span onClick={showDrawer}>{children}</span>
         <Drawer title='Search Products' placement='top' closable={true} onClose={onClose} visible={isDrawerOpen}>
            <div className=' items-center text-center'>
               <Input
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder=' text...'
                  className='w-[500px] border-5 focus:border-sky-400'
               />
               <Button onClick={handleSearch} type='primary' icon={<SearchOutlined />} />
            </div>
            <div className='items-center flex justify-center my-5 gap-5'>
               <h2>Search History:</h2>
               <div className=' flex justify-center gap-5'>
                  {searchHistory.map((keyword, index) => (
                     <div
                        key={index}
                        className='search-history flex justify-center items-center '
                        onClick={() => handleKeywordClick(keyword)}
                     >
                        <span className=''>{keyword}</span>
                        <span onClick={() => handleRemoveKeyword(keyword)}>
                           <AiOutlineClose />
                        </span>
                     </div>
                  ))}
               </div>
            </div>
            <div className='flex flex-wrap items-center justify-center'>
               {isLoading ? (
                  <div className='flex justify-center'>
                     <Spin />
                  </div>
               ) : (
                  items.map((item: IProduct, index: number) => (
                     <Link className='w-[30%] flex justify-center' to={'/products'} key={index}>
                        <div className='flex'>
                           <Image src={item.images[0].url} width={120} />
                           <div className='w-[50%]'>
                              <h2 className=' '>{item.productName}</h2>
                              <h1>{item.price}</h1>
                           </div>
                        </div>
                     </Link>
                  ))
               )}
            </div>
         </Drawer>
      </>
   );
};

export default SearchFilter;
