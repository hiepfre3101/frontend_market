import { Divider, Form } from 'antd';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { InputProduct } from '../../../interfaces/product';
import UploadButton from '../../../components/UploadButton/UploadButton';
import { useState } from 'react';
import { uploadImages } from '../../../api/upload';

const AddProduct = () => {
   const [files, setFiles] = useState<File[]>([]);
   const [form] = Form.useForm();
   const handleGetFiles = (files: File[]) => {
      form.setFieldValue('images', files);
      setFiles(files);
   };
   const handleSubmit = async (body: any) => {
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
            <div className='bg-white mt-10 rounded-lg p-5'>
               <p className='text-[1.5rem] font-semibold'>Hình ảnh sản phẩm</p>
               <Divider />
               <Form.Item<InputProduct>
                  name='images'
                  hasFeedback
                  rules={[{ required: true, message: 'Please choose images' }]}
               >
                  <UploadButton
                     maxCount={3}
                     multiple
                     listStyle='picture-card'
                     getListFiles={handleGetFiles}
                     name='images'
                  />
               </Form.Item>
            </div>
         </Form>
      </>
   );
};

export default AddProduct;
