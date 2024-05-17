import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const cursos = [
  { id: '1', title: 'Cursos', imageUri: require('../../assets/Cursos.png') },
  { id: '2', title: 'Exames', imageUri: require('../../assets/Exames.png') },
  { id: '3', title: 'Livros', imageUri: require('../../assets/Livros.png') },
  { id: '4', title: 'Exercícios', imageUri: require('../../assets/Exercicios.png') },
];

const imagensDestaque = [
  { id: '1', uri: require('../../assets/education.jpg') },
  { id: '2', uri: require('../../assets/education.jpg') },
  // Adicione mais imagens aqui conforme necessário
];

const Box = ({ title, imageUri, onPress }) => (
  <TouchableOpacity style={styles.box} onPress={onPress}>
    <ImageBackground source={imageUri} style={styles.imageBackground}>
      <Text style={styles.boxTitle}>{title}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

const HomeScreen = ({navigation}) => {
  // Função para navegar com base no título do curso
  const navigateToScreen = (title) => {
    switch (title) {
      case 'Cursos':
        navigation.navigate('HomeCursos');
        break;
      case 'Exames':
        navigation.navigate('HomeExames');
        break;
      case 'Livros':
        navigation.navigate('HomeLivros');
        break;
      case 'Exercícios':
        navigation.navigate('HomeExercicios');
        break;
      default:
        console.log('Nenhuma tela encontrada');
    }
  };
  return (
    <ScrollView style={styles.container}>

      <View style={styles.row}>
      {cursos.map(curso => (
          <Box key={curso.id} title={curso.title} imageUri={curso.imageUri} onPress={() => navigateToScreen(curso.title)} />
        ))}

      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
        {imagensDestaque.map(imagem => (
          <Image key={imagem.id} source={imagem.uri} style={styles.destaqueImage} />
        ))}
      </ScrollView>

      <View style={styles.analysisBox}>
      <Image source={require('../../assets/Desempenho.png')} style={styles.sideImage} />
        <Text style={styles.boxText}>    Análise do seu          Desempenho</Text>
        <TouchableOpacity style={styles.button} 
         onPress={() => navigation.navigate('HomeAnalise')}>
         <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
      </View>
      

      <View style={styles.gamesBox}>
      <Image source={require('../../assets/Jogos.png')} style={styles.sideImage} />
        <Text style={styles.boxText}>        Jogos</Text>
        <TouchableOpacity style={styles.button}
         onPress={() => navigation.navigate('HomeJogos')}>
        <Text style={styles.buttonText}>Jogar</Text>
      </TouchableOpacity>
      </View>
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#3498db',
    paddingVertical: 20,
  },
  topBarTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10, // Espaço entre o ícone e o texto
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  box: {
    width: '48%',
    height: 200,
    margin: '1%',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  boxTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    padding: 5,
  },
  horizontalScrollView: {
    height: 180,
    marginBottom: 20,
  },
  destaqueImage: {
    width: 250,
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
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10, // Alinhar com a margem da caixa correspondente
    marginRight: 10, // Alinhar com a margem da caixa correspondente
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boxText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
