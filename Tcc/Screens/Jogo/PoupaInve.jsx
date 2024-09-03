import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Componente para campos de entrada
const InputField = ({ value, onChangeText, placeholder, keyboardType }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    keyboardType={keyboardType}
    value={value}
    onChangeText={onChangeText}
  />
);

// Componente para botões de investimento
const InvestmentButton = ({ onPress, title, selected }) => (
  <TouchableOpacity 
    style={[styles.investmentButton, selected && styles.selectedButton]} 
    onPress={onPress}>
    <Text style={[styles.buttonText, selected && styles.selectedButtonText]}>{title}</Text>
  </TouchableOpacity>
);

const PoupaInve = () => {
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [years, setYears] = useState('');
  const [investmentType, setInvestmentType] = useState('Poupança');
  const [futureValue, setFutureValue] = useState(0);

  const investmentOptions = ['Poupança', 'CDB', 'Fundos de Investimento'];

  // Taxas de juros anuais fixas para cada tipo de investimento
  const interestRates = {
    'Poupança': 4.5, // por exemplo, 4.5% ao ano
    'CDB': 6.5, // por exemplo, 6.5% ao ano
    'Fundos de Investimento': 8.0, // por exemplo, 8.0% ao ano
  };

  const calculateFutureValue = () => {
    const P = parseFloat(monthlyContribution);
    const r = parseFloat(interestRates[investmentType]) / 100 / 12; // taxa de juros mensal
    const n = parseFloat(years) * 12; // número de meses
    const FV = P * ((Math.pow(1 + r, n) - 1) / r);
    setFutureValue(FV.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulador de Poupança e Investimentos</Text>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="Contribuição Mensal (R$)"
          keyboardType="numeric"
          value={monthlyContribution}
          onChangeText={setMonthlyContribution}
        />
      </View>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="Taxa de Juros Anual (%)"
          keyboardType="numeric"
          value={interestRate}
          onChangeText={setInterestRate}
        />
      </View>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="Número de Anos"
          keyboardType="numeric"
          value={years}
          onChangeText={setYears}
        />
      </View>
      <Text style={styles.subtitle}>Tipo de Investimento:</Text>
      <View style={styles.investmentOptionsContainer}>
        {investmentOptions.map(option => (
          <InvestmentButton 
            key={option}
            title={option}
            selected={investmentType === option}
            onPress={() => setInvestmentType(option)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.calculateButton} onPress={calculateFutureValue}>
        <Text style={styles.calculateButtonText}>Calcular</Text>
      </TouchableOpacity>
      {futureValue > 0 && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Valor Futuro: R$ {futureValue}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2c3e50',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  investmentOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  investmentButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#3498db',
  },
  selectedButton: {
    backgroundColor: '#1abc9c',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  selectedButtonText: {
    color: 'white',
  },
  calculateButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  calculateButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resultContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
});

export default PoupaInve;

