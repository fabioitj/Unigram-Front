import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView } from "react-native";
import Header from '../../components/Header/HeaderSearch';
import Menu from "../../components/Menu/Menu";
import SearchList from "../../components/SearchList";

const Search = ({navigation}) => {
    return(

        <View style={styles.Container}>
        <Header navigation={navigation}/>
        <ScrollView contentContainerStyle={{ rowGap: '24px', marginBottom: '4rem'}} style={styles.Searches}>
            <View>
                <SearchList/>
            </View>
            <View style={{alignItems:'center', top:'75px'}}>
                <Text style={{color:"#fff", fontWeight:600, marginBottom:'20px', textAlign:'center'}}>Não há mais nenhum usuário com{'\n'} este nome ou similar.</Text>
            </View>
        </ScrollView>            
        <Menu />
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