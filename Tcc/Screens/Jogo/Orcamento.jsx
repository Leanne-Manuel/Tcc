import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

const DesafioOrcamento = () => {
  const orcamentoTotal = 1000; // Valor fixo do orçamento total
  const [despesas, setDespesas] = useState([
    { id: 1, nome: 'Aluguel', valorAlocado: '' },
    { id: 2, nome: 'Comida', valorAlocado: '' },
    { id: 3, nome: 'Transporte', valorAlocado: '' },
    { id: 4, nome: 'Escola', valorAlocado: '' },

    // Adicione mais despesas conforme necessário
  ]);

  const atualizarValorAlocado = (id, valor) => {
    const novasDespesas = despesas.map(despesa => {
      if (despesa.id === id) {
        return { ...despesa, valorAlocado: valor };
      }
      return despesa;
    });
    setDespesas(novasDespesas);
  };

  const verificarOrcamento = () => {
    const somaDespesas = despesas.reduce((acc, despesa) => acc + Number(despesa.valorAlocado), 0);
    if (somaDespesas <= orcamentoTotal) {
      Alert.alert('Sucesso!', 'Você alocou seu orçamento corretamente.');
    } else {
      Alert.alert('Ops!', 'O valor alocado excede o orçamento total.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Desafio de Orçamento</Text>
      <Text style={styles.orcamento}>Orçamento Total: R$ {orcamentoTotal}</Text>
      {despesas.map((despesa, index) => (
        <View key={despesa.id} style={styles.despesaContainer}>
          <Text style={styles.despesaNome}>{despesa.nome}:</Text>
          <TextInput
            style={styles.input}
            value={despesa.valorAlocado}
            onChangeText={(valor) => atualizarValorAlocado(despesa.id, valor)}
            keyboardType="numeric"
            placeholder="0"
          />
        </View>
      ))}
      <TouchableOpacity style={styles.botaoVerificar} onPress={verificarOrcamento}>
        <Text style={styles.botaoTexto}>Verificar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Adiciona um fundo claro para o aplicativo
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Cor mais escura para o texto do título
    marginBottom: 20,
    textAlign: 'center', // Centraliza o título
    marginTop:50,
  },
  orcamento: {
    fontSize: 18,
    marginBottom: 20,
    color: '#555', // Cor mais escura para o texto do orçamento
    textAlign: 'center', // Centraliza o orçamento
  },
  despesaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff', // Fundo branco para cada item de despesa
    padding: 10,
    borderRadius: 5, // Bordas arredondadas para os contêineres de despesa
    shadowColor: '#000', // Sombra para os contêineres de despesa
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  despesaNome: {
    fontSize: 16,
    color: '#333', // Cor mais escura para o nome da despesa
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: 100,
    textAlign: 'right',
    padding: 5,
    fontSize: 16,
    color: '#333', // Cor mais escura para o texto de entrada
  },
  botaoVerificar: {
    marginTop: 20,
    backgroundColor: '#4CAF50', // Cor verde para o botão
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  botaoTexto: {
    fontSize: 18,
    color: '#fff', // Texto branco para o botão
    fontWeight: 'bold',
  },
});

export default DesafioOrcamento;
