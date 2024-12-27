import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Category {
    id: string;
    description : string;
}

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        getCategories: builder.query<Category[], void>({
            query: () => 'categories',
        }),
        getByIdCategory : builder.query<Category, string>({
            query: (id) => `categories/${id}`,  
        }),
        postCategory: builder.mutation<void, Category>({
            query: (newCategory) => ({
                url: 'categories',
                method: 'POST',
                body: newCategory,
            }),
        }),
    }),
});

export const { useGetCategoriesQuery, useGetByIdCategoryQuery, usePostCategoryMutation } = categoryApi;