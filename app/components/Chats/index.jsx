import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native"

function getTimeElapsedLabel(date) {
    const now = new Date();
    const elapsed = now - date;
  
    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (seconds < 60) {
      return `Há ${seconds} segundos atrás`;
    } else if (minutes < 60) {
      return `Há ${minutes} minutos atrás`;
    } else if (hours < 24) {
      return `Há ${hours} horas atrás`;
    } else {
      return `Há ${days} dias atrás`;
    }
}

//TODO: ADD CHAT SCREEN
const Chats = ({chat}) => {
    return (
        <TouchableOpacity style={styles.chatInfo}>
            <Image
                source={"https://images.pexels.com/photos/16130027/pexels-photo-16130027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                style={styles.profile}
            />
            <View style={{justifyContent:'center'}}>
            <View style={{flexDirection:'row', justifyContent:'space-around', gap:'95px'}}>
                <Text style={{color:"#fff", fontWeight:650, height:20}}>@{chat.sender.username}</Text> 
                <Text style={{color:"#f4f4f4", fontWeight:400, height:20}}>{getTimeElapsedLabel(new Date(chat.date_register))}</Text> 
            </View>  
            <Text style={{color:"#fff", fontWeight:400, height:20}}>{chat.body}</Text>
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