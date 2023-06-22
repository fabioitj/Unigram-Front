import React, { useRef, useState } from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import api from "../../../api";
import Header from "../../../components/Header/HeaderMessages";
import Field from "../../../components/Field";
import Button from "../../../components/button";
import { LinearGradient } from "expo-linear-gradient";

function MessageConversationLine({ receiver, message }) {

    const isMine = receiver === message.receiver;

    return (
        isMine ? (
            <LinearGradient colors={["#E8554C", "#C74569"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styleLine.mine}>
                <Text style={{ color: 'white' }}>{message.body}</Text>
            </LinearGradient>
        ) : (
            <View style={styleLine.friend}>
                <Text>{message.body}</Text>
            </View>
        )
    );
}

const styleLine = StyleSheet.create({
    mine: {
        backgroundColor: 'red',
        width: '60%',
        alignSelf: 'flex-end',
        borderRadius: '16px',
        paddingHorizontal: '1rem',
        paddingVertical: '0.25rem'
    },
    friend: {
        backgroundColor: 'white',
        width: '60%',
        alignSelf: 'flex-start',
        borderRadius: '16px',
        paddingHorizontal: '1rem',
        paddingVertical: '0.25rem'
    }
})

function MessageConversation({ navigation, route }) {

    const scrollViewRef = useRef();
    const userId = route?.params?.userId;
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        api.getChatMessages(userId)
            .then((response) => {
                setMessages(response.data);
            })
        setInterval(() => {
            api.getChatMessages(userId)
                .then((response) => {
                    setMessages(response.data);
                })
        }, 1000);
    }, []);

    const handleSendMessage = () => {
        if (!newMessage || newMessage === "") return;

        let body = {
            receiver: userId,
            body: newMessage
        }

        api.sendMessage(body)
            .then((response) => {
                setMessages(messages => [...messages, response.data]);
            })

        setNewMessage("");
    }

    return (
        <View style={styles.Container}>
            <Header navigation={navigation} />
            <ScrollView contentContainerStyle={{ rowGap: '24px', marginTop: '2rem' }} style={styles.Messages} ref={scrollViewRef} onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
                {
                    messages && messages.map((message, index) => {
                        return (
                            <MessageConversationLine key={index} receiver={userId} message={message} />
                        )
                    })
                }
            </ScrollView>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', backgroundColor: '#61364A', padding: '1rem' }}>
                <Field label={"Digite a mensagem..."} type={"text"} value={newMessage} setValue={setNewMessage} style={{ width: '70%' }} />
                <Button style={{ width: '20%' }} key={0} onPress={handleSendMessage} highlight>
                    Enviar
                </Button>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%',
    },
    Messages: {
        marginTop: '3rem',
        width: '100%',
        backgroundColor: '#61364A',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '18px',
        padding: '16px',
        maringBottom: '24px'
    }
});

export default MessageConversation;