import { IProduct } from './../interface/products';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const product = createApi({
   reducerPath: 'products',
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:8000/api',
      credentials: 'include'
   }),
   tagTypes: ['products'],
   endpoints: (builder) => ({
      getAllProduct: builder.query<{ body: IProduct[] }, void>({
         query: () => ({
            url: '/products?_expand',
            method: 'GET',
            credentials: 'include'
         }),
         providesTags: ['products']
      }),
      searchProduct: builder.mutation<{ body: IProduct[] }, string>({
         query: (option) => ({
            url: '/products?_expand' + option,
            method: 'GET',
            credentials: 'include'
         }),
         invalidatesTags: ['products']
      }),
      getAllProductById: builder.query({
         query: (id) => ({
            url: '/products/' + id,
            method: 'GET',
            credentials: 'include'
         }),
         providesTags: ['products']
      })
   })
});

export const { useGetAllProductQuery, useGetAllProductByIdQuery, useSearchProductMutation } = product;
export default product;
