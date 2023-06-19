import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Image, Text } from "react-native";
import { View } from "react-native-web";
import Button from "../../components/button";
import Field from "../../components/Field";

function SignIn({ backToWelcome, goToForgotPassword, goToSignUp, navigation }) {
    const { signIn } = useAuth()
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    const handleOnSignIn = () => {
        setIsLoading(true);
        setIsError(false);
        signIn(email, senha)
            .then(()=>navigation.navigate('Feed'))
            .catch(err => {
                setIsError(true);
                if ( err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Erro desconhecido");
                }
            })
            .finally(()=> {
                setIsLoading(false);
            })
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
                <Text style={{ width: '100%', fontSize: 24, fontWeight: 500, color: 'white', textAlign: 'center' }}>Entrar</Text>
                <View style={{ width: 26 }}></View>
            </View>
            <View style={{ width: '100%', gap: 64, marginTop: 36, paddingHorizontal: 32 }}>
                <View style={{ flex: 1, width: '100%', gap: 16 }}>
                    {
                        isError &&
                        <Text
                            style={{
                                textAlign: 'center',
                                color: 'red',
                                fontWeight: 500,
                                fontSize: 16
                            }}
                        >
                            {error}
                        </Text>
                    }
                    <Field label="E-mail" type="text" value={email} setValue={setEmail} />
                    <Field label="Senha" type="password" value={senha} setValue={setSenha} />
                </View>

                <View style={{ flex: 1, width: '100%', gap: 16 }}>
                    <Button highlight onPress={handleOnSignIn}>
                        { isLoading ? 'Entrando...': 'Entrar' }
                    </Button>
                    <TouchableOpacity onPress={goToForgotPassword}>
                        <Text style={{ textAlign: 'center', color: 'white', fontStyle: 'italic', fontWeight: 500, fontSize: 16 }}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, gap: 16, width: '70%', alignSelf: 'center', marginTop: 128 }}>
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 500, fontSize: 16 }}>Ainda não é um membro?</Text>
                <Button onPress={goToSignUp}>
                    Registrar
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

export default SignIn;