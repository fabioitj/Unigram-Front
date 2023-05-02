import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native"

const Chats = (navigation) => {
    return (
        <TouchableOpacity style={styles.chatInfo}>
            <Image
                source={"https://images.pexels.com/photos/16130027/pexels-photo-16130027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                style={styles.profile}
            />
            <View style={{justifyContent:'center'}}>
            <View style={{flexDirection:'row', justifyContent:'space-around', gap:'95px'}}>
                <Text style={{color:"#fff", fontWeight:650, height:20}}>@menino_estiloso</Text> 
                <Text style={{color:"#f4f4f4", fontWeight:400, height:20}}>Há 30 min</Text> 
            </View>  
            <Text style={{color:"#fff", fontWeight:400, height:20}}>Oi, amiga! Vamos sair hoje?</Text>
            </View>
        </TouchableOpacity>
    )
}
 

const styles = StyleSheet.create ({
    chatInfo:{
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

export default Chats;