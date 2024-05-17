import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 


const quizData = [
  {
    pergunta: "Qual é o primeiro passo para gerir suas finanças pessoais?",
    opcoes: [
      "Fazer um empréstimo",
      "Criar um orçamento",
      "Gastar tudo e economizar depois",
    ],
    respostaCorreta: "Criar um orçamento",
  },
  {
    pergunta: "Qual a importância de poupar dinheiro?",
    opcoes: [
      "Para gastar mais no futuro",
      "Para enfrentar emergências financeiras",
      "Não é importante poupar",
    ],
    respostaCorreta: "Para enfrentar emergências financeiras",
  },
  // Adicione mais perguntas conforme necessário
];

const QuizScreen = () => {
  const [respostas, setRespostas] = useState({});
  const [quizConcluido, setQuizConcluido] = useState(false);
  const [acertos, setAcertos] = useState(0);

  const responderQuiz = (index, opcao) => {
    setRespostas({
      ...respostas,
      [index]: opcao,
    });
  };

  const confirmarRespostas = () => {
    let acertosTemp = 0;
    quizData.forEach((pergunta, index) => {
      if (respostas[index] === pergunta.respostaCorreta) {
        acertosTemp++;
      }
    });
    setAcertos(acertosTemp);
    setQuizConcluido(true);
  };
  const reiniciarQuiz = () => {
    setRespostas({});
    setQuizConcluido(false);
    setAcertos(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Renderização das perguntas e opções */}
        {quizData.map((item, index) => (
          <View key={index} style={styles.perguntaContainer}>
            <Text style={styles.perguntaTexto}>{item.pergunta}</Text>
            {item.opcoes.map((opcao) => (
              <TouchableOpacity
                key={opcao}
                style={[
                  styles.opcao,
                  respostas[index] === opcao && !quizConcluido ? styles.opcaoSelecionada : null,
                  quizConcluido ? (opcao === item.respostaCorreta ? styles.opcaoCorreta : (respostas[index] === opcao ? styles.opcaoIncorreta : styles.opcao)) : null,
                ]}
                onPress={() => !quizConcluido && responderQuiz(index, opcao)}
              >
                <Text style={styles.opcaoTexto}>{opcao}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        {quizConcluido && (
          <>
            <Text style={styles.resultadoTexto}>Você acertou {acertos} de {quizData.length} perguntas!</Text>
            <TouchableOpacity style={styles.botaoReiniciar} onPress={reiniciarQuiz}>
              <Text style={styles.botaoTexto}>Tentar Novamente</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
      {!quizConcluido && (
        <TouchableOpacity style={styles.botaoConfirmar} onPress={confirmarRespostas}>
          <Text style={styles.botaoTexto}>Confirmar</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollView: {},
  perguntaContainer: {
    marginBottom: 20,
  },
  perguntaTexto: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  botaoReiniciar: {
    backgroundColor: "#03DAC5",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  opcao: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
  },
  opcaoSelecionada: {
    backgroundColor: "#add8e6",
  },
  opcaoCorreta: {
    backgroundColor: "#81C784",
  },
  opcaoIncorreta: {
    backgroundColor: "#E57373",
  },
  opcaoTexto: {
    fontSize: 16,
  },
  botaoConfirmar: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  botaoTexto: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultadoTexto: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  voltarBotao: {
    marginRight: 20,
    
  },
  headerTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default QuizScreen;
