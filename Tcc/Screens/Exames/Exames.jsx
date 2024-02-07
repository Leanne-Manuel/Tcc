import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Alert,
} from "react-native";

const questoes = [
  {
    id: "1",
    tipo: "teorica",
    pergunta: "O que é juros compostos?",
    opcoes: [
      "Rendimento sobre o principal de um investimento.",
      "Rendimento sobre o principal mais os juros acumulados.",
      "Taxa fixa de retorno em um investimento.",
    ],
    respostaCorreta: "Rendimento sobre o principal mais os juros acumulados.",
    explicacao: "Juros compostos significam que os juros são calculados não apenas sobre o capital inicial, mas também sobre os juros acumulados de períodos anteriores.",
  },
  {
    id: "3",
    tipo: "calculo",
    pergunta: "Se você investir R$1.000 a uma taxa de juros anual de 5%, quanto terá após um ano?",
    respostaCorreta: "1050",
    explicacao: "R$1.000 investidos a 5% ao ano resultam em R$1.050 após um ano, pois 5% de R$1.000 é R$50, e R$1.000 + R$50 = R$1.050.",
  },
  // Outras questões...
];

const HomeScreen = () => {
  const [respostas, setRespostas] = useState({});
  const [quizConcluido, setQuizConcluido] = useState(false);

  const confirmarRespostas = () => {
    let acertos = 0;
    questoes.forEach((questao) => {
      if (respostas[questao.id] === questao.respostaCorreta) {
        acertos++;
      }
    });
    Alert.alert("Resultado", `Você acertou ${acertos} de ${questoes.length} questões!`);
    setQuizConcluido(true);
  };

  const responderQuiz = (questaoId, resposta) => {
    setRespostas((prevRespostas) => ({
      ...prevRespostas,
      [questaoId]: resposta,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {questoes.map((questao) => (
          <View key={questao.id} style={styles.perguntaContainer}>
            <Text style={styles.perguntaTexto}>{questao.pergunta}</Text>
            {questao.tipo === "teorica" ? (
              questao.opcoes.map((opcao) => (
                <TouchableOpacity
                  key={opcao}
                  style={[
                    styles.opcao,
                    respostas[questao.id] === opcao ? styles.opcaoSelecionada : {},
                    quizConcluido && respostas[questao.id] === questao.respostaCorreta ? styles.opcaoCorreta : {},
                    quizConcluido && respostas[questao.id] !== questao.respostaCorreta && opcao === questao.respostaCorreta ? styles.opcaoCorreta : {},
                    quizConcluido && opcao === respostas[questao.id] && opcao !== questao.respostaCorreta ? styles.opcaoIncorreta : {},
                  ]}
                  onPress={() => responderQuiz(questao.id, opcao)}
                >
                  <Text style={styles.opcaoTexto}>{opcao}</Text>
                </TouchableOpacity>
              ))
            ) : (
              <TextInput
                style={styles.input}
                onChangeText={(text) => responderQuiz(questao.id, text)}
                value={respostas[questao.id]}
                keyboardType="numeric"
              />
            )}
            {quizConcluido && respostas[questao.id] === questao.respostaCorreta && (
              <Text style={styles.explicacao}>{questao.explicacao}</Text>
            )}
          </View>
        ))}
        <TouchableOpacity style={styles.botaoConfirmar} onPress={confirmarRespostas}>
          <Text style={styles.botaoTexto}>Confirmar Respostas</Text>
        </TouchableOpacity>
      </ScrollView>
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
  explicacaoTexto: {
    marginTop: 10,
    fontStyle: 'italic',
    color: '#006400', // Um verde escuro para a explicação
  },
  opcao: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
  },
  opcaoTexto: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  botaoConfirmar: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  botaoTexto: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;

