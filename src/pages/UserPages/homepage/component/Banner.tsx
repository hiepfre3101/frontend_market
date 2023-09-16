import { Carousel } from 'antd';
const Banner = () => {
   return (
      <div>
         <Carousel autoplay>
            <div>
               <img src='https://theme.hstatic.net/1000309753/1000718324/14/slideshow_1.jpg?v=209' alt='' />
            </div>
            <div>
               <img src='https://theme.hstatic.net/1000309753/1000718324/14/slideshow_2.jpg?v=209' alt='' />
            </div>
            <div>
               <img src='https://theme.hstatic.net/1000309753/1000718324/14/slideshow_3.jpg?v=209' alt='' />
            </div>
         </Carousel>
         {/* <div className='flex justify-content-center w-[80%]'>
            <div>
               <img
                  src='http://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/banner36.jpg'
                  alt=''
                  className='w-[80%]'
               />
            </div>
            <div>
               <img
                  src='http://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/banner35.jpg'
                  alt=''
                  className='w-[80%]'
               />
            </div>
            <div>
               <img
                  src='http://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/banner34.jpg'
                  alt=''
                  className='w-[80%]'
               />
            </div>
         </div> */}
      </div>
   );
};

export default Banner;
