import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity } from "react-native"
import Header from "../../components/Header/HeaderMyProfile";
import ImageCard from "../../components/ImageCard/ImageCard";
import Menu from "../../components/Menu/Menu";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import api from "../../api";

const Profile = ({navigation, route}) => {  
    const { signOut } = useAuth()
    const [user, setUser] = useState();
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const [isMyself, setIsMyself] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [updates, setupdates] = useState([]);

    let userParam;
    userParam = route?.params?.user;

    const update = () => {
        setupdates(updates => [...updates, '']);
    }

    useEffect(async () => {
        setIsLoading(true);
        if ( !userParam ) {
            setIsMyself(true);
            userParam = (await api.getMyself());
            
            userParam = userParam.data;
        }
        Promise.allSettled([
            api.findIdUser(userParam._id)
                .then(res => {
                    switch (res.status) {
                        case 401:
                            signOut();
                        case 200:
                            setUser(res.data);
                            break;
                        default:
                            throw new Error(res.data);
                    }
                }),
            api.getUserPosts(userParam._id)
                .then(res => {
                    switch (res.status) {
                        case 401:
                            signOut();
                        case 200:
                            setPosts(res.data);
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
    }, [updates]);

    const handleConnect = () => {
        user.connection && user.connection.isConnected ? api.disconnect(user._id) : api.connect(user._id)
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
        .finally(()=> {
            setIsLoading(false);
        })
    }

    const handleBlock = () => {
        api.block(user.connection._id)
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
        .finally(()=> {
            setIsLoading(false);
        })
    }

    return (
        <View style={styles.Container} >
            { isLoading ? <Text>Carregando...</Text> : isError ? <Text>{error}</Text> : user && (
            <>
                <Header navigation={navigation} user={user} />
                <Image
                    source={"https://images.pexels.com/photos/15031717/pexels-photo-15031717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 "}
                    style={{
                        width: '7rem',
                        height: '7rem',
                        position: 'absolute',
                        top: '5rem',
                        left: '50%',
                        zIndex: 1,
                        borderRadius: 100,
                        transform: 'translateX(-50%)',
                        borderColor: 'hsl(332, 28%, 30%)',
                        borderWidth: '5px'
                    }}
                />
                <ScrollView contentContainerStyle={{ rowGap: '24px', marginBottom: '4rem'}} style={styles.Feed}>
                    <Text style={{fontWeight:400, color: "#fff", textAlign:'center', fontSize:14}}>{user.connections.length} conexões</Text>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>handleConnect()} style={{backgroundColor:"#fff", borderRadius:15, width:'150px', height:'40px', justifyContent:'center'}}>
                                    <Text style={{alignSelf:'center', color:"rgba(232,85,76,1)", fontWeight:'600', fontSize:18}}>
                                        {user.connection ? user.connection.isPending ? "Aguardando" : "Conectado" : "Conectar"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            {(user.connection && user.connection.isConnected) && (
                                <View style={{alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>handleBlock()} style={{backgroundColor:"#fff", borderRadius:15, width:'150px', height:'40px', justifyContent:'center'}}>
                                    <Text style={{alignSelf:'center', color:"rgba(232,85,76,1)", fontWeight:'600', fontSize:18}}>Bloquear</Text>
                                </TouchableOpacity>
                            </View>
                            )}
                            
                        </View>
                    <View style={{alignItems:'center', top:'15px', gap: '2rem'}}>
                        {
                            isLoading ? <Text>Carregando...</Text> :
                            isError ? <Text>{error}</Text> :
                            posts && posts.length > 0 ? posts.map(post=><ImageCard navigation={navigation} post={post}/>) : <Text style={{color:"#fff", fontWeight:600, marginBottom:'20px', textAlign:'center'}}>Nenhum post foi encontrado.</Text>
                        }
                    </View>                    
                </ScrollView>
                <Menu navigation={navigation} />
            </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flex:1
    },
    Feed: {
        paddingTop: '4rem',
        marginTop: '9rem',
        minHeight: '100%',
        width: '100%',
        backgroundColor: '#61364A',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '18px',
        padding: '24px',
        maringBottom: '24px'
    }
});

export default Profile;