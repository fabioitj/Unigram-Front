import { StyleSheet, View, ScrollView, TextInput, Button } from "react-native";
import Header from '../../components/Header/HeaderNewPost';
import Field from "../../components/Field";
import Menu from "../../components/Menu/Menu";
import { useState } from "react";
import api from "../../api";

const NewPost = ({navigation}) => {
    const [imageLink, setImageLink] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const handlePress = () => {
        setIsLoading(true);
        api.createPost(imageLink, description)
            .then(res => {
                switch (res.status) {
                    case 401:
                        signOut();
                    case 200:
                        navigation.navigate('Feed');
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
                    setError("Ocorreu um erro ao carregar novo post.");
                }
            })
            .finally(()=> {
                setIsLoading(false);
            })
      console.log('Image Link:', imageLink);
      console.log('Description:', description);
    };

    return(
        <View style={styles.Container}>
            <Header navigation={navigation}/>
            <ScrollView contentContainerStyle={{ rowGap: '24px', marginBottom: '4rem', marginTop: '4rem'}} style={styles.Notifications}>
                <Field
                    label="Link da imagem"
                    placeholder="Link da imagem"
                    value={imageLink}
                    setValue={setImageLink}
                />
                <Field
                    label="Descrição da imagem"
                    placeholder="Descrição da imagem"
                    value={description}
                    setValue={setDescription}
                />
                {isError ? <Text>{error}</Text> :
                    <Button title={isLoading?"Enviando":"Enviar"} onPress={handlePress} contentContainerStyle={{ borderRadius: '1rem' }}/>
                }
            </ScrollView>            
            <Menu navigation={navigation} />
        </View>
)
}

const styles = StyleSheet.create({
Container: {
    width: '100%',
    height: '100%',
},
Notifications: {
    marginTop: '3rem',
    minHeight: '100%',
    width: '100%',
    backgroundColor: '#61364A',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '18px',
    padding: '16px',
    maringBottom: '24px'
}
});

export default NewPost;