import React, { useState } from "react";
import { ScrollView, Text, View, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";

// Lista de perguntas para cada tema
const allQuestions = {
  financialBasics: [
    {
      id: 1,
      pergunta: "O que é taxa de juros?",
      respostaCorreta: "É o percentual que define o custo do dinheiro no tempo.",
      opcoes: [
        "É o percentual que define o custo do dinheiro no tempo.",
        "É o valor fixo pago em um empréstimo.",
        "É o imposto cobrado sobre transações financeiras.",
      ],
    },
    {
      id: 2,
      pergunta: "Qual é a fórmula do cálculo de juros simples?",
      respostaCorreta: "J = C * i * t",
      opcoes: [
        "J = C * i * t",
        "J = C + i * t",
        "J = C * (1 + i)^t",
      ],
    },
    {
      id: 3,
      pergunta: "O que é capitalização composta?",
      respostaCorreta: "É quando os juros são calculados sobre o capital e os juros acumulados.",
      opcoes: [
        "É quando os juros são calculados sobre o capital inicial apenas.",
        "É quando os juros são calculados sobre o capital e os juros acumulados.",
        "É quando os juros são acumulados apenas no final do período.",
      ],
    },
  ],
  savingInvesting: [
    {
      id: 4,
      pergunta: "Qual é a diferença entre poupança e investimento?",
      respostaCorreta: "Investimentos geralmente oferecem retornos mais altos, mas com maior risco.",
      opcoes: [
        "Investimentos geralmente oferecem retornos mais altos, mas com maior risco.",
        "Poupança e investimentos são a mesma coisa.",
        "Investimentos são sempre mais seguros do que poupança.",
      ],
    },
    {
      id: 5,
      pergunta: "O que é um fundo de investimento?",
      respostaCorreta: "É um veículo que agrega recursos de vários investidores para investir em ativos diversificados.",
      opcoes: [
        "É um veículo que agrega recursos de vários investidores para investir em ativos diversificados.",
        "É uma conta poupança com rendimento fixo.",
        "É um tipo de empréstimo bancário.",
      ],
    },
    // Adicione mais questões para Poupança e Investimento...
  ],
  creditDebt: [
    {
      id: 6,
      pergunta: "O que é um crédito rotativo?",
      respostaCorreta: "É um tipo de crédito que permite ao consumidor usar e pagar de forma flexível.",
      opcoes: [
        "É um tipo de crédito que permite ao consumidor usar e pagar de forma flexível.",
        "É um empréstimo com pagamento fixo mensal.",
        "É um financiamento para compra de bens.",
      ],
    },
    {
      id: 7,
      pergunta: "Qual é a principal vantagem do crédito pessoal?",
      respostaCorreta: "Flexibilidade no uso e pagamento do valor emprestado.",
      opcoes: [
        "Flexibilidade no uso e pagamento do valor emprestado.",
        "Taxas de juros sempre mais baixas.",
        "Necessidade de garantia para aprovação.",
      ],
    },
    // Adicione mais questões para Crédito e Dívida...
  ],
  financialPlanning: [
    {
      id: 8,
      pergunta: "O que é um orçamento familiar?",
      respostaCorreta: "É um planejamento financeiro que detalha receitas e despesas de uma família.",
      opcoes: [
        "É um planejamento financeiro que detalha receitas e despesas de uma família.",
        "É um tipo de conta bancária específica para famílias.",
        "É um plano de investimentos para longo prazo.",
      ],
    },
    {
      id: 9,
      pergunta: "Qual é a importância de um fundo de emergência?",
      respostaCorreta: "Ele ajuda a cobrir despesas imprevistas sem comprometer a estabilidade financeira.",
      opcoes: [
        "Ele ajuda a cobrir despesas imprevistas sem comprometer a estabilidade financeira.",
        "Ele garante rendimentos fixos todos os meses.",
        "Ele é necessário para obter um empréstimo bancário.",
      ],
    },
    // Adicione mais questões para Planejamento Financeiro...
  ],
  advancedInvesting: [
    {
      id: 10,
      pergunta: "O que são ações preferenciais?",
      respostaCorreta: "São ações que conferem direitos preferenciais na distribuição de dividendos e no reembolso de capital.",
      opcoes: [
        "São ações que conferem direitos preferenciais na distribuição de dividendos e no reembolso de capital.",
        "São ações que garantem voto nas assembleias de acionistas.",
        "São ações emitidas por empresas emergentes.",
      ],
    },
    {
      id: 11,
      pergunta: "O que é uma opção de compra de ações?",
      respostaCorreta: "É um contrato que dá ao investidor o direito, mas não a obrigação, de comprar ações a um preço específico.",
      opcoes: [
        "É um contrato que dá ao investidor o direito, mas não a obrigação, de comprar ações a um preço específico.",
        "É um empréstimo para aquisição de ações.",
        "É um tipo de investimento em imóveis.",
      ],
    },
    // Adicione mais questões para Investimentos Avançados...
  ],
};

const ContExercicios = ({ route, navigation }) => {
  const { temaId } = route.params;
  const [respostas, setRespostas] = useState({});
  const [quizConcluido, setQuizConcluido] = useState(false);

  // Filtrar questões com base no temaId
  const questoesDoTema = allQuestions[temaId] || [];

  const handleConfirmarRespostas = () => {
    setQuizConcluido(true);
    navigation.navigate("Resultados", { respostas, questoes: questoesDoTema });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        {questoesDoTema.map((questao) => (
          <View key={questao.id} style={styles.questaoContainer}>
            <Text style={styles.perguntaTexto}>{questao.pergunta}</Text>
            {questao.opcoes.map((opcao, idx) => (
              <TouchableOpacity
                key={idx}
                style={[
                  styles.opcao,
                  respostas[questao.id] === opcao ? styles.opcaoSelecionada : {},
                ]}
                onPress={() => setRespostas({ ...respostas, [questao.id]: opcao })}
              >
                <Text>{opcao}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
        <TouchableOpacity style={styles.botaoConfirmar} onPress={handleConfirmarRespostas}>
          <Text style={styles.botaoTexto}>Confirmar Respostas</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, padding: 20 },
  questaoContainer: { marginBottom: 20 },
  perguntaTexto: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  opcao: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
  },
  opcaoSelecionada: { backgroundColor: "#add8e6" },
  botaoConfirmar: { padding: 10, backgroundColor: "#007bff", borderRadius: 5, alignItems: "center" },
  botaoTexto: { color: "white", fontSize: 16 },
});

export default ContExercicios;
