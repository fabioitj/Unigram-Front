import { StyleSheet, View, ScrollView, Text } from "react-native"
import Header from "../../components/Header/HeaderMessages";
import Menu from "../../components/Menu/Menu";

const Notifications = ({navigation}) => {  
    return (
        <View style={styles.Container} >
            <Header navigation={navigation}/>
            <ScrollView contentContainerStyle={{ rowGap: '24px', marginBottom: '4rem'}} style={styles.Feed}>
                <Text>OI</Text>
            </ScrollView>
            <Menu />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    Feed: {
        marginTop: '3rem',
        minHeight: '100%',
        width: '100%',
        backgroundColor: '#61364A',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '18px',
        padding: '24px',
        maringBottom: '24px'
    }
});

export default Notifications;