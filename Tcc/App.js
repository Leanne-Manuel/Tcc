import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './Routes/Routes';
import Metas from './Screens/Jogo/Metas';
import HomeEducador from './Screens/Educador/Educador';


export default function App() {
  return (

<Routes/>
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
