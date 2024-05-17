import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, ProgressBarAndroid, Platform, ProgressViewIOS } from 'react-native';

const DicasDeDivida = [
  "Pagar mais do que o mínimo pode reduzir significativamente o tempo total e os juros pagos sobre uma dívida.",
  "Considere a estratégia de bola de neve: pague a dívida menor primeiro, ganhando impulso à medida que cada uma é paga.",
  "Considere a estratégia do avalanche: pague a dívida com a maior taxa de juros primeiro para economizar no total de juros pagos.",
];

const JogoDaDivida = () => {
  const [dividaInicial, setDividaInicial] = useState('');
  const [estrategia, setEstrategia] = useState('');
  const [pagamentoMensal, setPagamentoMensal] = useState('');
  const [mesesParaPagar, setMesesParaPagar] = useState(0);
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    if (mesesParaPagar > 0) {
      const progressoAtual = Math.min(1, mesesParaPagar / 120);
      setProgresso(progressoAtual);
    }
  }, [mesesParaPagar]);

  const calcularPagamento = () => {
    let saldoDevedor = parseFloat(dividaInicial);
    let pagamento = parseFloat(pagamentoMensal);
    let meses = 0;

    if (!saldoDevedor || !pagamento || !estrategia) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    while (saldoDevedor > 0 && meses <= 120) {
      meses++;
      switch (estrategia) {
        case 'pagamentoMinimo':
          saldoDevedor = saldoDevedor * 1.1 - pagamento; // Juros de 10%
          break;
        case 'pagamentoFixo':
          if (saldoDevedor < 1000) saldoDevedor -= 100; // Pagamento extra se menor que 1000
          saldoDevedor -= pagamento;
          break;
        default:
          saldoDevedor -= pagamento;
          break;
      }

      if (saldoDevedor <= 0) {
        setMesesParaPagar(meses);
        return;
      }
    }

    if (meses > 120) {
      Alert.alert('Alerta', 'Sua dívida não será paga em 10 anos com essa estratégia e pagamento mensal. Tente aumentar seu pagamento mensal ou mudar a estratégia.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Jogo da Dívida</Text>

      <TextInput
        style={styles.input}
        placeholder="Dívida Inicial"
        keyboardType="numeric"
        value={dividaInicial}
        onChangeText={setDividaInicial}
      />

      <TextInput
        style={styles.input}
        placeholder="Pagamento Mensal"
        keyboardType="numeric"
        value={pagamentoMensal}
        onChangeText={setPagamentoMensal}
      />

      <View style={styles.estrategiasContainer}>
        <TouchableOpacity
          style={[styles.estrategiaButton, estrategia === 'pagamentoMinimo' && styles.estrategiaButtonSelected]}
          onPress={() => setEstrategia('pagamentoMinimo')}>
          <Text style={styles.estrategiaButtonText}>Pagamento Mínimo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.estrategiaButton, estrategia === 'pagamentoFixo' && styles.estrategiaButtonSelected]}
          onPress={() => setEstrategia('pagamentoFixo')}>
          <Text style={styles.estrategiaButtonText}>Pagamento Fixo</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.calcularButton} onPress={calcularPagamento}>
        <Text style={styles.calcularButtonText}>Calcular</Text>
      </TouchableOpacity>

      {mesesParaPagar > 0 && (
        <View>
          <Text style={styles.resultadoText}>Sua dívida será paga em {mesesParaPagar} meses</Text>

          {Platform.OS === "android" ? (
            <ProgressBarAndroid style={styles.progress} styleAttr="Horizontal" progress={progresso} indeterminate={false} />
          ) : (
            <ProgressViewIOS style={styles.progress} progress={progresso} />
          )}
        </View>
      )}

      <View style={styles.dicasContainer}>
        {DicasDeDivida.map((dica, index) => (
          <Text key={index} style={styles.dicaText}>{dica}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  estrategiasContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  estrategiaButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  estrategiaButtonSelected: {
    backgroundColor: '#f0f8ff',
  },
  estrategiaButtonText: {
    color: '#007bff',
    textAlign: 'center',
  },
  calcularButton: {
    backgroundColor: '#34c759',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  calcularButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultadoText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  progress: {
    marginTop: 20,
  },
  dicasContainer: {
    marginTop: 30,
  },
  dicaText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default JogoDaDivida;
