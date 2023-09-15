import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const svg = () => (
   <svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' width='1.2em' height='1.2em' viewBox='0 0 64 64'>
      <g id='a' />
      <g id='b'>
         <path d='M56.6348,17.1587l-22-6.1401c-.0879-.0244-.1816-.0244-.2695,0l-22,6.1401c-.2158,.0601-.3652,.2568-.3652,.4814v17.9899c-1.5966,2.4421-3,5.389-3,8.87,0,5.2266,3.2471,10.5,10.5,10.5,3.7006,0,6.6759-1.1032,8.6764-3.1733l6.2338,1.1353c.0303,.0054,.0596,.0083,.0898,.0083s.0596-.0029,.0898-.0083l22-4c.2373-.043,.4102-.25,.4102-.4917V17.6401c0-.2246-.1494-.4214-.3652-.4814Zm-11.6348-2.2092l5,1.3954v6.9744c0,.1499-.0625,.2852-.1768,.3818-.1143,.0972-.2607,.1372-.4053,.1118l-4-.667c-.2422-.04-.418-.2476-.418-.4932v-7.7033Zm-32,3.07l21-5.861V51.8708l-5.0773-.9244c1.8267-2.4495,2.4824-5.8118,1.8195-9.5582-.9873-5.5762-5.0176-7.0195-5.1885-7.0786-.1895-.0664-.4023-.0107-.5361,.1411-.1338,.1509-.1641,.3672-.0762,.5488,1.6904,3.5146,.8018,5.8359-.1562,6.4736-.5576,.3726-1.167,.2598-1.6689-.3052-.6602-.7422-.4189-1.8042,.0635-3.6172,.5684-2.1333,1.3457-5.0542-.0479-8.4678-2.082-5.0972-6.6982-4.082-6.7461-4.0698-.1445,.0337-.2666,.1313-.333,.2646s-.0693,.29-.0088,.4263c.0488,.1104,1.1748,2.7271-.6797,5.332-.3203,.4507-.6943,.938-1.0967,1.4634-.4032,.5259-.8335,1.0881-1.2676,1.685V18.0195Zm6.5,35.9805c-7.0117,0-9.5-5.1177-9.5-9.5,0-4.7886,2.9248-8.6055,5.0615-11.3926,.4092-.5352,.791-1.0322,1.1172-1.4912,1.6416-2.3057,1.2959-4.624,.9922-5.7021,1.1201-.0781,3.6602,.1836,5.0352,3.5469,1.2666,3.1025,.5684,5.7251,.0078,7.8325-.4805,1.8022-.8945,3.3584,.1543,4.5386,.8311,.9355,1.999,1.1226,2.9717,.4736,1.3955-.9297,2.0928-3.353,1.0449-6.4204,1.1455,.7964,2.8047,2.4688,3.373,5.6777,.6396,3.6128-.0576,6.9541-1.9141,9.167-1.8193,2.1699-4.626,3.27-8.3438,3.27Zm36.5-5.9473l-21,3.8183V12.1586l9,2.5118v7.9824c0,.7368,.5273,1.3589,1.2539,1.4795l4,.667c.082,.0137,.165,.0205,.2471,.0205,.3525,0,.6953-.124,.9688-.3555,.3369-.2856,.5303-.7031,.5303-1.145v-6.6953l5,1.3954v30.0332Z' />
      </g>
   </svg>
);

const OrderIcon = (props: Partial<CustomIconComponentProps>) => <Icon component={svg} {...props} />;

export default OrderIcon;
