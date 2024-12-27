import { createContext, useEffect, useState } from "react";
import { ReactNodes } from "../../site-components/layout";
import { UserandId } from "../apis/user";


export let UserInfo  : UserandId = {
    id : "Empty",
    userName : "",
    age : 0,
    password : "",
    role : "member",
    name : "",
    email : ""
}

export let AuthContext = createContext({setAppUser : (_param : React.SetStateAction<UserandId>):void=>{},user : UserInfo});

const AuthComponents =({children} : ReactNodes)=>{
    let [user , setUser] = useState (UserInfo);
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
      }, [setUser]);
    
      useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
      }, [user]);
    return (
        <AuthContext.Provider value={{setAppUser : setUser, user}}>
            {children}
        </AuthContext.Provider>
    )
}
export const Auth = AuthComponents;