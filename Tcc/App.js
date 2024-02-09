import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './Routes/Routes';
import HomeScreen from './Screens/Desempenho/Desempenho';
import HomeJogos from './Screens/Jogo/Jogo';

export default function App() {
  return (
   <HomeJogos/>
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
