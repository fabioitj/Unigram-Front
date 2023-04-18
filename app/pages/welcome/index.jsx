import { StyleSheet, Text, View } from "react-native";
import GroupButton from "../../components/group_button";
import Button from "../../components/button";

function Welcome({handleSignInPress, handleSignUpPress}) {
    return (
        <>
            <Text style={[styles.title, styles.white_text]}>Bem vindo!</Text>
            
            <GroupButton>
                <Button onPress={handleSignInPress}>
                    Entrar
                </Button>
                <Button onPress={handleSignUpPress}>
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
        paddingLeft: "2rem",
        fontSize: "2rem",
        paddingTop: "2rem",
        color: "white",
        fontWeight: "bold",
        fontFamily: "Arial",
    },
});

export default Welcome;