import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity } from "react-native"
import Header from "../../components/Header/HeaderMyProfile";
import ImageCard from "../../components/ImageCard/ImageCard";
import Menu from "../../components/Menu/Menu";
<<<<<<< HEAD
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


    const update = () => {
        setupdates(updates => [...updates, '']);
    }

    async function getUser() {
        setIsLoading(true);
        let userId;
        userId = route?.params?.user;
        if ( !userId ) {
            console.log("Checking my own profile.")
            setIsMyself(true);
            const userRequest = (await api.getMyself());
            userId = userRequest.data._id;
        }
        Promise.allSettled([
            api.findIdUser(userId)
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
            api.getUserPosts(userId)
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
    }

    useEffect(() => {
        getUser()
    }, [updates]);

    const handleConnect = () => {
        Promise.allSettled([user.connection ? user.connection.isPending ? '' : api.disconnect(user._id) : api.connect(user._id)])
        .then(res => {
            update();
        })
        .catch(err => {
            setIsError(true);
            if ( err instanceof Error) {
                console.log(err);
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
                    { !isMyself &&
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>{ user.connection ? user.connection.isPending ? '' : handleConnect() : handleConnect() }} style={{backgroundColor:"#fff", borderRadius:15, width:'150px', height:'40px', justifyContent:'center'}}>
                                    <Text style={{alignSelf:'center', color:"rgba(232,85,76,1)", fontWeight:'600', fontSize:18}}>
                                        { user.connection ? user.connection.isPending ? 'Aguardando' : 'Desconectar' : 'Conectar' }
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            {(!isMyself && user.connection && user.connection.isConnected) && (
                                <View style={{alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>handleBlock()} style={{backgroundColor:"#fff", borderRadius:15, width:'150px', height:'40px', justifyContent:'center'}}>
                                    <Text style={{alignSelf:'center', color:"rgba(232,85,76,1)", fontWeight:'600', fontSize:18}}>Bloquear</Text>
                                </TouchableOpacity>
                            </View>
                            )}
                            
                        </View>
                    }
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
=======
import { useContext, useEffect, useState } from "react";import { getPublicationsByUser } from "../../api/userApi";
import { AuthContext } from "../../contexts/auth";

const Profile = ({navigation}) => {  
    const [publications, setPublications] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        getPublicationsByUser(user._id)
            .then((response) => {
                setPublications(response.data);
            })
            .catch((response) => {
                alert(response.response.data.message);
            })
    }, []);

    return (
        <View style={styles.Container} >
            <Header navigation={navigation}/>
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
                <TouchableOpacity>
                <Text style={{fontWeight:400, color: "#fff", textAlign:'center', fontSize:14}}>48 conexões</Text>
                </TouchableOpacity>
                <Text style={{fontWeight:600, color: "#fff", textAlign:'center', fontSize:14, lineHeight:15}}>Aqui vai a sua biografia.{'\n'}Escreva algumas informações{'\n'}sobre você!</Text>
                {
                    publications.map((p, i) => <ImageCardProfile description={p.description} imageUrl={p.image} publish_date={p.publication_date} key={i} />)
                }
                
            </ScrollView>
            <Menu navigation={navigation} />
>>>>>>> 26530cd9c9fa16844e613537910b419cdcf4ce1d
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