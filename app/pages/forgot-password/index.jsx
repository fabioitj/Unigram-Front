import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Image, Text } from "react-native";
import { View } from "react-native-web";
import Button from "../../components/button";
import Field from "../../components/Field";

function ForgotPassword({ backToWelcome }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleOnSignIn = () => {
        
    };

    return (
        <View style={{ flex: 1, width: '100%', padding: 24, flexDirection: 'column' }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={backToWelcome}>
                    <Image
                        source={require("../../../assets/back_arrow.png")}
                        style={styles.backButton}
                    />
                </TouchableOpacity>
                <Text style={{ width: '100%', fontSize: 24, fontWeight: 500, color: 'white', textAlign: 'center' }}>Redefinir senha</Text>
                <View style={{ width: 26 }}></View>
            </View>
            <View style={{ width: '100%', gap: 64, marginTop: 36, paddingHorizontal: 32 }}>
                <View style={{ flex: 1, width: '100%' }}>
                    <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 16, lineHeight: '1.5rem'}}>
                        Insira seu e-mail cadastrado abaixo. Nossa equipe enviará para sua caixa de entrada uma <strong>nova senha</strong> para liberar seu acesso.
                    </Text>
                </View>
                <View style={{ flex: 1, width: '100%', gap: 16 }}>
                    <Field label="E-mail" type="text" value={email} setValue={setEmail} />
                </View>
            </View>
            <View style={{ gap: 16, width: "77.5%", alignSelf: 'center', flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <Button onPress={handleOnSignIn} highlight>
                    Redefinir senha
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        width: '100%',
    },
    backButton: {
        width: 26,
        height: 26,
    }
})

export default ForgotPassword;