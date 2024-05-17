import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation


const jogos = [
  {
    id: "1",
    nome: "Desafio de Orçamento",
    descricao: "O usuário recebe um orçamento mensal fixo e uma lista de despesas. O objetivo é alocar o orçamento de forma a cobrir todas as despesas sem excedê-lo",
    imagem: require("../../assets/Exames.png"),
  },
  {
    id: "2",
    nome: "Simulador de Investimentos",
    descricao: "O usuário escolhe um tipo de investimento e um valor inicial. O jogo simula o retorno desse investimento ao longo do tempo",
    imagem: require("../../assets/Cursos.png"),
  },
  {
    id: "3",
    nome: "Jogo da Dívida",
    descricao: "O usuário tem uma dívida inicial e deve escolher entre várias estratégias para pagá-la, enquanto lida com despesas mensais recorrentes.",
    imagem: require("../../assets/Exercicios.png"),
  },
  // Adicione mais jogos conforme necessário
];

const JogoItem = ({ jogo }) => {
  const navigation = useNavigation(); // Usar useNavigation

  const jogar = () => {
    // Exemplo de navegação baseada no id do jogo
    // Você deve substituir 'NomeDaPaginaDoJogo' pelo nome real da página para cada jogo
    let nomeDaRota = '';
    switch (jogo.id) {
      case '1':
        nomeDaRota = 'DesafioDeOrcamento';
        break;
      case '2':
        nomeDaRota = 'SimuladorDeInvestimentos';
        break;
      case '3':
        nomeDaRota = 'JogoDaDivida';
        break;
      default:
        console.warn('Jogo não encontrado');
        return;
    }
    navigation.navigate(nomeDaRota);
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={jogar}>
      <Image source={jogo.imagem} style={styles.imagemJogo} />
      <View style={styles.infoContainer}>
        <Text style={styles.nomeJogo}>{jogo.nome}</Text>
        <Text style={styles.descricaoJogo}>{jogo.descricao}</Text>
        <TouchableOpacity style={styles.botaoJogar} onPress={jogar}>
          <Text style={styles.botaoJogarTexto}>Jogar</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const HomeJogos = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <JogoItem jogo={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  imagemJogo: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
  },
  nomeJogo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descricaoJogo: {
    fontSize: 14,
    color: "#666",
  },
  botaoJogarTexto:{
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10, // Alinhar com a margem da caixa correspondente
    marginRight: 10, // Alinhar com a margem da caixa correspondente
  },
  
});

export default HomeJogos;
