import { StyleSheet, View } from "react-native"

const Header = () => {
    return (
        <View style={styles.Header}>
            <View style={styles.HeaderButtom}>
                Logo
            </View>
            <View style={styles.HeaderButtomGroup}
            >
            <View style={styles.HeaderButtom}>
                N
            </View>
            <View style={styles.HeaderButtom}>
                C
            </View>
            </View>
        </View>
        )
}

const styles = StyleSheet.create({
    Header: {
        position: 'fixed',
        zIndex: 999,
        top: '0',
        width: '100%',
        height: '3rem',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        fontWeight: "bold",
        fontFamily: "Arial",
        paddingTop: '1rem',
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

})

export default Header;