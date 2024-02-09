import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const jogos = [
  {
    id: '1',
    nome: 'Desafio de Orçamento',
    descricao: 'Teste suas habilidades de orçamento neste jogo interativo.',
    imagem: require('../../assets/jogoOrcamento.png'),
  },
  {
    id: '2',
    nome: 'Quiz de Investimentos',
    descricao: 'Desafie seus conhecimentos sobre investimentos com este quiz.',
    imagem: require('../../assets/jogoInvestimento.png'),
  },
  // Adicione mais jogos conforme necessário
];

const JogoItem = ({ jogo, onPress }) => (
  <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
    <Image source={jogo.imagem} style={styles.imagemJogo} />
    <View style={styles.infoContainer}>
      <Text style={styles.nomeJogo}>{jogo.nome}</Text>
      <Text style={styles.descricaoJogo}>{jogo.descricao}</Text>
    </View>
  </TouchableOpacity>
);

const HomeJogos = () => {
  const jogar = (jogo) => {
    // Implementar a navegação para o jogo selecionado
    console.log(`Navegando para o jogo: ${jogo.nome}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <JogoItem jogo={item} onPress={() => jogar(item)} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
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
    justifyContent: 'center',
  },
  nomeJogo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descricaoJogo: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeJogos;
