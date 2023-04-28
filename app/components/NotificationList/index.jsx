import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native"

const NotificationList = ({navigation}) => {
    return (
        <View>
        <TouchableOpacity style={styles.notifInfo}>
            <Image
                source={"https://images.pexels.com/photos/16130027/pexels-photo-16130027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                style={styles.profile}
            />
            <View style={{justifyContent:'center'}}>
            <View style={{flexDirection:'row', justifyContent:'space-around', gap:'95px'}}>
                <Text style={{color:"#fff", fontWeight:650, height:20}}>@menino_estiloso</Text> 
                <Text style={{color:"#f4f4f4", fontWeight:400, height:20}}>Há 30 min</Text> 
            </View>  
            <Text style={{color:"#fff", fontWeight:400, height:20}}>Curtiu sua foto</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notifInfo}>
            <Image
                source={"https://images.pexels.com/photos/16121005/pexels-photo-16121005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                style={styles.profile}
            />
            <View style={{justifyContent:'center'}}>
            <View style={{flexDirection:'row', justifyContent:'space-around', gap:'85px'}}>
                <Text style={{color:"#fff", fontWeight:650, height:20}}>@mulher_simpatica</Text> 
                <Text style={{color:"#f4f4f4", fontWeight:400, height:20}}>Há 30 min</Text> 
            </View>  
            <Text style={{color:"#fff", fontWeight:400, height:20}}>Comentou sua foto</Text>
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

export default NotificationList;