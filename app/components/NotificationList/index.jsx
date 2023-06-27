import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native"
import Button from "../button";
import { IoCheckmark, IoRemove } from "react-icons/io5";
import api from "../../api";

const NotificationList = ({navigation, notification, refreshNotificationList}) => {

    const id_connection = notification._id;
    console.log(`ObjectId('${id_connection}')`);

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

    const handleAccept = () => {
        api.acceptConnection(id_connection) 
        .then((response) => {
            refreshNotificationList();
        })
    }

    const handleDeny = () => {
        api.rejectConnection(id_connection)
        .then((response) => {
            refreshNotificationList();
        })
    }

    return (
        <View>
        <TouchableOpacity style={styles.notifInfo}>
            <Image
                source={"https://images.pexels.com/photos/16130027/pexels-photo-16130027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                style={styles.profile}
            />
            <View style={{justifyContent:'center'}}>
                <Text style={{color:"#fff", fontWeight:650, height:20}}>@{notification.id_user_requester.username}</Text> 
                <Text style={{color:"#fff", fontWeight:400, height:20}}>pediu para se conectar</Text>
            </View>  
            <View style={{display: "flex", flexDirection: 'row', alignItems: 'center'}}>
                <Button highlight style={{width: '48px'}} onPress={handleAccept}>
                    <IoCheckmark/>
                </Button>
                <Button style={{width: '48px'}} onPress={handleDeny}>
                    <IoRemove/>
                </Button>
                {/* <TouchableOpacity style={{horizontalPadding: '16px', verticalPadding: '8px'}}>
                    Reijeitar
                </TouchableOpacity> */}
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