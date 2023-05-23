import { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity, Image, Text, View, ScrollView } from "react-native";
import Button from "../../components/button";
import Field from "../../components/Field";
import { AuthContext } from "../../contexts/auth";

function SignUp({ backToWelcome, goToSignIn }) {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { signUp } = useContext(AuthContext);

    const handleOnSignIn = () => {
        const newUser = {
            name,
            username,
            email,
            birth_date: birthDate,
            password,
            confirm_password: confirmPassword
        };

        signUp(newUser, backToWelcome);
    };  

    return (
        <ScrollView style={{ flex: 1, width: '100%', padding: 24, flexDirection: 'column' }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={backToWelcome}>
                    <Image
                        source={require("../../../assets/back_arrow.png")}
                        style={styles.backButton}
                    />
                </TouchableOpacity>
                <Text style={{ width: '100%', fontSize: 24, fontWeight: 500, color: 'white', textAlign: 'center' }}>Junte-se ao Unigram</Text>
                <View style={{ width: 26 }}></View>
            </View>
            <View style={{ width: '100%', marginTop: 36, paddingHorizontal: 32 }}>
                <View style={{ flex: 1, width: '100%', gap: 16 }}>
                    <Field label="Nome" type="text" value={name} setValue={setName} />
                    <Field label="Nome de usuário" type="text" value={username} setValue={setUsername} />
                    <Field label="Data de nascimento" type="text" value={birthDate} setValue={setBirthDate} />
                    <Field label="E-mail" type="text" value={email} setValue={setEmail} />
                    <View>
                        <Field label="Senha" type="password" value={password} setValue={setPassword} />
                        <Text style={{ fontSize: 10, color: '#FFF', textAlign: 'center', fontStyle: 'italic', fontWeight: 'medium' }}>A senha deve conter no mínimo 6 caracteres e pelo menos 1 número e 1 caractere especial</Text>
                    </View>
                    <Field label="Confirmar senha" type="password" value={confirmPassword} setValue={setConfirmPassword} />
                </View>
            </View>
            <View style={{ flex: 1, gap: 16, width: '100%', paddingHorizontal: 32, marginTop: 16, alignSelf: 'center' }}>
                <Button onPress={handleOnSignIn} highlight> 
                    Registrar
                </Button>
            </View>

        </ScrollView>
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

export default SignUp;