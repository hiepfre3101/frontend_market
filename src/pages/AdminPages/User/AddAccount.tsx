import { Modal, Form, Input, Button, Select, Spin, message } from 'antd';
import { useState } from 'react';
import { useCreateAccountMutation } from '../../../services/user.service';
import { IUser } from '../../../interfaces/auth';

type IProps = {
   children: React.ReactNode;
};

type FieldType = {
   userName: string;
   email: string;
   phoneNumber?: string;
   password: string;
   address?: string;
   role?: string;
   state?: boolean | string;
};

function AddAccount({ children }: IProps) {
   const [open, setOpen] = useState(false);
   const [createAccount] = useCreateAccountMutation();
   const [confirmLoading, setConfirmLoading] = useState(false);
   const showModal = () => {
      setOpen(true);
   };

   const handleUpdate = (value: IUser) => {
      setConfirmLoading(true);

      createAccount(value)
         .unwrap()
         .then(() => {
            setConfirmLoading(false);
            message.success('Create Account Success')
            setOpen(false)
         });
   };

   const handleCancel = () => {
      console.log('Clicked cancel button');
      setOpen(false);
   };

   return (
      <>
         <span onClick={showModal}>{children}</span>
         <Modal
            title={'Create new'}
            open={open}
            footer={() => <></>}
            onCancel={handleCancel}
         >
            {confirmLoading ? (
               <div className='flex justify-center items-center h-3'>
                  <Spin />
               </div>
            ) : (
               <Form
                  name='basic'
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  style={{ maxWidth: 600 }}
                  initialValues={{ remember: true }}
                  onFinish={handleUpdate}
                  autoComplete='off'
               >
                  <Form.Item<FieldType>
                     label='Tên người dùng'
                     name='userName'
                     rules={[{ required: true, message: 'Hãy nhập tên cho tài khoản!' }]}
                  >
                     <Input />
                  </Form.Item>
                  <Form.Item<FieldType>
                     label='Email'
                     name='email'
                     rules={[
                        { required: true, message: 'Hẫy nhập email của bạn!' },
                        { type: 'email', message: 'Hãy nhập email hợp lệ' }
                     ]}
                  >
                     <Input />
                  </Form.Item>
                  <Form.Item<FieldType>
                     label='Mật khẩu'
                     name='password'
                     rules={[
                        { required: true, message: 'Hãy nhập mật khẩu của bạn!' }
                     ]}
                  >
                     <Input.Password />
                  </Form.Item>
                  <Form.Item<FieldType> label='Số điện thoại' name='phoneNumber'>
                     <Input />
                  </Form.Item>
                  <Form.Item<FieldType> label='Địa chỉ' name='address'>
                     <Input />
                  </Form.Item>
                  <Form.Item<FieldType>
                     label='Vai trò'
                     name='role'
                     rules={[{ required: true, message: 'Hãy chọn vai trò!' }]}
                  >
                     <Select value='member'>
                        <Select.Option value='member'>Member</Select.Option>
                        <Select.Option value='admin'>Admin</Select.Option>
                     </Select>
                  </Form.Item>
                  <Form.Item<FieldType>
                     label='Trạng thái'
                     name='state'
                     rules={[{ required: true, message: 'Chọn trạng thái cho tài khoản!' }]}
                  >
                     <Select value={true}>
                        <Select.Option value={true}>Hoạt động</Select.Option>
                        <Select.Option value={false}>Không hoạt động</Select.Option>
                     </Select>
                  </Form.Item>
                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                     <Button type='primary' loading={confirmLoading} htmlType='submit'>
                        Thêm mới
                     </Button>
                  </Form.Item>
               </Form>
            )}
         </Modal>
      </>
   );
}

export default AddAccount;
