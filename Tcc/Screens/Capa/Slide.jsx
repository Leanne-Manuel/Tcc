import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const Carrossel = () => {
    const [index, setIndex] = useState(0);
    const navigation = useNavigation();

    const slides = [
        { key: '1', image: require('../../assets/image 1.png'), text: 'Inicie sua aventura rumo à independência financeira' },
        { key: '2', image: require('../../assets/image 2.png'), text: 'Descubra o caminho para a liberdade financeira!' },
        { key: '3', image: require('../../assets/image 3.png'), text: 'Alcance seus objetivos financeiros!' },
    ];

    const isLastSlide = index === slides.length - 1;

    const handleNext = () => {
        if (!isLastSlide) {
            setIndex(index + 1);
        } else {
            navigation.navigate('HomePrincipal'); // Certifique-se que o nome é exatamente igual ao definido nas rotas
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <Swiper
                style={styles.swiper}
                loop={false}
                index={index}
                showsButtons={false}
                onIndexChanged={(newIndex) => setIndex(newIndex)}
            >
                {slides.map((slide) => (
                    <View key={slide.key} style={styles.slide}>
                        <Image source={slide.image} style={styles.image} />
                        <Text style={styles.text}>{slide.text}</Text>
                    </View>
                ))}
            </Swiper>

            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={handlePrev} disabled={index === 0}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNext}>
                    <Text style={styles.buttonText}>{isLastSlide ? 'Concluir' : 'Avançar'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    swiper: { backgroundColor: '#f5f5f5' },
    slide: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    image: { width: 300, height: 300, marginBottom: 20 },
    text: { fontSize: 18, textAlign: 'center', marginHorizontal: 20 },
    buttonWrapper: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    buttonText: { color: '#007aff', fontSize: 16, fontWeight: 'bold' },
});

export default Carrossel;
