import { SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Table from 'antd/es/table';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { productData } from '../../../constants/configTableAntd';
import { useGetAllExpandQuery } from '../../../services/product.service';
import Column from 'antd/es/table/Column';
import ActionTable from '../../../components/ActionTable/ActionTable';

const ProductAdmin = () => {
   const [valueSearch, setValueSearch] = useState<string>('');
   const [confirmResult, setConfirmResult] = useState<boolean>(false);
   const { data, isLoading } = useGetAllExpandQuery({ expand: true });
   const products = data && productData(data);

   const getConfirmResult = (result: boolean) => {
      setConfirmResult(result);
      return result;
   };

   
   return (
      <>
         <Helmet>
            <title>Sản phẩm</title>
         </Helmet>
         <div className='w-full flex justify-center items-center min-h-screen flex-col'>
            <div className='flex justify-between items-center w-[80%]'>
               <h1 className='text-3xl font-semibold text-[rgba(0,0,0,0.7)]'>Sản phẩm</h1>
               <Link to='/manage/add-product'>
                  <button className='bg-greenPrimary duration-100 hover:bg-greenPri600 text-white text-lg p-2 font-semibold rounded-lg flex justify-start items-center gap-2'>
                     <PlusCircleOutlined style={{ color: 'white' }} />
                     Sản phẩm mới
                  </button>
               </Link>
            </div>
            <div className='w-[80%] h-[1000px] bg-white rounded-lg mt-5'>
               <header className='flex justify-between items-center px-5 py-5'>
                  <div className='flex justify-between items-center max-w-[40%] gap-2 rounded-[100px] border-[1px] border-[#80b235] p-2'>
                     <SearchOutlined style={{ fontSize: '1rem', color: '#80b235' }} />
                     <input
                        type='text'
                        value={valueSearch}
                        onChange={(e) => setValueSearch(e.target.value)}
                        className='text-sm outline-none border-none flex-1'
                        placeholder='Tìm kiếm sản phẩm'
                     />
                     {valueSearch !== '' && (
                        <button
                           className='flex justify-center items-center rounded-full text-greenPrimary bg-[#80b23552] w-4 h-4  pb-1'
                           onClick={() => setValueSearch('')}
                        >
                           x
                        </button>
                     )}
                  </div>
                  <div className=''></div>
               </header>
               <Table dataSource={products} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} loading={isLoading}>
                  <Column
                     title=''
                     dataIndex='image'
                     key='image'
                     width={150}
                     render={(image) => <img src={image} className='w-[3rem] h-[3rem]' />}
                  />
                  <Column title='Tên' dataIndex='productName' key='productName' width={150} />
                  <Column title='Giá' dataIndex='price' key='price' width={150} />
                  <Column title='Danh mục lớn' dataIndex='category' key='category' width={150} />
                  <Column title='Danh mục nhỏ' dataIndex='subCategory' key='subCategory' width={150} />
                  <Column title='Thương hiệu' dataIndex='brand' key='brand' width={150} />
                  <Column title='Kho hàng' dataIndex='stock' key='stock' width={150} />
                  <Column
                     title='Chức năng '
                     key='_id'
                     dataIndex={'_id'}
                     render={(id) => (
                        <ActionTable linkToUpdate={`/manage/products/${id}`} getResultConfirm={getConfirmResult} />
                     )}
                  />
               </Table>
            </div>
         </div>
      </>
   );
};

export default ProductAdmin;
