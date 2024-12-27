import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

interface ProductIdAndImages {
    productId : string,
    imgPath : string
}
export const ProductPosts = (_productId : string ,_val : ProductIdAndImages[]) => {
    if(_val && _productId){
        return _val.filter((product, _key)=>{
            return product.productId == _productId;
        })
    }
}
const ImagesApi = createApi({
    reducerPath : "images",
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:3001/"
    }),
    endpoints : (builder) => ({
        addPost: builder.mutation<void, ProductIdAndImages>({
            query: (body) => ({
              url: `images`,
              method: 'POST',
              body,
            }),
        }),
        getPostProductId: builder.query<ProductIdAndImages[], void>({
            query: () => ({
                url: `images`,
                method: 'GET',
            }),
        }),
    }),
})
export const imagesApi = ImagesApi;
export const {useAddPostMutation , useGetPostProductIdQuery} = ImagesApi;