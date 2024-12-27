import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { contactInfos } from "../../site-components/contact/contact";
import { createApi } from "@reduxjs/toolkit/query/react";


export const ContactPushed = createApi({
    reducerPath : "contact",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (build) => ({
        postContact: build.mutation<void,contactInfos>({
         query: (body) => ({
           url: `contact`,
           method: 'POST',
           body: body,
         }),
       }),
    })
})
export const contactapi = ContactPushed
export const {usePostContactMutation} = ContactPushed