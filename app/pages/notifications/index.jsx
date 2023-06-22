import { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import api from "../../api";
import Header from '../../components/Header/HeaderNotifications';
import Menu from "../../components/Menu/Menu";
import NotificationList from "../../components/NotificationList";
import { useAuth } from "../../contexts/auth";

const Notifications = ({navigation}) => {
    const { signOut } = useAuth()
    const [notifications, setNotifications] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsError(false);
        setIsLoading(true);
        api.getPendingConnection()
            .then(res => {
                setNotifications(res.data);
            })
            .catch(err => {
                setIsError(true);
                if ( err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Ocorreu um erro ao carregar o feed.");
                }
            })
            .finally(()=> {
                setIsLoading(false);
            })
    }, []);
    return(

        <View style={styles.Container}>
        <Header navigation={navigation}/>
        <ScrollView contentContainerStyle={{ rowGap: '24px', marginBottom: '4rem'}} style={styles.Notifications}>
            <View>
                { (isLoading || isError || notifications.length === 0) && (
                    <Text style={{color: '#fff'}}>
                        { isLoading ? 'Carregando...' : isError ? error : "Nenhuma notificação" }
                    </Text>
                    )
                }
                {
                    (!isLoading && !isError && notifications && notifications.length > 0) && notifications.map(notification=><NotificationList navigation={navigation} notification={notification}/>)
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
Notifications: {
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

export default Notifications;