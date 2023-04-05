import { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

function WelcomeSlideIn() {

    const [pageRendering, setPageRendering] = useState(0);

    const handleSignInPress = () => {
        setPageRendering(1);
    }

    const handleSignUpPress = () => {
        setPageRendering(2);
    }

    return (
        <View style={styles.container}>
            <Animatable.View duration={1000} animation="fadeInUp" style={styles.slideInRight} >
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
            <Animatable.View duration={1000} animation="fadeInUp" style={styles.slideInUp}>

                {
                    pageRendering === 0 && (
                        <>
                            <Text style={[styles.title, styles.white_text]}>Bem vindo!</Text>
                            <View style={styles.group_button}>
                                <TouchableOpacity style={styles.button} onPress={handleSignInPress}>
                                    <Text style={styles.white_text}>Entrar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
                                    <Text style={styles.white_text}>Registrar</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )
                }
                {
                    pageRendering === 1 && (
                        <>
                            <Text style={[styles.title, styles.white_text]}>Entrar</Text>
                            <View style={styles.group_button}>
                                <TouchableOpacity style={styles.button} onPress={handleSignInPress}>
                                    <Text style={styles.white_text}>Entrar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
                                    <Text style={styles.white_text}>Registrar</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )
                }
                {
                    pageRendering === 2 && (
                        <>
                            <Text style={[styles.title, styles.white_text]}>Registrar</Text>
                            <View style={styles.group_button}>
                                <TouchableOpacity style={styles.button} onPress={handleSignInPress}>
                                    <Text style={styles.white_text}>Entrar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={handleSignUpPress}>
                                    <Text style={styles.white_text}>Registrar</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )
                }

            </Animatable.View>
        </View>


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
        height: '35%', // Set the height of the box to half of the screen
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
    slideInUpGirl: {
        height: '100%', // Set the height of the box to half of the screen
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', // Position the view absolutely
        bottom: 40, // Set the bottom property to -1 to ensure the box is not visible until the animation begins
    },
    girl: {
        width: "100%",
        height: "50%",
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
    title: {
        textAlign: "left",
        width: "100%",
        paddingLeft: "2rem",
        fontSize: "2rem",
        paddingTop: "2rem"
    },
    group_button: {
        flex: 1,
        flexDirection: "column",
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",

    },
    button: {
        borderRadius: "25px",
        borderColor: "white",
        borderWidth: "1px",
        paddingVertical: "10px",
        paddingHorizontal: "40px",
        width: "60%",
        height: "48px",
        alignItems: "center",
        justifyContent: "center"
    },
    white_text: {
        color: "white",
        fontWeight: "bold",
        fontFamily: "Arial",
    },
})

export default WelcomeSlideIn;