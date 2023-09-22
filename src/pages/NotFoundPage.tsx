import React from 'react'

const NotFoundPage = () => {
    return (
        <div>

            <div className="text-center">


                {/* <div className="text-5xl font-extrabold ...">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-9xl font-extrabold">
                        404
                    </span>
                    
                </div> */}

                <div>
                    <img className='m-auto w-48 mt-14' src="https://f46-zpg-r.zdn.vn/9171591183498640060/6cc7a48c6564b03ae975.jpg" alt="" />
                </div>

                <div className='flex flex-row  items-center  w-[50%] ml-[29%]'>
                    <div className='basis-4/5'>
                        <p className='text-5xl font-extrabold '>Không tìm thấy nội dung </p>
                    </div>
                    <div className='basis-1/6'>
                        <img  src="https://img.freepik.com/premium-vector/cute-funny-crying-sad-carrot-character_464314-1975.jpg" alt="" />
                    </div>
                </div>

                <div className='mt-5'>
                    <p className='text-lg font-medium'>URL của nội dung này đã bị thay đổi hoặc không còn tồn tại.</p>
                    <p className='text-lg font-medium'>Nếu bạn đang lưu URL này, hay thử truy cập lại từ trang chủ thay vì dùng URL đã lưu.</p>
                </div>

                <div className='mt-8'>
                    <a href="/">
                        <button className="rounded-full bg-[#6BAA14] text-white text-lg font-medium w-[18%] h-10">Quay về trang chủ</button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default NotFoundPage