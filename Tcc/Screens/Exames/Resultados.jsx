import React, { useState } from "react";
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Modal, Alert } from "react-native";

const Resultados = ({ route, navigation }) => {
  const { respostas, questoes } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  // Calcular o número de acertos e erros
  const calcularResultados = () => {
    let acertos = 0;
    let erros = 0;

    questoes.forEach((questao) => {
      if (respostas[questao.id] === questao.respostaCorreta) {
        acertos += 1;
      } else {
        erros += 1;
      }
    });

    return { acertos, erros, total: questoes.length };
  };

  const { acertos, erros, total } = calcularResultados();
  const percentualAcertos = (acertos / total) * 100;

  const emitirCertificado = () => {
    if (percentualAcertos >= 80) {
      setModalVisible(true);
    } else {
      Alert.alert("Não Elegível para Certificado", "Você precisa acertar pelo menos 80% para receber um certificado.");
    }
  };

  const repetirExame = () => {
    navigation.navigate("ContExercicios");
  };

  const fecharCertificado = () => {
    setModalVisible(false);
    navigation.navigate("ContExercicios"); // Redireciona para a tela de exercícios após fechar o modal
  };

  const Certificado = () => (
    <View style={styles.certificadoContainer}>
      <Text style={styles.certificadoTitulo}>Certificado de Conclusão</Text>
      <View style={styles.certificadoContent}>
        <Text style={styles.certificadoTexto}>Parabéns!</Text>
        <Text style={styles.certificadoTexto}>
          Você concluiu o exame com sucesso!
        </Text>
        <Text style={styles.certificadoTexto}>
          Percentual de Acertos: <Text style={styles.certificadoValor}>{percentualAcertos.toFixed(2)}%</Text>
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Resultados do Exame</Text>
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoTexto}>
            Percentual de Acertos: <Text style={styles.resultadoValor}>{percentualAcertos.toFixed(2)}%</Text>
          </Text>
        </View>
        {percentualAcertos >= 80 ? (
          <TouchableOpacity
            style={styles.botaoEmitirCertificado}
            onPress={emitirCertificado}
          >
            <Text style={styles.botaoTexto}>Emitir Certificado</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.botaoRepetirExame}
            onPress={repetirExame}
          >
            <Text style={styles.botaoTexto}>Repetir Exame</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.botaoTexto}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal de Certificado */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => fecharCertificado()}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Certificado />
            <TouchableOpacity
              style={styles.botaoFecharModal}
              onPress={fecharCertificado}
            >
              <Text style={styles.botaoTexto}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f8f9fa" },
  container: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  titulo: { fontSize: 28, fontWeight: 'bold', color: "#343a40", marginBottom: 20 },
  resultadoContainer: { 
    backgroundColor: "#ffffff", 
    borderRadius: 10, 
    padding: 20, 
    shadowColor: "#000000", 
    shadowOpacity: 0.1, 
    shadowRadius: 10, 
    elevation: 5, 
    width: '100%', 
    marginBottom: 20 
  },
  resultadoTexto: { fontSize: 18, color: "#495057", marginBottom: 10 },
  resultadoValor: { fontWeight: 'bold', color: "#007bff" },
  botaoEmitirCertificado: {
    padding: 15,
    backgroundColor: "#28a745",
    borderRadius: 5,
    alignItems: "center",
    width: '100%',
    marginBottom: 10,
  },
  botaoRepetirExame: {
    padding: 15,
    backgroundColor: "#ffc107",
    borderRadius: 5,
    alignItems: "center",
    width: '100%',
    marginBottom: 10,
  },
  botaoVoltar: {
    padding: 15,
    backgroundColor: "#6c757d",
    borderRadius: 5,
    alignItems: "center",
    width: '100%',
  },
  botaoTexto: { color: "white", fontSize: 16, fontWeight: 'bold' },
  modalContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)' 
  },
  modalContent: { 
    backgroundColor: '#fff', 
    borderRadius: 10, 
    padding: 20, 
    width: '90%', 
    alignItems: 'center' 
  },
  certificadoContainer: { 
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#007bff',
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#ffffff',
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  certificadoTitulo: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#007bff', 
    marginBottom: 10 
  },
  certificadoContent: {
    marginBottom: 20,
    alignItems: 'center'
  },
  certificadoTexto: { 
    fontSize: 18, 
    color: '#495057', 
    marginBottom: 5 
  },
  certificadoValor: {
    fontWeight: 'bold',
    color: '#007bff',
  },
  botaoFecharModal: {
    padding: 15,
    backgroundColor: "#007bff",
    borderRadius: 5,
    alignItems: "center",
    width: '100%',
  },
});

export default Resultados;
