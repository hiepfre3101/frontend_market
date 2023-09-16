import { ISubCategories } from './subCategories';

export interface ICategories {
   id: string;
   cateName: string;
   subCategories: ISubCategories[];
   image: string;
}
