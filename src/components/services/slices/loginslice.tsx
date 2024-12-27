import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User, UserandId } from '../apis/user';

interface LoginState {
    isLoggedIn: boolean;
    isGetValues : boolean;
    description : string;
    user : UserandId | null;
}

const initialState: LoginState = {
    isLoggedIn: false,
    description : "Giriş Başarılı",
    user: null,
    isGetValues : false,
};
type LoginPayload = {
    username : string,
    password : string,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logout : (state) => {
            state.isLoggedIn = false;
            state.description = "Çıkış Başarılı";
            state.user = null;
            state.isGetValues = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginCheck.fulfilled, (state, action) => {
            state.description = "Sunucuya Bağlanıldı."
            state.isGetValues = true;
            state.isLoggedIn = action.payload?.lenght <= 0? false : true;
            state.user = action.payload;
        });
        builder.addCase(loginCheck.rejected, (state) => {
            state.isLoggedIn = false;
            state.user = null;
            state.isGetValues = false;
            state.description = "Daha Sonra Tekrar Deneyin...";
        });
}});
export const loginCheck = createAsyncThunk(
    "login/loginCheck",
    async (payload : LoginPayload) => {
        const response = await fetch(`http://localhost:3001/users`,{
            headers: {
                'Content-Type': 'application/json',
              },
            method:"GET",
        }
        );
        const data = await response.json();
        const user = data.find((user: User) => user.userName === payload.username && user.password === payload.password);
        return user;
    }
)
export const { logout } = loginSlice.actions;
export const LoginReducer =  loginSlice.reducer;