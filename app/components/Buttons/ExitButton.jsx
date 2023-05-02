import { StyleSheet, TouchableOpacity, Text } from "react-native";

const ExitButton = ({navigation}) => {
    return(

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Feed")}>
            <Text style={{color:"#fff", alignSelf:'center', fontWeight:'500', fontSize:'18px'}}>Sair</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:'linear-gradient(90deg, rgba(232,85,76,1) 0%, rgba(199,69,105,1) 100%)',
        height:'40px',
        width:'70px',
        borderRadius:'100px',
        justifyContent:'center'
    }
})

export default ExitButton;