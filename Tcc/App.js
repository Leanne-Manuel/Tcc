import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './Routes/Routes';
import HomeScreen from './Screens/Desempenho/Desempenho';
import HomeJogos from './Screens/Jogo/Jogo';
import DesafioOrcamento from './Screens/Jogo/Orcamento';
import SimuladorInvestimentos from './Screens/Jogo/Simulador';
import JogoDaDivida from './Screens/Jogo/Divida';
import OnboardingScreen from './Screens/Home/Slide';
import GoalSelectionScreen from './Screens/Home/Metas';
import HomeNiveis from './Screens/Home/Niveis';

export default function App() {
  return (
   //<Routes/>
   //<OnboardingScreen/>
   //<GoalSelectionScreen/>
   <HomeNiveis/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
