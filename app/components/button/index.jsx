import { StyleSheet } from "react-native";
import { Text, TouchableOpacity } from "react-native";

function Button({onPress, highlight = false, children}) {
    return (
        <TouchableOpacity style={!highlight ? styles.button : styles.buttonHighlighted} onPress={onPress}>
            <Text style={!highlight ? styles.white_text : styles.colorful_text}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: "25px",
        borderColor: "white",
        borderWidth: "1px",
        paddingVertical: "10px",
        paddingHorizontal: "40px",
        width: "100%",
        height: "48px",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonHighlighted: {
        borderRadius: "25px",
        backgroundColor: 'white',
        paddingVertical: "10px",
        paddingHorizontal: "40px",
        width: "100%",
        height: "48px",
        alignItems: "center",
        justifyContent: "center"
    },
    white_text: {
        color: "white",
        fontWeight: "bold",
        fontFamily: "Arial",
    },
    colorful_text: {
        color: '#C74569',
        fontWeight: "bold",
        fontFamily: "Arial",
    }
})

export default Button;