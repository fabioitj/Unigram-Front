import { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import Button from "../../../../components/button";
import GroupButton from "../../../../components/group_button";
import SignIn from "../../../signin";
import SignUp from "../../../signup";

function WelcomeSlideIn() {

    const [pageRendering, setPageRendering] = useState(0);

    const handleSignInPress = () => {
        setPageRendering(1);
    }

    const handleSignUpPress = () => {
        setPageRendering(2);
    }

    return (
        <>
            <Image
                source={require("../../../../../assets/logo.png")}
                style={styles.logo}
            />
            <View style={styles.container}>

                <Animatable.View duration={1500} animation="fadeInUp" style={styles.slideInRight} >
                    <Image
                        source={require("../../../../../assets/particles-background.png")}
                        style={styles.particles}
                    />
                </Animatable.View>
                <Animatable.View duration={2000} animation="fadeInUp" style={styles.slideInUpGirl}>
                    <Image
                        source={require("../../../../../assets/menina-querida.png")}
                        style={styles.girl}
                    />
                </Animatable.View>
                <Animatable.View duration={1000} animation="slideInUp" style={[styles.slideInUp, styles["pageNumber" + pageRendering], {paddingHorizontal: 32}]}>

                    {
                        pageRendering === 0 && (
                            <>
                                <Text style={[styles.title, styles.white_text]}>Bem vindo!</Text>
                                
                                <GroupButton>
                                    <Button onPress={handleSignInPress}>
                                        Entrar
                                    </Button>
                                    <Button onPress={handleSignUpPress}>
                                        Registrar
                                    </Button>
                                </GroupButton>
                            </>
                        )
                    }
                    {
                        pageRendering === 1 && (
                            <SignIn setPageRendering={setPageRendering}/>
                        )
                    }
                    {
                        pageRendering === 2 && (
                            <SignUp  setPageRendering={setPageRendering}/>
                        )
                    }

                </Animatable.View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
        position: 'relative',
    },
    slideInUp: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', // Position the view absolutely
        bottom: -1, // Set the bottom property to -1 to ensure the box is not visible until the animation begins
        backgroundColor: "#C74569",
        borderTopLeftRadius: "25px",
        borderTopRightRadius: "25px",
        flex: 1,
        flexDirection: "column",
        gap: "10px"
    },
    pageNumber0: {
        height: '35%',
    },
    pageNumber1: {
        height: '75%',
    },
    pageNumber2: {
        height: '35%',
    },
    slideInUpGirl: {
        height: '100%', // Set the height of the box to half of the screen
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', // Position the view absolutely
        bottom: 100, // Set the bottom property to -1 to ensure the box is not visible until the animation begins
    },
    girl: {
        width: "100%",
        height: "60%",
    },
    slideInRight: {
        height: '100%', // Set the height of the box to half of the screen
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', // Position the view absolutely
        left: "0",
        bottom: "200px", // Set the bottom property to -1 to ensure the box is not visible until the animation begins
    },
    particles: {
        padding: "1rem",
        width: "100%",
        height: "50%"
    },
    logo: {
        width: 50   ,
        height: 58,
        alignSelf: 'flex-start',
        top: '1rem',
        left: '1rem'
    },
    title: {
        alignSelf: 'flex-start',
        textAlign: "left",
        paddingLeft: "2rem",
        fontSize: "2rem",
        paddingTop: "2rem",
        color: "white",
        fontWeight: "bold",
        fontFamily: "Arial",
    },
});

export default WelcomeSlideIn;