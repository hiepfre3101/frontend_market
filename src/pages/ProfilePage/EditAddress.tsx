
import React from 'react';
import { Button, Checkbox, Form, Input , } from 'antd';
const { TextArea } = Input;

const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  type FieldType = {
    address?: string;
    
  };
const EditAddress = () => {

  return (
    <div>
         <h1 className="text-5xl font-extrabold dark:text-white">Địa chỉ</h1>
        <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
   

    <Form.Item<FieldType>
      label="Address"
      name="address"
      rules={[{ required: true, message: 'Please input your address!' }]}
    >
     <TextArea rows={4} />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Cập nhật
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}

export default EditAddress