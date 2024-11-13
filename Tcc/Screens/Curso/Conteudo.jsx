import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Substitua os 'require' pelos caminhos corretos das suas imagens
const conteudos = [
  {
    id: "1",
    tipo: "materia",
    titulo: "Introdução à Educação Financeira",
    conteudo: [
      {
        tipo: "paragrafo",
        texto:
          "A educação financeira é a chave para uma vida financeira saudável. Entender os princípios básicos de como gerir suas finanças pode ajudá-lo a tomar decisões mais informadas, economizar mais dinheiro e investir de forma inteligente para o futuro.",
      },
      {
        tipo: "dica",
        texto:
          "Dica: Comece por acompanhar seus gastos mensais para entender melhor para onde vai o seu dinheiro.",
      },
    ],
    imagemUri: require("../../assets/Jogos.png"),
  },
  {
    id: "2",
    tipo: "materia",
    titulo: "Gestão de Finanças Pessoais",
    conteudo: [
      {
        tipo: "paragrafo",
        texto:
          "Gerir suas finanças pessoais é essencial para garantir uma vida financeira equilibrada. Isso envolve criar um orçamento, acompanhar suas despesas e encontrar formas de economizar e investir seu dinheiro.",
      },
      {
        tipo: "dica",
        texto:
          "Dica: Utilize aplicativos de controle financeiro para acompanhar suas despesas e receitas de forma prática.",
      },
    ],
    imagemUri: require("../../assets/Exames.png"),
  },
  {
    id: "3",
    tipo: "materia",
    titulo: "Planejamento Financeiro a Longo Prazo",
    conteudo: [
      {
        tipo: "paragrafo",
        texto:
          "O planejamento financeiro a longo prazo é crucial para alcançar seus objetivos financeiros. Isso inclui a criação de um plano de aposentadoria, investimentos e a gestão de grandes despesas futuras.",
      },
      {
        tipo: "dica",
        texto:
          "Dica: Defina metas financeiras de longo prazo e crie um plano para alcançá-las, ajustando-o conforme necessário ao longo do tempo.",
      },
    ],
    imagemUri: require("../../assets/Jogos.png"),
  },
  {
    id: "4",
    tipo: "materia",
    titulo: "Investimentos e Riscos",
    conteudo: [
      {
        tipo: "paragrafo",
        texto:
          "Investir é uma maneira de fazer seu dinheiro crescer, mas envolve riscos. Entender os diferentes tipos de investimentos e seus riscos associados pode ajudar a tomar decisões mais informadas.",
      },
      {
        tipo: "dica",
        texto:
          "Dica: Diversifique seus investimentos para reduzir o risco e melhorar a potencial de retorno.",
      },
    ],
    imagemUri: require("../../assets/Exames.png"),
  },
];

const Conteudo = () => {
  const navigation = useNavigation();
  const [indexAtual, setIndexAtual] = useState(0);

  const conteudoAtual = conteudos[indexAtual];

  const avancarConteudo = () => {
    if (indexAtual < conteudos.length - 1) {
      setIndexAtual(indexAtual + 1);
    } else {
      Alert.alert("Parabéns", "Você completou todas as aulas!", [
        {
          text: "OK",
          onPress: () => navigation.navigate("HomeCursos"), // Alterado para "HomeCursos"
        },
      ]);
    }
  };

  const voltarConteudo = () => {
    if (indexAtual > 0) {
      setIndexAtual(indexAtual - 1);
    }
  };

  const renderConteudo = () => {
    if (conteudoAtual.tipo === "materia") {
      return (
        <View>
          <Image source={conteudoAtual.imagemUri} style={styles.imagem} />
          <Text style={styles.titulo}>{conteudoAtual.titulo}</Text>
          {conteudoAtual.conteudo.map((item, index) => {
            switch (item.tipo) {
              case "paragrafo":
                return (
                  <Text key={index} style={styles.paragrafo}>
                    {item.texto}
                  </Text>
                );
              case "dica":
                return (
                  <Text key={index} style={styles.dica}>
                    {item.texto}
                  </Text>
                );
              default:
                return null;
            }
          })}
        </View>
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.progressBarContainer}>
        {conteudos.map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressBarItem,
              index < indexAtual
                ? styles.progressBarItemCompleted
                : styles.progressBarItem,
            ]}
          />
        ))}
      </View>

      {renderConteudo()}

      <View style={styles.botoesContainer}>
        <TouchableOpacity
          onPress={voltarConteudo}
          disabled={indexAtual === 0}
          style={[styles.botao, indexAtual === 0 && styles.botaoDesativado]}
        >
          <Text style={styles.botaoTexto}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={avancarConteudo} style={styles.botaoAvancar}>
          <Text style={styles.botaoTexto}>
            {indexAtual >= conteudos.length - 1 ? "Concluir" : "Avançar"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  progressBarContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  progressBarItem: {
    flex: 1,
    height: 5,
    backgroundColor: "#e0e0e0",
    marginHorizontal: 2,
  },
  progressBarItemCompleted: {
    backgroundColor: "#4caf50",
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  paragrafo: {
    fontSize: 16,
    marginBottom: 20,
  },
  imagem: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  botoesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  botao: {
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db",
  },
  botaoDesativado: {
    backgroundColor: "#cccccc",
  },
  botaoAvancar: {
    backgroundColor: "#4caf50",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoTexto: {
    color: "white",
    fontSize: 16,
  },
  dica: {
    fontSize: 16,
    fontStyle: "italic",
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default Conteudo;
