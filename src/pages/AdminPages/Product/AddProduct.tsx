import { Form, Radio, Space } from 'antd';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { InputProduct } from '../../../interfaces/product';
import UploadButton from '../../../components/UploadButton/UploadButton';
import { useState } from 'react';
import { uploadImages } from '../../../api/upload';
import BlockForm from './BlockForm';

const fakeCategory = [
   {
      name: 'Thuc pham tuoi song',
      value: '1'
   },
   {
      name: 'Thuc pham tuoi song',
      value: '2'
   },
   {
      name: 'Thuc pham tuoi song',
      value: '3'
   },
   {
      name: 'Thuc pham tuoi song',
      value: '4'
   }
];

const AddProduct = () => {
   const [files, setFiles] = useState<File[]>([]);
   const [categoryId, setCategoryId] = useState<string>();
   const [form] = Form.useForm();
   const handleGetFiles = (files: File[]) => {
      form.setFieldValue('images', files);
      setFiles(files);
   };
   const handleSubmit = async (body: InputProduct) => {
      try {
         const { data } = await uploadImages(files);
         const imagesUploaded = data.map((image) => image.url);
         form.setFieldValue('images', imagesUploaded);
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <>
         <Helmet>
            <title>Thêm sản phẩm</title>
         </Helmet>
         <Form className='w-[80%] mt-20' form={form} onFinish={handleSubmit}>
            <div className='flex justify-between items-center'>
               <input
                  type='text'
                  placeholder='Sản phẩm không tên'
                  className='underline-offset-[11px] font-semibold text-[rgba(0,0,0,0.5)] text-[3rem] outline-none border-none bg-transparent decoration-greenPri600 hover:underline hover:decoration-dashed decoration-1 focus:underline focus:decoration-solid max-w-[50%]'
               />
               <div className='flex justify-end items-center gap-5'>
                  <Link to={'/manage/products'}>
                     <button className='border-[1px] border-[#80b235] text-greenPrimary py-3 px-5 rounded-2xl font-semibold text-[1rem]'>
                        Hủy
                     </button>
                  </Link>
                  <Form.Item className='flex flex-col items-center !mb-0'>
                     <button
                        className='!bg-greenPrimary !text-white py-3 px-5 rounded-2xl font-semibold text-[1rem]'
                        type='submit'
                     >
                        Lưu
                     </button>
                  </Form.Item>
               </div>
            </div>
            <Space size={'large'} className='w-full !items-start mt-5'>
               <Space direction='vertical' size={"middle"} className='min-w-[800px]'>
                  <BlockForm  title='Hinh anh san pham'>
                     <Form.Item<InputProduct>
                        name='images'
                        hasFeedback
                        rules={[{ required: true, message: 'Hay chon anh' }]}
                     >
                        <UploadButton
                           maxCount={3}
                           multiple
                           listStyle='picture-card'
                           getListFiles={handleGetFiles}
                           name='images'
                        />
                     </Form.Item>
                  </BlockForm>
                  <BlockForm title='Thong tin san pham'>
                       <Space size={"middle"} direction='vertical'>
                           <p className='text-xl font-thin tracking-wider'>Thong tin co ban</p>
                           
                       </Space>
                  </BlockForm>
               </Space>
               <BlockForm title='Danh muc' className='min-w-[500px]'>
                  <Form.Item<InputProduct>
                     name='images'
                     hasFeedback
                     rules={[{ required: true, message: 'Hay chon danh muc' }]}
                  >
                     <Radio.Group
                        onChange={(e) => {
                           setCategoryId(e.target.value);
                           form.setFieldValue('categoryId', e.target.value);
                        }}
                        value={categoryId}
                        className='flex flex-col gap-2 items-start'
                     >
                        {fakeCategory.map((cate) => (
                           <Radio name='categoryId' value={cate.value} className='!text-lg  '>
                              {cate.name}
                           </Radio>
                        ))}
                     </Radio.Group>
                  </Form.Item>
               </BlockForm>
            </Space>
         </Form>
      </>
   );
};

export default AddProduct;
