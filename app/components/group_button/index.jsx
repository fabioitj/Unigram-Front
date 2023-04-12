import { StyleSheet, View } from "react-native"

function GroupButton({children}) {
    return (
        <View style={styles.group_button}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    group_button: {
        flex: 1,
        flexDirection: "column",
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",

    },
});

export default GroupButton;