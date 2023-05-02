import { StyleSheet, View, ScrollView } from "react-native";
import Header from '../../components/Header/HeaderNotifications';
import Menu from "../../components/Menu/Menu";
import NotificationList from "../../components/NotificationList";

const Notifications = ({navigation}) => {
    return(

        <View style={styles.Container}>
        <Header navigation={navigation}/>
        <ScrollView contentContainerStyle={{ rowGap: '24px', marginBottom: '4rem'}} style={styles.Notifications}>
            <View>
                <NotificationList/>
                <NotificationList/>
                <NotificationList/>
                <NotificationList/>
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