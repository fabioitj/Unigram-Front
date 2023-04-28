import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";

const SearchList = ({navigation}) => {
    return (
        <View>
        <TouchableOpacity style={styles.notifInfo}>
            <Image
                source={"https://images.pexels.com/photos/16267173/pexels-photo-16267173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                style={styles.profile}
            />
            <View style={{justifyContent:'center'}}>
                <Text style={{color:"#fff", fontWeight:650, height:20}}>@menina_conceitual</Text> 
                <Text style={{color:"#fff", fontWeight:400, height:20}}>Menina Conceitual Oliveira</Text>
            </View>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create ({
    notifInfo:{
        flexDirection: 'row',
        display:'flex',
        padding: '.5rem',
        borderBottomWidth:'1px',
        borderBottomColor:'linear-gradient(90deg, rgba(232,85,76,1) 0%, rgba(199,69,105,1) 100%)',
        gap:'16px'
    },
    profile: {
        borderRadius:100,
        width:64,
        height:64
    }
})

export default SearchList;