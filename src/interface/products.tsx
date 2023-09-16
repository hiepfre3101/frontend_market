export interface IProduct {
   productId: any;
   quantity: any;
   _id: string;
   name: string;
   favorite: number;
   price: number;
   desc: string;
   categoryId: string;
   stock: number;
   solded: number;
   images: { url: string; public_id?: string; _id?: string }[];
   discount: number;
}
