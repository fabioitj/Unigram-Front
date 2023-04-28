import { StyleSheet, TouchableOpacity } from "react-native";
import { IoAddOutline } from "react-icons/io5";

const AddButton = () => {
    return(

        <TouchableOpacity style={styles.button}>
            <IoAddOutline style={{color:"#fff", alignSelf:'center', width:'100%', height:'100%'}}/>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:'linear-gradient(90deg, rgba(232,85,76,1) 0%, rgba(199,69,105,1) 100%)',
        height:'25px',
        width:'40px',
        borderRadius:'10px'
    }
})

export default AddButton;