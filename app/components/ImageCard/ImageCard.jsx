import { Image, Text, View, ImageBackground } from "react-native"

const ImageCard = () => {
    return (
        <View>
            <ImageBackground source={'https://images.pexels.com/photos/2853198/pexels-photo-2853198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10'}>
            <Text>Um exemplo de texto.</Text>
            </ImageBackground>
            <View>
                <Text>Um exemplo de texto.</Text>
                <Text>Ver mais</Text>
            </View>
        </View>
    )
}

export default ImageCard;