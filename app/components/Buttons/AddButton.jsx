import { StyleSheet, TouchableOpacity } from "react-native";
import { IoAddOutline } from "react-icons/io5";
import { LinearGradient } from "expo-linear-gradient"

const AddButton = ({callback}) => {
    return(

        <LinearGradient colors={["#E8554C", "#C74569"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.button}>
        <TouchableOpacity onPress={callback}>
            <IoAddOutline style={{color:"#fff", alignSelf:'center', width:'80%', height:'80%'}}/>
        </TouchableOpacity>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    button: {
        height:'30px',
        width:'50px',
        borderRadius:'10px'
    }
})

export default AddButton;