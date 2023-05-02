import { StyleSheet, View, TextInput, Text, TouchableOpacity, Image } from "react-native"
import Header from "../../components/Header/HeaderEditProfile";
import Menu from "../../components/Menu/Menu";
import ExitButton from "../../components/Buttons/ExitButton";
import SaveButton from "../../components/Buttons/SaveButton";

const EditProfile = ({navigation}) => {  
    return (
        <View style={styles.Container} >
            <Header navigation={navigation}/>
            <Image
                source={"https://images.pexels.com/photos/15031717/pexels-photo-15031717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "}
                style={{
                    width: '7rem',
                    height: '7rem',
                    position: 'absolute',
                    top: '5rem',
                    left: '50%',
                    zIndex: 1,
                    borderRadius: 100,
                    transform: 'translateX(-50%)',
                    borderColor: 'hsl(332, 28%, 30%)',
                    borderWidth: '5px'
                }}
            />
            <View contentContainerStyle={{ rowGap: '24px', marginBottom: '4rem'}} style={styles.Infos}>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity style={{backgroundColor:"#fff", borderRadius:15, width:'150px', height:'40px', justifyContent:'center'}}>
                        <Text style={{alignSelf:'center', color:"rgba(232,85,76,1)", fontWeight:'600', fontSize:18}}>Editar foto</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.Title}>E-mail</Text>
                    <View style={styles.Boxes}>
                        <Text style={{alignSelf:'flex-start', paddingLeft:'12px', color:"#808080", fontWeight:'600', fontSize:16}}>garota_bonita@gmail.com</Text>
                    </View>
                    <Text style={styles.Title}>Nome</Text>
                    <View style={styles.Boxes}>
                        <TextInput placeholder="Garota Bonita" style={{alignSelf:'flex-start', paddingLeft:'12px', color:"#000", fontWeight:'600', fontSize:16, width:'100%'}} />
                    </View>
                    <Text style={styles.Title}>Usuário</Text>
                    <View style={styles.Boxes}>
                        <TextInput placeholder="@garota_bonita" style={{alignSelf:'flex-start', paddingLeft:'12px', color:"#000", fontWeight:'600', fontSize:16, width:'100%'}} />
                    </View>
                    <Text style={styles.Title}>Senha</Text>
                    <View style={styles.Boxes}>
                        <Text style={{alignSelf:'flex-start', paddingLeft:'12px', color:"#808080", fontWeight:'600', fontSize:16}}>*********</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:'48px'}}>
                    <ExitButton navigation={navigation} /> <SaveButton navigation={navigation}/>
                </View>
            </View>
            <Menu navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flex:1
    },
    Infos: {
        paddingTop: '4rem',
        marginTop: '9rem',
        minHeight: '100%',
        width: '100%',
        backgroundColor: '#61364A',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '18px',
        padding: '24px',
        maringBottom: '24px',
    },
    Title: {
        color:"#fff",
        textAlign:'left',
        fontSize:17,
        fontWeight:'600'
    },
    Boxes: {
        width:'100%',
        height:'40px',
        backgroundColor:"#fff",
        borderRadius:15,
        gapHorizontal:'3rem',
        justifyContent:'center',
        alignSelf:'center',
        marginTop:'4px',
        marginBottom:'12px'
    }
});

export default EditProfile;