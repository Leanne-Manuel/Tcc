import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
    const [index, setIndex] = useState(0);
   // const navigation = useNavigation();

    const slides = [
        {
            key: '1',
            image: require('../../assets/image 1.png'),
            text: 'Inicie sua aventura rumo à independência financeira'
        },
        {
            key: '2',
            image: require('../../assets/image 2.png'),
            text: 'ADescubra o caminho para a liberdade financeira!'
        },
        {
            key: '3',
            image: require('../../assets/image 3.png'),
            text: 'Alcance seus objetivos financeiros!'
        }
    ];

    return (
        <Swiper style={styles.Swipper}
            loop={false}
            showsButtons={true}
            onIndexChanged={setIndex}
            nextButton={<Text style={styles.buttonText}>Avançar</Text>}
            prevButton={<Text style={styles.buttonText}>Voltar</Text>}
        >
            {slides.map(slide => (
                <Slide key={slide.key} image={slide.image} text={slide.text} />
            ))}
        </Swiper>
    );
};

const Slide = ({ image, text }) => (
    <View style={styles.slide}>
        <Image source={image} style={styles.image} />
        <Text style={styles.text}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 20
    },
    text: {
        fontSize: 18,
        textAlign: 'center',
        marginHorizontal: 20
    },
    buttonText: {
        color: '#007aff',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop:550,
        marginLeft:40,
        marginRight:40
    }
});

export default OnboardingScreen;
