import { nanoid } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface User {
    name: string;
    email: string;
    age : number;
    userName : string,
    password : string,
    role : "admin" | "member"
}
export interface UserandId extends User {
    id : string
}
export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        getByIdUser: builder.mutation<User, string>({
            query: (id ) => ({
                url: `users/${id}`,
                method: 'GET',
                body: id,
            }),
        }),
        getUsers: builder.query<UserandId[], void>({
            query: () => 'users'
        }),
        deleteUser : builder.mutation<void, string>({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE',
            }),
        }),
        updateUser: builder.mutation<void, UserandId>({
            query: (body) => ({
              url: `users/${body.id}`,
              method: 'PUT',
              body: body,
            }),
          }),
        postUser : builder.mutation<void, User>({
            query: (body) => ({
                url: 'users/',
                method: 'POST',
                body: {id : nanoid(5), ...body},
            })
        })
    }),
});
export const { useGetUsersQuery, useGetByIdUserMutation,
     useDeleteUserMutation, usePostUserMutation ,
      useUpdateUserMutation } = usersApi;
