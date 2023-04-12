import { View } from "react-native-web";

function SignUp({setPage}) {
    return (
        <View style={{flex: 1, width:'100%', padding:24, flexDirection: 'column'}}>
            <View style={styles.header}>
                <Image
                    source={require("../../../assets/back_arrow.png")}
                    style={styles.backButton}
                    onPress={() => { setPage(page => page - 1)}}
                />
                <Text style={{width: '100%', fontSize: 24, fontWeight: 500, color: 'white', letterSpacing: 2, textAlign: 'center'}}>Entrar</Text>
                <View style={{width:26}}></View>
            </View>
            <View style={{width:'100%', gap: 64, marginTop: 36, paddingHorizontal: 32}}>
                <View style={{flex: 1, width:'100%', gap: 16}}>
                    <Field label="E-mail" type="text" value={email} setValue={setEmail}/>
                    <Field label="Senha" type="password" value={senha} setValue={setSenha}/>
                </View>

                <View style={{flex: 1, width:'100%', gap: 16}}>
                    <Button highlight onPress={handleOnSignIn}>
                        Entrar
                    </Button>
                    <Text style={{textAlign: 'center', color: 'white', fontStyle: 'italic', fontWeight: 500, fontSize: 16}}>Esqueceu sua senha?</Text>
                </View>
            </View>
            <View style={{flex: 1, gap: 16, width: '70%', alignSelf: 'center', marginTop: 128}}>
                <Text style={{textAlign: 'center', color: 'white', fontWeight: 500, fontSize: 16}}>Ainda não é um membro?</Text>
                <Button onPress={handleOnSignIn}>
                    Registrar
                </Button>
            </View>
             
        </View>
    );
}

export default SignUp;