import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Animated, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const SimuladorInvestimentos = () => {
  const [tipoInvestimento, setTipoInvestimento] = useState('');
  const [valorInicial, setValorInicial] = useState('');
  const [resultado, setResultado] = useState(null);
  const [graficoDados, setGraficoDados] = useState(null);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    if (resultado) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    }
  }, [resultado]);

  const simularInvestimento = () => {
    const valor = parseFloat(valorInicial);
    if (isNaN(valor) || !tipoInvestimento) {
      Alert.alert('Erro', 'Insira um valor válido e selecione um tipo de investimento.');
      return;
    }

    let retorno;
    let taxaRetorno = tipoInvestimento === 'rendaFixa' ? 0.05 : 0.08;
    let dadosGrafico = [];
    for (let ano = 1; ano <= 5; ano++) {
      retorno = valor * Math.pow(1 + taxaRetorno, ano);
      dadosGrafico.push(retorno.toFixed(2));
    }

    setResultado(`Valor após 5 anos: R$ ${retorno.toFixed(2)}`);
    setGraficoDados({
      labels: ['1 ano', '2 anos', '3 anos', '4 anos', '5 anos'],
      datasets: [
        {
          data: dadosGrafico,
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ]
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Simulador de Investimentos</Text>

      <View style={styles.selecaoTipo}>
        <BotaoTipo
          selecionado={tipoInvestimento === 'rendaFixa'}
          onPress={() => setTipoInvestimento('rendaFixa')}
          titulo="Renda Fixa"
        />
        <BotaoTipo
          selecionado={tipoInvestimento === 'acoes'}
          onPress={() => setTipoInvestimento('acoes')}
          titulo="Ações"
        />
      </View>

      <TextInput
        style={styles.input}
        value={valorInicial}
        onChangeText={setValorInicial}
        placeholder="Valor Inicial (R$)"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.botaoSimular} onPress={simularInvestimento}>
        <Text style={styles.botaoTexto}>Simular</Text>
      </TouchableOpacity>

      {resultado && (
        <Animated.View style={[styles.resultado, { opacity: fadeAnim }]}>
          <Text style={styles.resultadoTexto}>{resultado}</Text>
        </Animated.View>
      )}

      {graficoDados && (
        <View>
          <Text style={styles.graficoTitulo}>Crescimento do Investimento</Text>
          <LineChart
            data={graficoDados}
            width={screenWidth - 30}
            height={220}
            chartConfig={{
              backgroundColor: '#e26a00',
              backgroundGradientFrom: '#fb8c00',
              backgroundGradientTo: '#ffa726',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726'
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>
      )}
    </ScrollView>
  );
};

const BotaoTipo = ({ selecionado, onPress, titulo }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.botaoTipo, selecionado && styles.botaoTipoSelecionado]}>
    <Text style={styles.botaoTipoTexto}>{titulo}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  selecaoTipo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  botaoTipo: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  botaoTipoSelecionado: {
    backgroundColor: '#ddd',
  },
  botaoTipoTexto: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  botaoSimular: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  botaoTexto: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultado: {
    alignItems: 'center',
    marginBottom: 20,
  },
  resultadoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  graficoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default SimuladorInvestimentos;

