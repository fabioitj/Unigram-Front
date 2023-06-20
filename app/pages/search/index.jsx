import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView, TextInput } from "react-native";
import Header from '../../components/Header/HeaderSearch';
import Menu from "../../components/Menu/Menu";
import SearchList from "../../components/SearchList";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";

const Search = ({navigation}) => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    return(

        <View style={styles.Container}>
        <Header navigation={navigation} setUsers={setUsers} setIsLoading={setIsLoading} setIsError={setIsError} setError={setError}/>
        <ScrollView contentContainerStyle={{ rowGap: '24px', marginBottom: '4rem'}} style={styles.Searches}>
            <View style={{alignItems:'center', top:'15px'}}>
                {
                    isLoading ? <Text>Carregando...</Text> :
                    isError ? <Text>{error}</Text> :
                    users && users.length > 0 ? users.map(user=><SearchList navigation={navigation} user={user}/>) : <Text style={{color:"#fff", fontWeight:600, marginBottom:'20px', textAlign:'center'}}>Não há mais nenhum usuário com{'\n'} este nome ou similar.</Text>
                }
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