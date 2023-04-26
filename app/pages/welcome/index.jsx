import { StyleSheet, Text, View } from "react-native";
import GroupButton from "../../components/group_button";
import Button from "../../components/button";

function Welcome({handleSignInPress, handleSignUpPress}) {
    return (
        <>
            <Text style={[styles.title, styles.white_text]}>Bem vindo!</Text>
            
            <GroupButton>
                <Button onPress={handleSignInPress} style={styles.button}>
                    Entrar
                </Button>
                <Button onPress={handleSignUpPress} style={styles.button}>
                    Registrar
                </Button>
            </GroupButton>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        alignSelf: 'flex-start',
        textAlign: "left",
        fontSize: "2rem",
        paddingTop: "2rem",
        color: "white",
        fontWeight: "bold",
        fontFamily: "Arial",
    },
    button: {
        width: '250px',
        textAlign: 'center',
    }
});

export default Welcome;