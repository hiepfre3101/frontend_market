import { IconProps } from './GlassIcon';

const Load
 = ({ className, width = '1rem', height = '1rem' }: IconProps) => {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         version='1.1'
         width={width}
         height={height}
         viewBox='0 0 128 128'
         strokeWidth='2'
         strokeLinecap='round'
         strokeLinejoin='round'
         className={className}
      >
         <g>
            <path
               d='M16 64a4 4 0 0 1-8 0C8 33.121 33.121 8 64 8c15.391 0 29.632 6.133 40 16.693V12a4 4 0 0 1 8 0v24a4 4 0 0 1-4 4H84a4 4 0 0 1 0-8h15.908C90.933 21.904 78.022 16 64 16c-26.467 0-48 21.533-48 48zm100-4a4 4 0 0 0-4 4c0 26.467-21.533 48-48 48-14.022 0-26.933-5.904-35.908-16H44a4 4 0 0 0 0-8H20a4 4 0 0 0-4 4v24a4 4 0 0 0 8 0v-12.693C34.368 113.867 48.609 120 64 120c30.879 0 56-25.121 56-56a4 4 0 0 0-4-4z'
               fill='#e80808'
               data-original='#000000'
               opacity='1'
            ></path>
         </g>
      </svg>
   );
};

export default Load
;
