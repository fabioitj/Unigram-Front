import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput } from "react-native"
import { IoArrowBackOutline } from "react-icons/io5"
import { LinearGradient } from "expo-linear-gradient"
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import api from "../../api";

const HeaderSearch = ({navigation, setUsers, setIsLoading, setIsError, setError}) => {
    const [search, setSearch] = useState("");
    const { signOut } = useAuth()

    useEffect(() => {
        setIsLoading(true);
        if (search.length < 3) {
            setIsLoading(false);
            return;
        }
        api.findUser(search)
            .then(res => {
                switch (res.status) {
                    case 401:
                        signOut();
                    case 200:
                        setUsers(res.data);
                        break;
                    default:
                        throw new Error(res.data);
                }
            })
            .catch(err => {
                setIsError(true);
                if ( err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Ocorreu um erro ao buscar os usuários.");
                }
            })
            .finally(()=> {
                setIsLoading(false);
            })
    }, [search]);

    return (
        <LinearGradient colors={["#E8554C", "#C74569"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.Header}>
             <View style={styles.HeaderButtom}>
                <TouchableOpacity onPress={() => navigation.push("Feed")}>
                <IoArrowBackOutline style={{color:"#fff", width: '100%', height: '100%'}}/>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:"#fff", borderRadius:'25px', width:'60%', height:'60%'}}>
                <TextInput placeholder="Buscar" style={styles.Search} value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </View>
            <View style={styles.HeaderButtom}>
                <Image
                    source={require("../../../assets/logo_branca.png")}
                    style={styles.logo}
                />
            </View>
        </LinearGradient>
        )

}

const styles = StyleSheet.create({
    Header: {
        position: 'fixed',
        alignItems:'center',
        zIndex: 999,
        top: '0',
        width: '100%',
        height: '4rem',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        fontWeight: "bold",
        fontFamily: "Arial",
        paddingHorizontal: '1rem',
        backgroundColor: 'linear-gradient(90deg, rgba(232,85,76,1) 0%, rgba(199,69,105,1) 100%)'
    },  
    HeaderButtom: {
        width: '32px',
        textAlign: 'center',
    },
    logo: {
        width:30,
        height:37.88,
    },
    Search: {
        height:'100%',
        paddingLeft:'15px',
        fontWeight:'600',
        color:'rgba(232,85,76,1) 100%'
    }

})

export default HeaderSearch;