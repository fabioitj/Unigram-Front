import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native"
import { IoChatbubbleOutline, IoHeartOutline, IoHeart } from "react-icons/io5"
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import api from "../../api";

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
  
// TODO: ADD COMMENTS SCREEN
const ImageCard = ({navigation, post}) => {
    const { signOut } = useAuth()
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleLike = () => {
        setIsLoading(true);
        post.already_liked ? api.unlike(post._id) : api.like(post._id)
            .then(res => {
                switch (res.status) {
                    case 401:
                        signOut();
                    case 200:
                        post.already_liked = !post.already_liked;
                        break;
                    default:
                        throw new Error(res.data);
                }
            })
            .catch(err => {
                setIsError(true);
                if ( err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Ocorreu um erro ao carregar o feed.");
                }
            })
            .finally(()=> {
                setIsLoading(false);
            })
        };

    const handleComment = () => {
        navigation.push("Post", {post: post._id});
    }
    return (
        <View style={styles.ImageCardLayout}>
            <ImageBackground
                style={styles.ImageCardImage}
                source={post.image}>
                <View style={styles.ImageCardInfo}>
                    <View style={styles.ImageCardInfoText}>
                        <Text style={styles.ImageCardInfoOwner}>@{post.id_user.username}</Text>
                        <Text style={styles.ImageCardInfoTimeAgo}>{getTimeElapsedLabel(new Date(post.publication_date))}</Text>
                    </View>
                    <View style={styles.ImageCardInfoButtons}>
                        <TouchableOpacity onPress={()=>handleComment()} style={styles.ImageCardInfoButtom}>
                            <IoChatbubbleOutline style={styles.ImageCardInfoButtom} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>handleLike()} style={styles.ImageCardInfoButtom}>
                            {!post.already_liked ? <IoHeartOutline style={styles.ImageCardInfoButtom} /> : <IoHeart style={styles.ImageCardInfoButtom} />}
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.ImageCardDescription}>
                <Text style={styles.ImageCardDescriptionText}>{post.description}</Text>
                <TouchableOpacity>
                    <Text style={styles.ImageCardDescriptionTextExpand}>ver mais</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ImageCardLayout: {
        borderRadius:'16px',
        overflow: 'hidden',
        width: '100%',
        hadowOffset: {
            width: -2,
            height: 4
        },
        shadowRadius: '24px',
        shadowOpacity: '.15',
        shadowColor: '#000'
    },
    ImageCardImage: {
        height: '32rem'
    },
    ImageCardInfo: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        color: '#fff',
        padding: '0.5rem',
        backgroundColor: 'rgba(0, 0, 0, 0.30);',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '1rem'
    },
    ImageCardInfoText: {
        display: 'flex',
        gap: '8px',
        flexDirection: 'row',
        alignItems: 'center',
    },
    ImageCardInfoOwner: {
        color: '#fff',
        fontWeight: '600',
        fontSize: '1rem'
    },
    ImageCardInfoTimeAgo: {
        color: '#d8d8d8',
        fontWeight: '300',
        fontSize: '1rem'
    },
    ImageCardInfoButtons:{
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
        color: '#fff'
    },
    ImageCardInfoButtom: {
        width: '1.5rem',
        height: '1.5rem'
    },
    ImageCardDescription: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: '1rem',
        padding: '.5rem',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    ImageCardDescriptionText: {
        fontSize: '1rem'
    },
    ImageCardDescriptionTextExpand: {
        fontWeight: 700
    }
});

export default ImageCard;