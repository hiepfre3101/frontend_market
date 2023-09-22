import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import {
  Button,
  
  
  Form,
  Input,

  Upload,
} from 'antd';



const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const EditProfile: React.FC = () => {
  

  return (
    <div className="flex h-screen bg-gray-200 items-center justify-center  mt-10 mb-10">
      <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2 ">

     
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        
        style={{ maxWidth: 600 }}
      >
        
        <Form.Item label="Tên tài khoản">
          <Input />
        </Form.Item>
        
        <Form.Item label="Email">
          <Input />
        </Form.Item>

        <Form.Item label="Số điện thoại">
          <Input />
        </Form.Item>
       
       
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item >
          <Button>Button</Button>
        </Form.Item>
        
      </Form>
    </div>
    </div>
  );
};
export default EditProfile