import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity } from "react-native"
import Header from "../../components/Header/HeaderMyProfile";
import  ImageCardProfile from "../../components/ImageCard/ImageCardProfile";
import Menu from "../../components/Menu/Menu";

const photosResponse = ['','','']

const Profile = ({navigation}) => {  
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
            <ScrollView contentContainerStyle={{ rowGap: '24px', marginBottom: '4rem'}} style={styles.Feed}>
                <TouchableOpacity>
                <Text style={{fontWeight:400, color: "#fff", textAlign:'center', fontSize:14}}>48 conexões</Text>
                </TouchableOpacity>
                <Text style={{fontWeight:600, color: "#fff", textAlign:'center', fontSize:14, lineHeight:15}}>Aqui vai a sua biografia.{'\n'}Escreva algumas informações{'\n'}sobre você!</Text>
                {
                    photosResponse.map(photo=><ImageCardProfile />)
                }
                
            </ScrollView>
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
    Feed: {
        paddingTop: '4rem',
        marginTop: '9rem',
        minHeight: '100%',
        width: '100%',
        backgroundColor: '#61364A',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '18px',
        padding: '24px',
        maringBottom: '24px'
    }
});

export default Profile;