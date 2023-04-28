import { 
    StyleSheet ,
    View,
    Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import HomeSlideIn from "./components/slide";


function SlideInHome({navigation}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);


    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: "hidden"
          }}
          >
            <View style={styles.welcome_page} className="welcome-page">
                {
                    isLoading ? (
                        <Loading/>
                    ) : (
                        <HomeSlideIn navigation={navigation}/>
                    )
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    welcome_page: {
        backgroundColor: "#61364A",
        height: "100%",
        width: "100%",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default SlideInHome;