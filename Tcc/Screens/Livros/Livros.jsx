import React, { useState } from 'react';
import { Modal, View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { AntDesign } from '@expo/vector-icons';

const livros = [
  {
    id: '1',
    titulo: 'Educação Financeira Prática',
    autor: 'João Silva',
    descricao: 'Um guia prático para gerenciar suas finanças pessoais.',
    urlPDF: 'https://www.todoscontam.pt/sites/default/files/SiteCollectionDocuments/CadernoEducaoFinanceira1.pdf',
  },
  {
    id: '2',
    titulo: 'Investindo com Inteligência',
    autor: 'Maria Oliveira',
    descricao: 'Aprenda a investir de maneira inteligente e aumente seu patrimônio.',
    urlPDF: 'https://www.exemplo.com/cadernoEducaoFinanceira2.pdf',
  },
];

const Livros = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState('');

  const abrirPDF = (urlPDF) => {
    setSelectedPDF(urlPDF);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
       
      <FlatList
        data={livros}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.livroContainer} onPress={() => abrirPDF(item.urlPDF)}>
            <View style={styles.infoLivro}>
              <Text style={styles.tituloLivro}>{item.titulo}</Text>
              <Text style={styles.autorLivro}>{item.autor}</Text>
              <Text style={styles.descricaoLivro}>{item.descricao}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
       <TouchableOpacity>
        <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <WebView source={{ uri: selectedPDF }} />
        <TouchableOpacity style={styles.fecharModal} onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.fecharTexto}>Fechar</Text>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  livroContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  infoLivro: {
    flex: 1,
  },
  tituloLivro: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  autorLivro: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  descricaoLivro: {
    fontSize: 14,
  },
  fecharModal: {
    padding: 20,
    backgroundColor: '#007bff',
    alignItems: 'center',
  },
  fecharTexto: {
    color: 'white',
    fontSize: 18,
  },
});

export default Livros;

