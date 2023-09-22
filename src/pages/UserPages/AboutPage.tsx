import React from 'react'
import { Helmet } from 'react-helmet';
import Banner from './homepage/component/Banner';

const AboutPage = () => {
    return (

        <div className="text-center">

            <Helmet>
                <title>Giới thiệu</title>
            </Helmet>

            <div>
                <Banner></Banner>
            </div>


            <div className="head">

                <div className=" text-[#6BAA14] text-[25px] font-medium bottom-20 mt-10" >
                    <h2>Chào mừng đến với Fresh Mart</h2>
                </div>

                <div className="text-[30px] font-bold bottom-20 mt-3" >
                    <p>MỘT CÂU CHUYỆN NHỎ VỀ CHÚNG TÔI</p>
                </div>

                <div className="flex justify-center ... mt-3">
                    <div>~~~~~~~~~~~~~~~~~~</div>
                    <div className="rounded-full  w-[30px] h-[30px]  justify-center items-center text-[#6BAA14]"><i className="fas fa-seedling text-2xl"></i></div>
                    <div>~~~~~~~~~~~~~~~~~~</div>
                </div>

                <div className="flex mt-10 italic justify-center">

                    <div className="flex-initial w-[36%] mr-7">
                        <img src="https://hcdc.vn/public/img/02bf8460bf0d6384849ca010eda38cf8e9dbc4c7/images/mod1/images/vai-tro-dinh-duong-trong-phong-chong-cac-benh-khong-lay-nhiem/images/2010141640.jpg" alt="" />
                    </div>
                    {/* https://chuyentrang.viendinhduong.vn/FileUpload/Images/an_rau_va_trai_cay_hang_ngay.jpg */}
                    <div className="flex-initial w-[36%] text-left">
                        <div className="flex items justify text-[26px] bottom-15 " >
                            <p>  Dinh dưỡng trong rau củ quả </p>
                        </div>
                        Rau quả là nguồn cung cấp quan trọng các vitamin.Những loại rau có nhiều caroten là rau có nhiều diệp lục tố như rau muống, củ cà rốt. <br /> <br />
                        Ngoài ra rau cũng là nguồn cung cấp chất sắt dễ hấp thu vì có kèm theo vitamin C. <br />
                        Lượng canxi và photpho ít nhưng tỷ lệ Ca/P tốt các loại rau nhiều diệp lục tố đều giầu viatmin C như rau ngót (185 mg%), rau mùi (140 mg%), cần tây (120 mg%), mùng tơi (72 mg%), cải sen (51 mg%), cải bắp (30 mg%), rau muống (23 mg%).

                        <div className="flex justify-center ... mt-3 ">
                            <div ><img className="w-20 h-20 bg-gray-300 w-20 h-20 mx-5" src="https://3.bp.blogspot.com/-aUBKl8SyUBc/WreKvpKZMMI/AAAAAAAAAjg/4cYgSuDiXQIRFvY288X80NQ0FO_NaXmPgCLcBGAs/s1600/18-1-1403512209234.jpg" alt="" /></div>
                            <div ><img className="w-20 h-20 bg-gray-300 w-20 h-20 mx-5" src="https://hettaobonkeodai.com/wp-content/uploads/2020/09/sup-lo.jpg" alt="" /></div>
                            <div><img className="w-20 h-20 bg-gray-300 w-20 h-20 mx-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqbo1gJouVWmTLsBly8NXVHlqsDgYo37ogiECpOB2_MBc6gD9tH4J6XMDwe58B42PAlHo&usqp=CAU" alt="" /></div>
                            <div><img className="w-20 h-20 bg-gray-300 w-20 h-20 mx-5" src="https://nld.mediacdn.vn/FC9ccccccccccccK6tcccccccccc/Image/2013/07/14192882romainlettuceisolatedonawhitebackground_75282.jpg" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="between   bg-[#f8f7f7] mt-20 pt-16 pb-16">


                <div className="font-serif text-[#6BAA14]  text-[30px] font-bold bottom-20" >
                    <p>TẠI SAO CHỌN CHÚNG TÔI ?</p>
                </div>

                <div className="flex justify-center ... mt-3">
                    <div>~~~~~~~~~~~~~~</div>
                    <div className="rounded-full  w-[30px] h-[30px]  justify-center items-center text-[#6BAA14]"><i className="fas fa-seedling text-2xl"></i></div>
                    <div>~~~~~~~~~~~~~~</div>
                </div>

                <div className="wrap  mt-10 ">

                    <div className=" grid grid-cols-3 items-center w-[1000px] m-auto">


                        <div className='w-[300px] m-auto'>
                            <div className="grid grid-cols-1  space-y-5  ">
                                <div className='flex flex-row space-x-4 items-center'>
                                    <div className="letter">
                                        <p className='ont-medium font-serif text-[25px] text-right'>Luôn tươi</p>
                                        <p className='text-right text-sm italic'>Bảo quản thực phẩm không cần dùng hóa chất hiệu quả.</p>
                                    </div>
                                    <div className="icon">
                                        <div className="rounded-full bg-[#6BAA14] w-[40px] h-[40px] flex justify-center items-center text-white"> <i className="fas fa-seedling"></i></div>
                                    </div>
                                </div>
                                <div className='flex flex-row space-x-4 items-center'>
                                    <div className="letter">
                                        <p className='ont-medium font-serif text-[25px] text-right'>Dinh dưỡng</p>
                                        <p className='text-right text-sm italic'>Cung cấp đầy đủ chất xơ, B12 và axit folic và những dưỡng chất khác.</p>
                                    </div>
                                    <div className="icon">
                                        <div className="rounded-full bg-[#6BAA14] w-[40px] h-[40px] flex justify-center items-center text-white"> <i className="fas fa-seedling"></i></div>
                                    </div>
                                </div>
                                <div className='flex flex-row space-x-4 items-center'>
                                    <div className="letter">
                                        <p className='ont-medium font-serif text-[25px] text-right'>Xuất xứ</p>
                                        <p className='text-right text-sm italic'>Nguồn gốc xuất xứ rõ ràng, đáng tin cậy cho người tiêu dùng.</p>
                                    </div>
                                    <div className="icon">
                                        <div className="rounded-full bg-[#6BAA14] w-[40px] h-[40px] flex justify-center items-center text-white"> <i className="fas fa-seedling"></i></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='w-[300px] m-auto'>
                            <img className='w-[300px] h-[270px]' src="https://img1.kienthucvui.vn/uploads/2019/10/30/anh-dep-cac-loai-rau-cu-qua_112150501.jpg" alt="" />
                        </div>
                        <div className='w-[300px] m-auto'>
                            <div className="grid grid-cols-1  space-y-5">
                                <div className='flex flex-row space-x-4 items-center'>
                                    <div className="icon">
                                        <div className="rounded-full bg-[#6BAA14] w-[40px] h-[40px] flex justify-center items-center text-white"> <i className="fas fa-seedling"></i></div>
                                    </div>
                                    <div className="letter">
                                        <p className='ont-medium font-serif text-[25px] text-left'>Kiểm định</p>
                                        <p className='text-left text-sm italic'>Được các cơ quan chức năng có thẩm quyền kiểm định về chất lượng.</p>
                                    </div>
                                </div>
                                <div className='flex flex-row space-x-4 items-center'>
                                    <div className="icon">
                                        <div className="rounded-full bg-[#6BAA14] w-[40px] h-[40px] flex justify-center items-center text-white"> <i className="fas fa-seedling"></i></div>
                                    </div>
                                    <div className="letter">
                                        <p className='ont-medium font-serif text-[25px] text-left'>Không thuốc xâu</p>
                                        <p className='text-left text-sm italic'>Nói không với thuốc trừ sâu và bất kì chất bảo quản khác.</p>
                                    </div>
                                </div>
                                <div className='flex flex-row space-x-4 items-center'>
                                    <div className="icon">
                                        <div className="rounded-full bg-[#6BAA14] w-[40px] h-[40px] flex justify-center items-center text-white"> <i className="fas fa-seedling"></i></div>
                                    </div>
                                    <div className="letter">
                                        <p className='ont-medium font-serif text-[25px] text-left'>Quy trình</p>
                                        <p className='text-left text-sm italic'>Quy trình sản xuất và thu hoạch được áp dụng các công nghệ tiên tiến.</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <div className="last mt-16">

                <div className=" text-[#6BAA14] text-[25px] font-medium bottom-20 mt-10" >
                    <h2>Chúng ta là gia đình</h2>
                </div>

                <div className="text-[30px] font-bold bottom-20 mt-3" >
                    <p>NÔNG DÂN THỰC PHẨM TƯƠI</p>
                </div>

                <div className="flex justify-center ... mt-3">
                    <div>~~~~~~~~~~~~~~</div>
                    <div className="rounded-full  w-[30px] h-[30px]  justify-center items-center text-[#6BAA14]"><i className="fas fa-seedling text-2xl"></i></div>
                    <div>~~~~~~~~~~~~~~</div>
                </div>


                <div className="people mt-12 mb-20">
                    <div className="grid grid-cols-3 w-[1000px] m-auto">
                        <div className='w-[300px] m-auto'>
                            <div className="grid grid-cols-1 ">
                                <div>
                                    <div className="rounded-full  w-[90%] h-[90%] m-auto  text-[#6BAA14]">
                                        <img className='rounded-full ' src="https://img.lovepik.com/photo/20211209/small/lovepik-vegetable-green-shed-hand-holding-a-vegetable-picture_501735291.jpg" alt="" />
                                    </div>
                                </div>
                                <div><p className='text-[25px] font-medium font-serif font-semibold pt-2'>Greenfarm</p></div>
                                <div><p className='text-sm pt-4'>Để có nguồn nông sản sạch, an toàn, xây dựng thương hiệu và lòng tin đối với khách hàng.</p></div>
                                <div className='pt-2'>
                                    <i className="fab fa-facebook w-[30px] h-[30px] text-[#3B5998]"></i>
                                    <i className="fab fa-google-plus w-[30px] h-[30px] text-[#34A853]"></i>
                                    <i className="fab fa-twitter-square w-[30px] h-[30px] text-[#1DA1F2]"></i>
                                    <i className="fab fa-instagram w-[30px] h-[30px] text-[#BC2A8D]"></i>
                                </div>
                            </div>
                        </div>
                        <div className='w-[300px] m-auto'>
                            <div className="grid grid-cols-1 ">
                                <div>
                                    <div className="rounded-full  w-[90%] h-[90%] m-auto  text-[#6BAA14]">
                                        <img className='rounded-full ' src="https://gwall.vn/wp-content/uploads/2018/05/trong-rau-thuy-canh-ket-hop-nuoi-ca.jpg" alt="" />
                                    </div>
                                </div>
                                <div><p className='text-[25px] font-medium font-serif font-semibold pt-2'>BigGreen VN</p></div>
                                <div><p className='text-sm pt-4'>Chú trọng tạo ra sản phẩm lành có chất lượng, các sản phẩm được đánh giá theo tiêu chuẩn.</p></div>
                                <div className='pt-2'>
                                    <i className="fab fa-facebook w-[30px] h-[30px] text-[#3B5998]"></i>
                                    <i className="fab fa-google-plus w-[30px] h-[30px] text-[#34A853]"></i>
                                    <i className="fab fa-twitter-square w-[30px] h-[30px] text-[#1DA1F2]"></i>
                                    <i className="fab fa-instagram w-[30px] h-[30px] text-[#BC2A8D]"></i>
                                </div>
                            </div>
                        </div>
                        <div className='w-[300px] m-auto'>
                            <div className="grid grid-cols-1 ">
                                <div>
                                    <div className="rounded-full  w-[90%] h-[90%] m-auto  text-[#6BAA14]">
                                        <img className='rounded-full ' src="https://vnn-imgs-a1.vgcloud.vn/znews-photo.zadn.vn/w1024/Uploaded/kbd_bcvi/2019_07_01/47457282_283784988993687_7206000972229886842_n.jpg" alt="" />
                                    </div>
                                </div>
                                <div><p className='text-[25px] font-medium font-serif font-semibold pt-2'>Rau sạch Ravi</p></div>
                                <div><p className='text-sm pt-4'>Chuyển giao những công nghệ mới, góp phần vào sự phát triển một nền nông nghiệp sạch.</p></div>
                                <div className='pt-2'>
                                    <i className="fab fa-facebook w-[30px] h-[30px] text-[#3B5998]"></i>
                                    <i className="fab fa-google-plus w-[30px] h-[30px] text-[#34A853]"></i>
                                    <i className="fab fa-twitter-square w-[30px] h-[30px] text-[#1DA1F2]"></i>
                                    <i className="fab fa-instagram w-[30px] h-[30px] text-[#BC2A8D]"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>





        </div>
    )
}

export default AboutPage