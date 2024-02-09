import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const Analise= () => {
  // Dados de exemplo para cursos, quizzes, exames e exercícios
  const dataCurso = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{ data: [5, 6, 7, 8, 5, 6], strokeWidth: 2 }],
  };

  const dataQuiz = {
    labels: ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4'],
    datasets: [{ data: [80, 70, 90, 85], strokeWidth: 2 }],
  };

  const dataExame = {
    labels: ['Exame 1', 'Exame 2', 'Exame 3'],
    datasets: [{ data: [75, 88, 80], strokeWidth: 2 }],
  };

  const dataExercicio = {
    labels: ['Exercício 1', 'Exercício 2', 'Exercício 3', 'Exercício 4'],
    datasets: [{ data: [90, 95, 87, 93], strokeWidth: 2 }],
  };

  const chartConfig = {
    backgroundColor: '#022173',
    backgroundGradientFrom: '#022173',
    backgroundGradientTo: '#1b3fa0',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: { borderRadius: 16 },
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Análise de Desempenho</Text>

      <Section
        title="Progresso do Curso"
        data={dataCurso}
        chartType="line"
        chartConfig={chartConfig}
      />
      <Section
        title="Progresso em Quizzes"
        data={dataQuiz}
        chartType="line"
        chartConfig={chartConfig}
      />
      <Section
        title="Desempenho nos Exames"
        data={dataExame}
        chartType="bar"
        chartConfig={chartConfig}
      />
      <Section
        title="Progresso nos Exercícios"
        data={dataExercicio}
        chartType="bar"
        chartConfig={chartConfig}
      />

      {/* Aqui, você pode adicionar mais seções de análise, como horas de estudo, participação em fóruns, etc. */}
    </ScrollView>
  );
};

const Section = ({ title, data, chartType, chartConfig }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {chartType === 'line' ? (
      <LineChart
        data={data}
        width={screenWidth - 30}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
    ) : (
      <BarChart
        data={data}
        width={screenWidth - 30}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
      />
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
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

export default Analise;

