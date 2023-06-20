import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native"
import { IoArrowBackOutline, IoSettingsOutline } from "react-icons/io5"
import { LinearGradient } from "expo-linear-gradient"

const HeaderMyProfile = ({navigation, user}) => {


    return (
        <LinearGradient colors={["#E8554C", "#C74569"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.Header}>
            <View style={styles.HeaderButtom}>
                <TouchableOpacity onPress={() => navigation.navigate("Feed")}>
                    <IoArrowBackOutline style={{color:"#fff", width: '100%', height: '100%'}}/>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{color:"#fff", fontWeight:600, fontSize:18, paddingTop:'15px'}}>@{user.username}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
                    <IoSettingsOutline style={{color:"#fff", width:'25', height:'25', paddingTop:'15px'}}/>
                </TouchableOpacity>
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
        top: '0',
        width: '100%',
        height: '9rem',
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
        paddingTop:'15px'
    },
    logo: {
        width:30,
        height:37.88,
    },

})

export default HeaderMyProfile;