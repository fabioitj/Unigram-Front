import { StyleSheet, View, ScrollView, Text, Touchable, TouchableOpacity } from "react-native"
import Header from "../../components/Header/HeaderMessages";
import Chats from "../../components/Chats/index";
import Menu from "../../components/Menu/Menu";
import AddButton from "../../components/Buttons/AddButton";

const Messages = ({navigation}) => {  
    return (
        <View style={styles.Container}>
            <Header navigation={navigation}/>
            <ScrollView contentContainerStyle={{ rowGap: '24px', marginBottom: '4rem'}} style={styles.Messages}>
                <View>
                    <Chats />
                    <Chats />
                    <Chats />
                </View>
                <View style={{alignItems:'center', top:'75px'}}>
                    <Text style={{color:"#d8d8d8", fontWeight:400, marginBottom:'20px'}}>Você não possui mais conversas no momento.</Text>
                    <TouchableOpacity>
                    <Text style={{color:"#fff", fontWeight:700}}>Iniciar nova conversa</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>      
            <View style={{position: 'fixed', bottom: '5rem', right: '1rem'}}>
            <AddButton/>
            </View>      
            <Menu navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%',
    },
    Messages: {
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

export default Messages;