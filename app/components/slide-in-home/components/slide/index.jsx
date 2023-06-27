import { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Animatable from "react-native-animatable";
import Welcome from "../../../../pages/welcome";
import SignIn from "../../../../pages/signin";
import SignUp from "../../../../pages/signup";
import ForgotPassword from "../../../../pages/forgot-password";
import { LinearGradient } from "expo-linear-gradient";

function HomeSlideIn({ navigation }) {

    const [pageRendering, setPageRendering] = useState(0);

    const handleSignInPress = () => {
        setPageRendering(1);
    }

    const handleSignUpPress = () => {
        setPageRendering(2);
    }

    const handleForgotPasswordPress = () => {
        setPageRendering(3);
    }

    const backToWelcome = () => {
        setPageRendering(0);
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
                {
                    pageRendering !== 0 && (
                        <Animatable.View duration={1000} animation="fadeInDown" style={{ position: 'absolute', width: '100%', height: '100%', bottom: 400, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        </Animatable.View>
                    )
                }
                {
                    pageRendering === 0 && (

                        <Animatable.View duration={1000} animation="slideInUp" style={[styles.pageNumber0]}>
                            <LinearGradient colors={["#E8554C", "#C74569"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={[styles.slideInUp, { paddingHorizontal: 32 }]}>
                                <Welcome handleSignInPress={handleSignInPress} handleSignUpPress={handleSignUpPress} />
                            </LinearGradient>
                        </Animatable.View>

                    )
                }
                {
                    pageRendering === 1 && (
                        <Animatable.View duration={1000} animation="slideInUp" style={[styles.pageNumber1]}>
                            <LinearGradient colors={["#E8554C", "#C74569"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={[styles.slideInUp, { paddingHorizontal: 32 }]}>
                                <SignIn backToWelcome={backToWelcome} goToForgotPassword={handleForgotPasswordPress} goToSignUp={handleSignUpPress} navigation={navigation} />
                            </LinearGradient>
                        </Animatable.View>

                    )
                }
                {
                    pageRendering === 2 && (
                        <Animatable.View duration={1000} animation="slideInUp" style={[styles.pageNumber2]}>
                            <LinearGradient colors={["#E8554C", "#C74569"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={[styles.slideInUp, { paddingHorizontal: 32 }]}>
                                <SignUp backToWelcome={backToWelcome} goToSignIn={handleSignInPress}/>
                            </LinearGradient>
                        </Animatable.View>

                    )
                }
                {
                    pageRendering === 3 && (
                        <Animatable.View duration={1000} animation="slideInUp" style={[styles.pageNumber3]}>
                            <LinearGradient colors={["#E8554C", "#C74569"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={[styles.slideInUp, { paddingHorizontal: 32 }]}>
                                <ForgotPassword backToWelcome={backToWelcome} />
                            </LinearGradient>
                        </Animatable.View>

                    )
                }
                {
                    pageRendering === 3 && (
                        <Animatable.View duration={1000} animation="slideInUp" style={[styles.slideInUp, styles.pageNumber3, {paddingHorizontal: 32}]}>
                            <ForgotPassword backToWelcome={backToWelcome}/>
                        </Animatable.View>
                        
                    )
                }
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
    },
    slideInUp: {
        height: '100%',
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
        width: '100%'
    },
    pageNumber1: {
        height: '75%',
        width: '100%'
    },
    pageNumber2: {
        height: '75%',
        width: '100%'
    },
    pageNumber3: {
        height: '75%',
        width: '100%'
    },
    pageNumber3: {
        height: '75%'
    },
    slideInUpGirl: {
        height: '100%', // Set the height of the box to half of the screen
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', // Position the view absolutely
        bottom: 20, // Set the bottom property to -1 to ensure the box is not visible until the animation begins
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
        width: 50,
        height: 58,
        alignSelf: 'flex-start',
        top: '1rem',
        left: '1rem'
    },
    fadeInUpBackground: {
        position: 'absolute',
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    }
});

export default HomeSlideIn;