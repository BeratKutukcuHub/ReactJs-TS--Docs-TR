import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from './apis/user';
import { useDispatch, useSelector } from 'react-redux';
import { productApi } from './apis/product';
import { categoryApi } from './apis/category';
import { LoginReducer } from './slices/loginslice';
import { contactapi } from './apis/contact';
import { imagesApi } from './apis/images';

export const store = configureStore({
    reducer: {
        [contactapi.reducerPath] : contactapi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [imagesApi.reducerPath] : imagesApi.reducer,
        login: LoginReducer,
    },
    middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                usersApi.middleware,
                productApi.middleware,
                categoryApi.middleware,
                contactapi.middleware,
                imagesApi.middleware
            ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();