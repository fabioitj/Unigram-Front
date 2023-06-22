import { StyleSheet, View, ScrollView, Text, Touchable, TouchableOpacity } from "react-native"
import Header from "../../components/Header/HeaderMessages";
import Chats from "../../components/Chats/index";
import Menu from "../../components/Menu/Menu";
import AddButton from "../../components/Buttons/AddButton";
import api from "../../api";
import { useAuth } from "../../contexts/auth";
import { useEffect, useState } from "react";

const Messages = ({navigation}) => {  
    const { signOut } = useAuth()
    const [chats, setChats] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        api.getMessages()
            .then(res => {
                switch (res.status) {
                    case 401:
                        signOut();
                    case 200:
                        setChats(res.data);
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
                    setError("Ocorreu um erro ao carregar as mensagens.");
                }
            })
            .finally(()=> {
                setIsLoading(false);
            })
    }, []);

    const handleGoToConversation = () => {
        
    }

    return (
        <View style={styles.Container}>
            <Header navigation={navigation}/>
            <ScrollView contentContainerStyle={{ rowGap: '24px', marginBottom: '4rem'}} style={styles.Messages}>
                <View>
                {
                    isLoading ? <Text>Carregando...</Text> :
                    isError ? <Text>{error}</Text> :
                    chats ? chats.map(chat=> <Chats navigation={navigation} chat={chat}/>) : (<Text>Você não possui conversas no momento.</Text>)
                }
                </View>
                <View style={{alignItems:'center', top:'75px'}}>
                    <TouchableOpacity onPress={handleGoToConversation}>
                        <Text style={{color:"#fff", fontWeight:700}}>Iniciar nova conversa</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>      
            <View style={{position: 'fixed', bottom: '5rem', right: '1rem'}}>
            <AddButton callback={handleGoToConversation}/>
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