import { StyleSheet, View } from "react-native"

const Menu = () => {
    return (
        <View style={styles.Menu}>
            <View style={styles.MenuButtom}>
                H
            </View>
            <View style={styles.MenuButtom}>
                B
            </View>
            <View style={styles.MenuButtom}>
                A
            </View>
            <View style={styles.MenuButtom}>
                P
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
        height: '3rem',
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
    },

})

export default Menu;