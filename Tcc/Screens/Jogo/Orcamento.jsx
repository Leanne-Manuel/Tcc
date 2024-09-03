import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

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

// Componente para botões de adicionar
const AddButton = ({ onPress, icon }) => (
  <TouchableOpacity style={styles.addButton} onPress={onPress}>
    <FontAwesome name={icon} size={24} color="white" />
  </TouchableOpacity>
);

const Orcamento = () => {
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const handleAddIncome = () => {
    if (income) {
      const newIncomes = [...incomes, parseFloat(income)];
      setIncomes(newIncomes);
      const newTotalIncome = newIncomes.reduce((sum, item) => sum + item, 0);
      setTotalIncome(newTotalIncome);
      setBalance(newTotalIncome - totalExpense);
      setIncome("");
    }
  };

  const handleAddExpense = () => {
    if (expense) {
      const newExpenses = [...expenses, parseFloat(expense)];
      setExpenses(newExpenses);
      const newTotalExpense = newExpenses.reduce((sum, item) => sum + item, 0);
      setTotalExpense(newTotalExpense);
      setBalance(totalIncome - newTotalExpense);
      setExpense("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulador de Orçamento Pessoal</Text>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="Adicionar Receita"
          keyboardType="numeric"
          value={income}
          onChangeText={setIncome}
        />
        <AddButton onPress={handleAddIncome} icon="plus-circle" />
      </View>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="Adicionar Despesa"
          keyboardType="numeric"
          value={expense}
          onChangeText={setExpense}
        />
        <AddButton onPress={handleAddExpense} icon="minus-circle" />
      </View>
      <View style={styles.budgetContainer}>
        <Text style={styles.budgetText}>
          Receitas Totais:{" "}
          <Text style={styles.budgetValue}>R$ {totalIncome.toFixed(2)}</Text>
        </Text>
        <Text style={styles.budgetText}>
          Despesas Totais:{" "}
          <Text style={styles.budgetValue}>R$ {totalExpense.toFixed(2)}</Text>
        </Text>
        <Text style={styles.budgetText}>
          Saldo: <Text style={styles.budgetValue}>R$ {balance.toFixed(2)}</Text>
        </Text>
      </View>
      <Text style={styles.subtitle}>Detalhes:</Text>
      <ScrollView style={styles.detailsContainer}>
        <Text style={styles.detailTitle}>Receitas:</Text>
        {incomes.length > 0 ? (
          incomes.map((item, index) => (
            <View key={index} style={styles.detailRow}>
              <FontAwesome
                name="plus"
                size={16}
                color="#2ecc71"
                style={styles.detailIcon}
              />
              <Text style={styles.detailText}>R$ {item.toFixed(2)}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noDataText}>Nenhuma receita adicionada</Text>
        )}
        <Text style={styles.detailTitle}>Despesas:</Text>
        {expenses.length > 0 ? (
          expenses.map((item, index) => (
            <View key={index} style={styles.detailRow}>
              <FontAwesome
                name="minus"
                size={16}
                color="#e74c3c"
                style={styles.detailIcon}
              />
              <Text style={styles.detailText}>R$ {item.toFixed(2)}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noDataText}>Nenhuma despesa adicionada</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#2c3e50",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  addButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  budgetContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 3,
  },
  budgetText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  budgetValue: {
    color: "#16a085",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2c3e50",
  },
  detailsContainer: {
    maxHeight: 200,
  },
  detailTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#34495e",
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  detailIcon: {
    marginRight: 10,
  },
  detailText: {
    fontSize: 16,
    color: "#7f8c8d",
  },
  noDataText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#bdc3c7",
  },
});

export default Orcamento;
