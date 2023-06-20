import { StyleSheet, View, ScrollView, Text, ImageBackground, TouchableOpacity, TextInput } from "react-native"
import { IoChatbubbleOutline, IoHeartOutline, IoHeart, IoArrowRedoOutline } from "react-icons/io5"
import Header from "../../components/Header/HeaderFeed";
import ImageCard from "../../components/ImageCard/ImageCard";
import Menu from "../../components/Menu/Menu";
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

const Post = ({navigation, route}) => {
    const { signOut } = useAuth()
    const [post, setPost] = useState();
    const [comments, setComments] = useState([]);
    const [updates, setUpdate] = useState([]);
    const [error, setError] = useState("");
    const [comment, setComment] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const { post } = route.params;
        Promise.allSettled([
            api.getComments(post)
                .then(res => {
                    switch (res.status) {
                        case 401:
                            signOut();
                        case 200:
                            setComments(res.data);
                            break;
                        default:
                            throw new Error(res.data);
                    }
                }),
            api.getPost(post)
                .then(res => {
                    switch (res.status) {
                        case 401:
                            signOut();
                        case 200:
                            setPost(res.data);
                            console.log(res.data);
                            break;
                        default:
                            throw new Error(res.data);
                    }
                })
        ])
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
    }, [update]);

    const update = () => {
        setUpdate(updates => [...updates, '']);
    }

    const handleComment = () => {
        api.createComment(post._id, comment)
            .then(res => {
                switch (res.status) {
                    case 401:
                        signOut();
                    case 200:
                        update();
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
    }


    return (
        <View style={styles.Container} >
        { isLoading ? <Text>Carregando...</Text> : isError ? <Text>{error}</Text> : post && (
        <>
            <Header navigation={navigation}/>
            <ScrollView contentContainerStyle={{ marginBottom: '4rem', marginTop: '1rem'}} style={styles.Feed}>
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
                <View style={{width: '100%', height: '1.25rem', display: 'flex', flexDirection: 'row', gap: '.5rem'}}>
                    <TextInput placeholder="Comentar" style={styles.Search} value={comment} onChange={(e)=>setComment(e.target.value)}/>
                    <TouchableOpacity onPress={()=>handleComment()} style={{}}>
                        <IoArrowRedoOutline />
                    </TouchableOpacity>
                </View>
                { comments && comments.length > 0 && comments.map(comment => <Text style={styles.ImageCardDescriptionText}>{comment.description}</Text>)}
            </View>
            </ScrollView>
            <Menu navigation={navigation} />
        </>
        )}
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
    Search: {
        height:'100%',
        paddingLeft:'15px',
        fontWeight:'600',
        color:'rgba(232,85,76,1) 100%',
        width:'100%',
        background: '#cbd5e1',
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
        flexDirection: 'column',
        paddingHorizontal: '1rem',
        padding: '.5rem',
        alignItems: 'start'
    },
    ImageCardDescriptionText: {
        fontSize: '1rem',
        borderBottom: 'solid 1px #000',
    },
    ImageCardDescriptionTextExpand: {
        fontWeight: 700
    },
    TextMessage: {
        width: '100%',
        height: '50vH',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
    },
    Container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    Feed: {
        marginTop: '3rem',
        minHeight: '100%',
        width: '100%',
        backgroundColor: '#61364A',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '18px',
        maringBottom: '24px'
    }
});

export default Post;