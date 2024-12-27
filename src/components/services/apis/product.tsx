import { nanoid } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Product {
    name: string;
    description: string;
    price: number;
    categoryId: string;
    stock : number;
}
export interface ProductId {id : string}
export type ProductAndId = Product & ProductId;  

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductAndId[], void>({
            query: () => 'products',
        }),
        getProductById: builder.query<ProductAndId, number>({
            query: (id) => `products/${id}`,
        }),
        getCategoryIdForProdcuts : builder.query<ProductAndId[], string>({
            query: (id) => `products/category/${id}`,
        }),
        addProduct: builder.mutation<ProductAndId, Product>({
            query: (product) => ({
                url: 'products',
                method: 'POST',
                body: {
                    ...product,
                    id : nanoid(5)
                },
            }),
        }),
        updateProduct: builder.mutation<Product, ProductAndId>({
            query: ({ id, ...patch }) => ({
                url: `products/${id}`,
                method: 'PATCH',
                body: patch,
            }),
        }),
        deleteProduct: builder.mutation<void , string>({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productApi;