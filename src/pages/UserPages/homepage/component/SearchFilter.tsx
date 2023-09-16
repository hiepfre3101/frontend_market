import { useState } from 'react';
import { Modal, Input, Button, Space, Spin, Image } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useSearchProductMutation } from '../../../../services/products.service';
import { IProduct } from '../../../../interface/products';
import { Link } from 'react-router-dom';

const SearchFilter = ({ children }: any) => {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   const [searchValue, setSearchValue] = useState<string>('');
   const [search, { data, isLoading }] = useSearchProductMutation();
   const showModal = () => {
      setIsModalOpen(true);
   };
   const handleCancel = () => {
      setIsModalOpen(false);
   };
   const handleSearch = () => {
      search(`&_q=${searchValue}`);
   };
   return (
      <>
         <span onClick={showModal}>{children}</span>

         <Modal onCancel={handleCancel} title='Basic Modal' open={isModalOpen} footer={(_, {}) => <></>}>
            <Space>
               <Input
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder='Basic usage'
                  className='w-[420px] border-2'
               />
               <Button onClick={() => handleSearch()} type='primary' icon={<SearchOutlined />}></Button>
            </Space>
            {isLoading ? (
               <div className='flex justify-center'>
                  <Spin />
               </div>
            ) : (
               data?.body?.docs.map((item: IProduct, index: number) => (
                  <Link to={'/'} key={index}>
                     <Space>
                        <Image src={item.images[0].url} width={120} />
                        <div className=''>
                           <h2>{item.productName}</h2>
                           <h1>{item.price}</h1>
                        </div>
                     </Space>
                  </Link>
               ))
            )}
         </Modal>
      </>
   );
};

export default SearchFilter;
