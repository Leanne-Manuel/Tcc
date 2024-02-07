import React, { useState, useRef } from "react";
import { View, Text, Image, ScrollView, Button, StyleSheet, Dimensions } from "react-native";

// Substitua com os caminhos corretos para suas imagens locais
const image1 = require("../../assets/teste.png");
const image2 = require("../../assets/Cursos.png");
const image3 = require("../../assets/teste.png");

const { width } = Dimensions.get("window");
const imageHeight = width * 0.5; // Reduzi a altura da imagem

const Teste = () => {
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollViewRef = useRef();

  const scrollToImage = (index) => {
    scrollViewRef.current?.scrollTo({ x: width * index, animated: true });
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    const nextIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    scrollToImage(nextIndex);
  };

  const previousImage = () => {
    const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    scrollToImage(prevIndex);
  };

  const renderDots = () => {
    return images.map((_, index) => (
      <View
        key={index}
        style={[styles.dot, currentImageIndex === index && styles.activeDot]}
      />
    ));
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
          if (newIndex !== currentImageIndex) {
            setCurrentImageIndex(newIndex);
          }
        }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={{ width: width, height: imageHeight }}
          />
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Anterior" onPress={previousImage} />
        <Button title="Próxima" onPress={nextImage} />
      </View>
      <Text style={styles.text}>
        Descrição da imagem {currentImageIndex + 1}
      </Text>
      <View style={styles.dotContainer}>{renderDots()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: "center",
    marginVertical: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 8,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#ddd",
    margin: 4,
  },
  activeDot: {
    backgroundColor: "blue",
  },
});

export default Teste;

