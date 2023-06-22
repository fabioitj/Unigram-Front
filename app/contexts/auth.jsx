import { createContext, useState, useContext } from "react";
import api from "../api";

const AuthContext = createContext();

const AuthProvider = ({children, navigation}) => {
    const [token, setToken] =  useState(()=>{
        const oldToken = localStorage.getItem('@unigram-session-token');
        return oldToken || undefined;
    });
    const [loggedIn, logIn] = useState(()=>{
        return !!token;
    });

    const signIn = async (username, password) => {
        return api.login(username, password)
            .then(res => {
                console.log(res.status);
                switch (res.status) {
                    case 200:
                        const { token } = res.data;
                        localStorage.setItem('@unigram-session-token', token);
                        logIn(true);
                        setToken(token)
                        break;
                    default:
                        throw new Error(res.data);
                }
            })
    }

     const signOut = async () => {
         localStorage.removeItem('@unigram-session-token');
         logIn(false);
         setToken(undefined);
     }

     return (
         <AuthContext.Provider value={{ token, loggedIn, signIn, signOut }}>
             {children}
         </AuthContext.Provider>
     )
}

const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}
export { AuthContext, AuthProvider, useAuth }