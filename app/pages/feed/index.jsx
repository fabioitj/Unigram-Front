import { StyleSheet, View, ScrollView } from "react-native"
import Header from "../../components/Header/HeaderFeed";
import ImageCard from "../../components/ImageCard/ImageCard";
import Menu from "../../components/Menu/Menu";

const photosResponse = ['','','']

const Feed = ({navigation}) => {  
    return (
        <View style={styles.Container} >
            <Header navigation={navigation}/>
            <ScrollView contentContainerStyle={{ rowGap: '24px', marginBottom: '4rem'}} style={styles.Feed}>
                {
                    photosResponse.map(photo=><ImageCard />)
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