import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/Home/Home';
import Conteudo from '../Screens/Curso/Conteudo';
import Exercicios from '../Screens/Exercicios/Exercícios';
import Livros from '../Screens/Livros/Livros';
import Exames from '../Screens/Exames/Exames';
import CourseContent from '../Screens/Curso/Playlist';
import QuizScreen from '../Screens/Exercicios/Quizz';
import Analise from '../Screens/Desempenho/Desempenho';
import HomeJogos from '../Screens/Jogo/Jogo';


const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePrincipal">
        <Stack.Screen name="HomePrincipal" component={HomeScreen} />
        <Stack.Screen name="HomeCursos" component={CourseContent} />
        <Stack.Screen name="HomeExames" component={Exames} />
        <Stack.Screen name="HomeLivros" component={Livros} />
        <Stack.Screen name="HomeExercicios" component={Exercicios} />
        <Stack.Screen name="HomeAnalise" 
        component={Analise} />
        <Stack.Screen name="HomeJogos" component={HomeJogos} />

        <Stack.Screen name="CursoConteudo" component={Conteudo} />
        <Stack.Screen name="Quizz" component={QuizScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;