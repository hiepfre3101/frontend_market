import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const svg = () => (
   <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.0'
      width='1.5em'
      height='1.5em'
      viewBox='0 0 512.000000 512.000000'
      preserveAspectRatio='xMidYMid meet'
   >
      <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='currentColor' stroke='none'>
         <path d='M4013 5110 c-76 -14 -150 -46 -218 -95 -33 -24 -844 -828 -1801 -1787 -1353 -1354 -1744 -1751 -1753 -1778 -5 -19 -63 -320 -127 -668 -128 -695 -126 -677 -68 -736 59 -58 41 -60 736 68 348 64 649 122 668 127 27 9 424 400 1778 1753 959 957 1763 1768 1786 1801 128 180 139 403 30 594 -35 61 -563 593 -637 642 -32 21 -86 47 -120 58 -73 24 -201 34 -274 21z m183 -306 c43 -15 82 -49 320 -288 239 -238 273 -277 288 -320 39 -120 12 -188 -136 -333 l-103 -103 -403 403 -402 402 107 107 c148 146 209 171 329 132z m-241 -854 l400 -400 -1478 -1478 -1477 -1477 -402 403 -403 402 1475 1475 c811 811 1477 1475 1480 1475 3 0 185 -180 405 -400z m-2873 -3471 c-9 -8 -733 -141 -739 -136 -4 4 123 707 133 736 3 10 108 -88 309 -289 168 -168 301 -307 297 -311z' />
      </g>
   </svg>
);

const PencilIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={svg} {...props} />;

export default PencilIcon;
