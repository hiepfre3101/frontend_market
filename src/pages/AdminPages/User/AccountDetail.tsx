import { useParams } from 'react-router-dom';
import { useGetOneQuery, useUpdateUserMutation } from '../../../services/user.service';
import { Helmet } from 'react-helmet';
import { Button, Modal, Spin, Tabs, message } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import { useState } from 'react';
import type { TabsProps } from 'antd';
import DraggerImage from '../../../components/UploadButton/DraggerImage';
import { uploadImages } from '../../../api/upload';
import { IUser } from '../../../interfaces/auth';

const items: TabsProps['items'] = [
   {
      key: '1',
      label: 'Thông tin tài khoản',
      children: 'Thông tin'
   },
   {
      key: '2',
      label: 'Đơn hàng',
      children: 'Đơn hàng'
   }
];

function AccountDetail() {
   const { id } = useParams();
   const { data, isLoading } = useGetOneQuery(id!);
   const [updateAccount] = useUpdateUserMutation();
   const [open, setOpen] = useState(false);
   const [files, setFiles] = useState<File[]>([]);
   const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
   // Hàm callback để lấy dữ liệu từ ImageUploader
   const handleDataChange = (data: File[]) => {
      setFiles(data);
   };

   const handleOk = async () => {
      setConfirmLoading(true)
      const {
         data: { data: imageUrl }
      } = await uploadImages(files);

      const dataRequest = {
         userName: data?.body.userName,
         email: data?.body.email,
         avatar: imageUrl[0].url
      } as IUser;
      updateAccount({
         id: id!,
         data: { ...dataRequest } as IUser
      }).unwrap().then(() => {
         message.success('Change avatar successfully')
         setConfirmLoading(false);
         setOpen(false)
      });
      
   };

   const onChange = (key: string) => {
      console.log(key);
   };

   console.log(files);

   return (
      <>
         <Helmet>
            <title>{data?.body ? data?.body.email : 'Người dùng'}</title>
         </Helmet>
         <div className='w-full flex justify-start items-center min-h-screen flex-col mt-10'>
            <div className='w-[90%] rounded-lg mt-5'>
               {isLoading && !data ? (
                  <Spin />
               ) : (
                  <div>
                     <h1 className='text-3xl my-3 font-semibold text-[rgba(0,0,0,0.7)]'>
                        {data?.body ? data?.body.userName : 'Người dùng'}
                     </h1>
                     <header className='flex p-5 bg-white rounded-lg justify-between'>
                        <div className='flex items-center gap-2'>
                           <div className='w-[80px] h-[80px] rounded-full relative'>
                              <img
                                 src={data?.body?.avatar}
                                 alt='user avatar'
                                 className='rounded-full w-full h-full object-cover'
                              />
                              <Button
                                 onClick={() => setOpen(true)}
                                 type='text'
                                 shape='circle'
                                 className='bg-white border-[1px] border-[rgba(0,0,0,0.5)] absolute -right-1 -bottom-1'
                                 icon={<CameraOutlined />}
                              ></Button>
                              <Modal open={open} confirmLoading={confirmLoading} onOk={handleOk} onCancel={() => setOpen(false)}>
                                 <DraggerImage maxCount={1} multiple name={'avatar'} onDataChange={handleDataChange} />
                              </Modal>
                           </div>
                           <div>
                              <h1 className='font-bold text-[1.4rem]'>{data?.body.userName}</h1>
                              <p>{data?.body.email}</p>
                           </div>
                        </div>
                        <div>
                           <Button className='text-white'>Chỉnh sửa tài khoản</Button>
                        </div>
                     </header>
                     <div>
                        <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
                     </div>
                  </div>
               )}
            </div>
         </div>
      </>
   );
}

export default AccountDetail;
