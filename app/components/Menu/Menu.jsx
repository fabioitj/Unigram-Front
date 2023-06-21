import { StyleSheet, TouchableOpacity, View } from "react-native";
import { IoHomeOutline, IoSearchOutline, IoAddOutline, IoPersonOutline } from "react-icons/io5"
import { LinearGradient } from "expo-linear-gradient";

const Menu = ({navigation}) => {
    return (
        <LinearGradient colors={["#E8554C", "#C74569"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.Menu}>
            <View style={styles.MenuButtom}>
                <TouchableOpacity onPress={() => navigation.push("Feed")}>
                <IoHomeOutline style={styles.ButtonIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.MenuButtom}>
                <TouchableOpacity onPress={() => navigation.push("Search")}>
                <IoSearchOutline style={styles.ButtonIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.MenuButtom}>
                <TouchableOpacity onPress={() => navigation.push("NewPost")}>
                <IoAddOutline style={styles.ButtonIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.MenuButtom}>
                <TouchableOpacity onPress={() => navigation.push("Profile")}>
                <IoPersonOutline style={styles.ButtonIcon} />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    Menu: {
        position: 'fixed',
        zIndex: 999,
        bottom: '0',
        width: '100%',
        height: '4rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: '1rem',
        backgroundColor: 'linear-gradient(90deg, rgba(232,85,76,1) 0%, rgba(199,69,105,1) 100%)'
    },
    MenuButtom: {
        width: '32px',
        textAlign: 'center',
        height: '32px',
    },
    ButtonIcon: {
        color:"#fff", 
        width: '100%', 
        height: '100%'
    }
})

export default Menu;