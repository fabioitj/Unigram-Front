import { StyleSheet, TouchableOpacity, View } from "react-native";
import { IoHomeOutline, IoSearchOutline, IoAddOutline, IoPersonOutline } from "react-icons/io5"

const Menu = ({navigation}) => {
    return (
        <View style={styles.Menu}>
            <View style={styles.MenuButtom}>
                <TouchableOpacity onPress={() => navigation.navigate("Feed")}>
                <IoHomeOutline style={styles.ButtonIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.MenuButtom}>
                <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                <IoSearchOutline style={styles.ButtonIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.MenuButtom}>
                <TouchableOpacity>
                <IoAddOutline style={styles.ButtonIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.MenuButtom}>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <IoPersonOutline style={styles.ButtonIcon} />
                </TouchableOpacity>
            </View>
        </View>
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