import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import Header from '../../components/Header/HeaderSearch';
import Menu from "../../components/Menu/Menu";
import SearchList from "../../components/SearchList";
import { useEffect, useState } from "react";
import api from "../../api";

const Search = ({navigation}) => {
    const { signOut } = useAuth()
    const [search, setSearch] = useState();
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
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
    return(

        <View style={styles.Container}>
        <Header navigation={navigation}/>
        <ScrollView contentContainerStyle={{ rowGap: '24px', marginBottom: '4rem'}} style={styles.Searches}>
            <View>
                <TextInput
                    placeholder="Nome do usuário"
                    value={imageLink}
                    onChangeText={text => setSearch(text)}
                />
                {
                    isLoading ? <Text>Carregando...</Text> :
                    isError ? <Text>{error}</Text> :
                    users && users.map(user=><SearchList post={user}/>)
                }
            </View>
            <View style={{alignItems:'center', top:'75px'}}>
                <Text style={{color:"#fff", fontWeight:600, marginBottom:'20px', textAlign:'center'}}>Não há mais nenhum usuário com{'\n'} este nome ou similar.</Text>
            </View>
        </ScrollView>            
        <Menu navigation={navigation} />
    </View>
)
}

const styles = StyleSheet.create({
Container: {
    width: '100%',
    height: '100%',
},
Searches: {
    marginTop: '3rem',
    minHeight: '100%',
    width: '100%',
    backgroundColor: '#61364A',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '18px',
    padding: '16px',
    maringBottom: '24px'
}
});

export default Search;