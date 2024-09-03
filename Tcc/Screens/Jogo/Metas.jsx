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

// Componente para botões de calcular
const CalculateButton = ({ onPress }) => (
  <TouchableOpacity style={styles.calculateButton} onPress={onPress}>
    <Text style={styles.calculateButtonText}>Calcular</Text>
  </TouchableOpacity>
);

const Metas = () => {
  const [goalAmount, setGoalAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [years, setYears] = useState('');
  const [monthlySavings, setMonthlySavings] = useState(0);

  const calculateMonthlySavings = () => {
    const FV = parseFloat(goalAmount);
    const r = parseFloat(interestRate) / 100 / 12; // taxa de juros mensal
    const n = parseFloat(years) * 12; // número de meses
    const P = (FV * r) / (Math.pow(1 + r, n) - 1);
    setMonthlySavings(P.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulador de Metas Financeiras</Text>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="Valor da Meta (R$)"
          keyboardType="numeric"
          value={goalAmount}
          onChangeText={setGoalAmount}
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
          placeholder="Prazo (Anos)"
          keyboardType="numeric"
          value={years}
          onChangeText={setYears}
        />
      </View>
      <CalculateButton onPress={calculateMonthlySavings} />
      {monthlySavings > 0 && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Você precisa economizar: R$ {monthlySavings} por mês</Text>
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

export default Metas;
