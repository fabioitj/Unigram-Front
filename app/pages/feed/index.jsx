import { StyleSheet, View } from "react-native"
import Header from "../../components/Header/Header";
import ImageCard from "../../components/ImageCard/ImageCard";
import Menu from "../../components/Menu/Menu";

const Feed = () => {
    return (
        <View style={styles.Container}>
            <Header />
            <View style={styles.Feed}>
                <ImageCard />
            </View>
            <Menu />
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
        gap: '18px',
        padding: '24px'
    }
});

export default Feed;