import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './Screens/Cadastro/Teste';
import HomeScreen from './Screens/Login/Login';
import Home from './Screens/Home/Home';
import Teste from './Screens/Cadastro/Teste';
import CourseContent from './Screens/Playlist/Playlist';
import TodoApp from './Screens/Playlist/Playlist';
import Conteudo from './Screens/Conteudo/Conteudo';
import Exercicios from './Screens/Exercicios/Exercícios';
import Quizz from './Screens/Exercicios/Quizz';
import Exames from './Screens/Exames/Exames';

export default function App() {
  return (
   <Exames/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
