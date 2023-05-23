import React, { createContext, useState } from "react";
import { signInApi, signUpApi } from "../api/userApi";
import { isNull } from "../util/validation";
import { MMKV } from "react-native-mmkv";

export const AuthContext = createContext({});

export const mmkvStorage = new MMKV();

function AuthProvider({children}) {
    const [user, setUser] = useState({});

    const validateSignIn = (email, password) => {
        return (isNull(email) || isNull(password));
    }

    const validateSignUp = (data) => {
        return (
            isNull(data.name) || 
            isNull(data.username) || 
            isNull(data.name) || 
            isNull(data.email) || 
            isNull(data.birth_date) || 
            isNull(data.password) || 
            (data.password !== data.confirm_password)
        );
    }

    const signIn = (email, password, navigation) => {
        if(validateSignIn(email, password)) return;

        signInApi(email, password)
            .then((response) => {
                setUser(response.data);
                mmkvStorage.set('user', JSON.stringify(response.data));
                navigation.navigate('Feed');
            })
            .catch((response) => {
                alert(response.response.data.message);
            })
    }

    const signUp = (data, goBackToWelcome) => {
        if(validateSignUp(data)) return;

        signUpApi(data)
            .then((response) => {
                goBackToWelcome();
            })
            .catch((response) => {
                alert(response.response.data.message);
            })
    }

    const signOut = () => {
        setUser({});
        mmkvStorage.delete('user');
    }

    const validateAlreadySignedIn = (navigation) => {
        const savedUser = mmkvStorage.getString('user');
        if(savedUser) {
            setUser(JSON.parse(savedUser));
            navigation.navigate('Feed');
        }
    }

    return (
        <AuthContext.Provider value={{user, setUser, signIn, signUp, signOut, validateAlreadySignedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;