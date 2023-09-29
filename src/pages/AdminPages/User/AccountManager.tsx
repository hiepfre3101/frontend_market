import { EllipsisOutlined, EyeOutlined, PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Popover, Table } from 'antd';
import Column from 'antd/es/table/Column';
import PencilIcon from '../../../components/Icons/PencilIcon';
import { useGetAllQuery } from '../../../services/user.service';
import { userData } from '../../../constants/configTableAntd';
import EditAccount from './EditAccount';
import AddAccount from './AddAccount';

function AccountManager() {
   const [valueSearch, setValueSearch] = useState<string>('');
   const {data, isLoading} = useGetAllQuery()
   const users = data && userData(data)
   return (
      <>
         <Helmet>
            <title>Tài khoản</title>
         </Helmet>
         <div className='w-full flex justify-center items-center min-h-screen flex-col mt-10'>
            <div className='flex justify-between items-center w-[90%]'>
               <h1 className='text-3xl font-semibold text-[rgba(0,0,0,0.7)]'>Tài khoản</h1>
               <AddAccount>
                  <button className='bg-greenPrimary duration-100 hover:bg-greenPri600 text-white text-lg p-2 font-semibold rounded-lg flex justify-start items-center gap-2'>
                     <PlusCircleOutlined style={{ color: 'white' }} />
                     Tài khoản mới
                  </button>
               </AddAccount>
            </div>
            <div className='w-[90%] h-[1000px] bg-white rounded-lg mt-5'>
               <header className='flex justify-between items-center px-5 py-5'>
                  <div className='flex justify-between items-center max-w-[50%] gap-2 rounded-[100px] border-[1px] border-[#80b235] p-2'>
                     <SearchOutlined style={{ fontSize: '1rem', color: '#80b235' }} />
                     <input
                        type='text'
                        value={valueSearch}
                        onChange={(e) => setValueSearch(e.target.value)}
                        className='text-sm outline-none border-none w-full flex-1'
                        placeholder='Tìm kiếm tài khoản'
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
               <Table dataSource={users} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} loading={isLoading}>
                  <Column
                     title='Ảnh đại diện'
                     dataIndex='avatar'
                     key='avatar'
                     fixed='left'
                     width={90}
                     render={(avatar) => <img src={avatar} className='w-[3rem] h-[3rem]' />}
                  />
                  <Column title='Tên' dataIndex='userName' key='userName' width={150} />
                  <Column title='email' dataIndex='email' key='email' width={300} 
                    render={(email) => <a href={'mailto:'+email}>{email}</a>}
                  />
                  <Column title='địa chị' dataIndex='address' key='address' width={150} />
                  <Column title='điện thoại' dataIndex='phoneNumber' key='phoneNumber' width={150} 
                    render={(phoneNumber) => <a target='_self' href={'tel:'+phoneNumber}>{phoneNumber}</a>}
                  />
                  <Column title='vai trò' dataIndex='role' key='role' width={150} />
                  <Column title='trạng thái' dataIndex='state' key='state' width={150} 
                    render={(state) => state ? <p>Hoạt động</p> : <p>Không hoạt động</p>}
                  />
                  <Column
                     title='Chức năng '
                     key='_id'
                     width={70}
                     fixed='right'
                     dataIndex={'_id'}
                     render={(id) => (
                        <Popover content={() => <>
                           <EditAccount id={id}><Button style={{ color: 'white' }} icon={<PencilIcon width={'1em'} height={'1em'}/>}>Sửa</Button></EditAccount>
                           <Link to={'/manage/accounts/'+id+'/view'}><Button style={{ color: 'white' }} icon={<EyeOutlined/>}>Xem</Button></Link>
                        </>}>
                           <Button shape='circle' className='bg-[white] border-[1px] border-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.1)]' type='text' icon={<EllipsisOutlined/>}></Button>
                        </Popover>
                     )}
                  />
               </Table>
            </div>
         </div>
      </>
   );
}

export default AccountManager;
