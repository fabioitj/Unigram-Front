import { 
    StyleSheet ,
    View,
    Text,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Loading from "../Loading";
import HomeSlideIn from "./components/slide";
import { AuthContext } from "../../contexts/auth";


function SlideInHome({navigation}) {
    const [isLoading, setIsLoading] = useState(true);

    const { validateAlreadySignedIn } = useContext(AuthContext);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
            validateAlreadySignedIn(navigation);
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