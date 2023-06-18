import { createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [token, setToken] =  useState(()=>{
        const oldToken = sessionStorage.getItem('@unigram-session-token');
        return oldToken || undefined;
    });
    const [loggedIn, logIn] = useState(()=>{
        return !!token;
    });

    const signIn = async (username, password) => {
        SignIn(username, password)
            .then(res => {
                switch (res.status) {
                    case 401:
                        throw new Error("Usuário ou senha inválidos.");
                    case 200:
                        const { token } = res.data;
                        sessionStorage.setItem('@unigram-session-token', token);
                        setLogged(true);
                        setToken(token)
                        navigation.navigate('Feed');
                        break;
                    default:
                        throw new Error(res.data);
                }
            })
     }

     const signOut = async () => {
         sessionStorage.removeItem('@unigram-session-token');
         setLogged(false);
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