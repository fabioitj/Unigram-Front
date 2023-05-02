import { StyleSheet, View, Image, TouchableOpacity } from "react-native"
import { IoMdNotificationsOutline } from "react-icons/io"
import { IoChatbubblesOutline } from "react-icons/io5"

const HeaderFeed = ({navigation}) => {
    return (
        <View style={styles.Header}>
            <View style={styles.HeaderButtom}>
            <Image
                source={require("../../../assets/logo_branca.png")}
                style={styles.logo}
            />
            </View>
            <View style={styles.HeaderButtomGroup}
            >
                
            <View style={styles.HeaderButtom}>
                <TouchableOpacity onPress={()=>{navigation.navigate("Notifications")}}>
                <IoMdNotificationsOutline style={{color: "#fff", height: '100%', width: '100%'}}/>
                </TouchableOpacity>
            </View>
            <View style={styles.HeaderButtom}>
                <TouchableOpacity onPress={()=>{navigation.navigate("Messages")}}>
                <IoChatbubblesOutline style={{color: "#fff", height: '100%', width: '100%'}}/>
                </TouchableOpacity>
            </View>
            </View>
        </View>
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
    HeaderButtomGroup: {
        display: 'flex',
        flexDirection: 'row',
        gap: '18px'
    },
    HeaderButtom: {
        width: '32px',
        textAlign: 'center',
    },
    logo: {
        width:30,
        height:37.88,
    }
})

export default HeaderFeed;