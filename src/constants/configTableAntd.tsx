import { IProductExpanded } from '../interfaces/product';
import { IResponseHasPaginate } from '../interfaces/base';
type ProductDataType = {
   key: string;
   _id: string;
   image: string;
   productName: string;
   category: string;
   subCategory: string;
   brand: string;
   price: number;
   stock: 'Còn hàng' | 'Hết hàng';
};

export const productData = (data: IResponseHasPaginate<IProductExpanded>): ProductDataType[] => {
   return data.body.docs.map((product, index) => ({
      key: index.toString(),
      _id: product._id,
      productName: product.productName,
      price: product.price,
      brand: product.brandId.brandName,
      category: product.categoryId.cateName,
      subCategory: product.subCateId.subCateName,
      stock: product.amount > 0 ? 'Còn hàng' : 'Hết hàng',
      image: product.images[0]
   }));
};
