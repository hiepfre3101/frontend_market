export type IconProps = {
   className?: string;
   width?: string;
   height?: string;
};
const FacebookIcon = ({ className, width = '1rem', height = '1rem' }: IconProps) => {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         version='1.1'
         width={width}
         height={height}
         stroke='currentColor'
         strokeWidth='1'
         strokeLinecap='round'
         strokeLinejoin='round'
         viewBox='0 0 512 512'
         className={className}
      >
         <g>
            <path
               fill='#1877f2'
               d='M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z'
               data-original='#1877f2'
            ></path>
            <path
               fill='#ffffff'
               d='M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z'
               data-original='#ffffff'
            ></path>
         </g>
      </svg>
   );
};

export default FacebookIcon;
