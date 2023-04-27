import { StyleSheet, View, Image, TouchableOpacity } from "react-native"
import { IoArrowBackOutline } from "react-icons/io5"

const HeaderNotifications = () => {


    return (
        <View style={styles.Header}>
             <View style={styles.HeaderButtom}>
                <TouchableOpacity>
                <IoArrowBackOutline style={{color:"#fff", width: '100%', height: '100%'}}/>
                </TouchableOpacity>
            </View>

            <View style={styles.HeaderButtom}>
                <Image
                    source={require("../../../assets/logo.png")}
                    style={styles.logo}
                />
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
    HeaderButtom: {
        width: '32px',
        textAlign: 'center',
    },
    logo: {
        width:30,
        height: 30,
    },

})

export default HeaderNotifications;