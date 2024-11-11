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
import SimuladorInvestimentos from '../Screens/Jogo/Simulador';
import DesafioOrcamento from '../Screens/Jogo/Orcamento';
import JogoDaDivida from '../Screens/Jogo/Divida';
import Capa from '../Screens/Capa/Capa.';
import Carrossel from '../Screens/Capa/Slide';
import LoginScreen from '../Screens/Login/Login';
import Cadastro from '../Screens/Login/Cadastro';
import HomeNiveis from '../Screens/Capa/Niveis';
import LoadingScreen from '../Screens/Capa/Loading';
import ContExercicios from '../Screens/Exames/ContExercicios';
import Resultado from '../Screens/Exames/Resultados';


const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Capa" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Capa" component={Capa} />
        <Stack.Screen name="Carrossel" component={Carrossel} />

        <Stack.Screen name="HomePrincipal" component={HomeScreen} />
        <Stack.Screen name="HomeLogin" component={LoginScreen} />
        <Stack.Screen name="HomeCadastro" component={Cadastro} />
        <Stack.Screen name="HomeNiveis" component={HomeNiveis} />
        <Stack.Screen name="HomeLoading" component={LoadingScreen} />

        <Stack.Screen name="HomeCursos" component={CourseContent} />
        <Stack.Screen name="HomeExames" component={Exames} />
        <Stack.Screen name="HomeLivros" component={Livros} />
        <Stack.Screen name="HomeExercicios" component={Exercicios} />
        <Stack.Screen name="HomeAnalise" component={Analise} />
        <Stack.Screen name="HomeJogos" component={HomeJogos} />

        <Stack.Screen name="CursoConteudo" component={Conteudo} />
        <Stack.Screen name="Quizz" component={QuizScreen} />
        <Stack.Screen name="ContExercicios" component={ContExercicios} />
        <Stack.Screen name="Resultados" component={Resultado} />

        <Stack.Screen name="DesafioDeOrcamento" component={DesafioOrcamento} />
        <Stack.Screen name="SimuladorDeInvestimentos" component={SimuladorInvestimentos} />
        <Stack.Screen name="JogoDaDivida" component={JogoDaDivida} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
