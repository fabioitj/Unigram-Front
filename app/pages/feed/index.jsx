import { StyleSheet, View, ScrollView, Text } from "react-native"
import Header from "../../components/Header/HeaderFeed";
import ImageCard from "../../components/ImageCard/ImageCard";
import Menu from "../../components/Menu/Menu";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import api from "../../api";

const Feed = ({navigation}) => {
    const { signOut } = useAuth()
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        api.feed()
            .then(res => {
                setPosts(res.data.publications);
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
    }, []);


    return (
        <View style={styles.Container} >
            <Header navigation={navigation}/>
            <ScrollView contentContainerStyle={{ rowGap: '24px', marginBottom: '4rem'}} style={styles.Feed}>
                {
                    isLoading ? <Text style={styles.TextMessage}>Carregando...</Text> :
                    isError ? <Text style={styles.TextMessage}>{error}</Text> :
                    posts && posts.length > 0 ? posts.map(post=><ImageCard post={post}/>) : <Text style={styles.TextMessage}>Nenhum post encontrado.</Text>
                }
            </ScrollView>
            <Menu navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
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
        padding: '24px',
        maringBottom: '24px'
    }
});

export default Feed;