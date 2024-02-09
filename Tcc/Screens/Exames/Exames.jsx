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
    explicacao:
      "Juros compostos são calculados sobre o capital inicial e os juros acumulados em períodos anteriores.",
  },
  {
    id: "2",
    tipo: "calculo",
    pergunta:
      "Se você investir R$1.000 a uma taxa de juros anual de 5%, quanto terá após um ano?",
    respostaCorreta: "1050",
    explicacao: "R$1.000 a 5% ao ano resultam em R$1.050 após um ano.",
  },
  // Adicione mais questões conforme necessário
];

const Exames = ({ navigation }) => {
  const [respostas, setRespostas] = useState({});
  const [quizConcluido, setQuizConcluido] = useState(false);

  const confirmarRespostas = () => {
    setQuizConcluido(true);
    // Aqui, você pode adicionar lógica para calcular a pontuação
  };

  const reiniciarQuiz = () => {
    setRespostas({});
    setQuizConcluido(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {questoes.map((questao, index) => (
          <View key={index} style={styles.perguntaContainer}>
            <Text style={styles.perguntaTexto}>{questao.pergunta}</Text>
            {questao.tipo === "teorica" &&
              questao.opcoes.map((opcao, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={[
                    styles.opcao,
                    respostas[questao.id] === opcao
                      ? styles.opcaoSelecionada
                      : {},
                    quizConcluido
                      ? opcao === questao.respostaCorreta
                        ? styles.opcaoCorreta
                        : styles.opcao
                      : {},
                    quizConcluido &&
                    respostas[questao.id] !== questao.respostaCorreta &&
                    opcao === questao.respostaCorreta
                      ? styles.opcaoCorreta
                      : {},
                    quizConcluido &&
                    respostas[questao.id] === opcao &&
                    opcao !== questao.respostaCorreta
                      ? styles.opcaoIncorreta
                      : {},
                  ]}
                  onPress={() =>
                    !quizConcluido &&
                    setRespostas({ ...respostas, [questao.id]: opcao })
                  }
                >
                  <Text style={styles.opcaoTexto}>{opcao}</Text>
                </TouchableOpacity>
              ))}
            {questao.tipo === "calculo" && (
              <TextInput
                style={styles.input}
                onChangeText={(text) =>
                  setRespostas({ ...respostas, [questao.id]: text })
                }
                value={respostas[questao.id]}
                keyboardType="numeric"
                editable={!quizConcluido}
              />
            )}
            {quizConcluido &&
              respostas[questao.id] !== questao.respostaCorreta && (
                <Text style={styles.explicacao}>
                  Resposta correta: {questao.respostaCorreta}
                </Text>
              )}
            {quizConcluido &&
              respostas[questao.id] === questao.respostaCorreta && (
                <Text style={styles.explicacao}>{questao.explicacao}</Text>
              )}
          </View>
        ))}
        {!quizConcluido ? (
          <TouchableOpacity
            style={styles.botaoConfirmar}
            onPress={confirmarRespostas}
          >
            <Text style={styles.botaoTexto}>Confirmar Respostas</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.botaoReiniciar}
            onPress={reiniciarQuiz}
          >
            <Text style={styles.botaoTexto}>Voltar a Tentar</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  perguntaContainer: {
    marginBottom: 20,
  },
  perguntaTexto: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  botaoConfirmar: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  botaoReiniciar: {
    backgroundColor: "#FFA07A",
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
  explicacao: {
    marginTop: 10,
    fontStyle: "italic",
    fontSize: 14,
  },
});

export default Exames;
