import { Carousel } from 'antd';
const Banner = () => {
   return (
      <div>
         <Carousel autoplay>
            <div>
               <img
                  className='w-screen'
                  src='https://theme.hstatic.net/1000309753/1000718324/14/slideshow_1.jpg?v=209'
                  alt=''
               />
            </div>
            <div>
               <img
                  className='w-screen'
                  src='https://theme.hstatic.net/1000309753/1000718324/14/slideshow_2.jpg?v=209'
                  alt=''
               />
            </div>
            <div>
               <img
                  className='w-screen'
                  src='https://theme.hstatic.net/1000309753/1000718324/14/slideshow_3.jpg?v=209'
                  alt=''
               />
            </div>
         </Carousel>
      </div>
   );
};

export default Banner;
