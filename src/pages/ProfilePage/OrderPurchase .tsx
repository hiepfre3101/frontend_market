import React from 'react';
import { Space, Table, Tag } from 'antd';

const { Column } = Table;

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
}

const data: DataType[] = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  
];

const OrderPurchase: React.FC = () => (
  <div>
     <h1 className="text-5xl font-extrabold dark:text-white">Đơn mua</h1>
    <Table dataSource={data}>
   
   <Column dataIndex="firstName" key="firstName"  title="Tên sản phẩm"/>
   <Column title="Giá" dataIndex="age" key="age" />
   <Column title="Ảnh" dataIndex="address" key="address" />
   <Column
     title="Trạng thái"
     dataIndex="tags"
     key="tags"
     render={(tags: string[]) => (
       <>
         {tags.map((tag) => (
           <Tag color="blue" key={tag}>
             {tag}
           </Tag>
         ))}
       </>
     )}
   />
   <Column
     title="Hành động"
     key="action"
     render={(_: any, record: DataType) => (
       <Space size="middle">
         <a>Invite {record.lastName}</a>
         <a>Delete</a>
       </Space>
     )}
   />
 </Table>
  </div>
);

export default OrderPurchase 