// LoadingScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const LoadingScreen = ({ navigation }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((currentProgress) => {
        const nextProgress = currentProgress + 0.1;
        if (nextProgress >= 1) {
          clearInterval(interval);
          navigation.navigate("HomePrincipal"); // Navega para a tela principal
        }
        return nextProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [navigation]);

  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Preparando o seu curso...</Text>
      <Image
        source={require("../../assets/Cursos.png")}
        style={styles.loadingImage}
      />
      <ActivityIndicator size="large" color="#2196F3" style={styles.activityIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  loadingText: {
    fontSize: 18,
    marginBottom: 20,
  },
  loadingImage: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  activityIndicator: {
    marginTop: 20,
  },
});

export default LoadingScreen;

