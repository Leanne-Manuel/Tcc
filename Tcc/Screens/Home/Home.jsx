import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const cursos = [
  { id: '1', title: 'Cursos', imageUri: require('../../assets/Cursos.png') },
  { id: '2', title: 'Exames', imageUri: require('../../assets/Exames.png') },
  { id: '3', title: 'Livros', imageUri: require('../../assets/Livros.png') },
  { id: '4', title: 'Exercícios', imageUri: require('../../assets/Exercicios.png') },
];

const imagensDestaque = [
  { id: '1', uri: require('../../assets/education.jpg') },
  { id: '2', uri: require('../../assets/education.jpg') },
];

const Box = ({ title, imageUri, onPress }) => (
  <TouchableOpacity style={styles.box} onPress={onPress}>
    <ImageBackground source={imageUri} style={styles.imageBackground}>
      <Text style={styles.boxTitle}>{title}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        {cursos.map((curso) => (
          <Box key={curso.id} title={curso.title} imageUri={curso.imageUri} onPress={() => navigation.navigate(curso.title)} />
        ))}
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
        {imagensDestaque.map((imagem) => (
          <Image key={imagem.id} source={imagem.uri} style={styles.destaqueImage} />
        ))}
      </ScrollView>

      <View style={styles.analysisBox}>
        <Image source={require('../../assets/Desempenho.png')} style={styles.sideImage} />
        <Text style={styles.boxText}>Análise do seu Desempenho</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeAnalise')}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gamesBox}>
        <Image source={require('../../assets/Jogos.png')} style={styles.sideImage} />
        <Text style={styles.boxText}>Jogos</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeJogos')}>
          <Text style={styles.buttonText}>Jogar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const NoticiasDicasScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Notícias e Dicas</Text>
  </View>
);

const RecompensasConquistasScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Recompensas e Conquistas</Text>
  </View>
);

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
              <Text style={styles.menuIcon}>☰</Text>
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <View style={styles.headerTitle}>
              <Image source={require('../../assets/EduFinanca.png')} style={styles.logo} />
              <Text style={styles.appTitle}>Educação Financeira</Text>
            </View>
          ),
        })}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notícias e Dicas" component={NoticiasDicasScreen} />
        <Drawer.Screen name="Recompensas e Conquistas" component={RecompensasConquistasScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    marginLeft: 15,
  },
  menuIcon: {
    fontSize: 30,
    color: 'black',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  appTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal: '2%',
  },
  box: {
    width: '48%',
    height: 150,
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 3,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 5,
  },
  boxTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  horizontalScrollView: {
    height: 150,
    marginBottom: 20,
  },
  destaqueImage: {
    width: 200,
    height: '100%',
    marginRight: 10,
    borderRadius: 10,
  },
  analysisBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    elevation: 3,
  },
  gamesBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    elevation: 3,
  },
  sideImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boxText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 14,
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  screenText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DrawerNavigator;
