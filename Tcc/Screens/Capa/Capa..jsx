import React, { useEffect} from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Capa = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Carrossel');
    }, 2000); // Duração da splash screen
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/EduFinanca.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 300,
    height: 300,
  }
});

export default Capa;
