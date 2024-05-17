import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { AntDesign } from "@expo/vector-icons";

// Habilitar animações no Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Exercicios = ({ navigation }) => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [completedSections, setCompletedSections] = useState([]); // Novo estado para rastrear seções concluídas

  // Dados de exemplo para seções e frases
  const sections = [
    {
      id: "financialBasics",
      title: "01 Fundamentos Financeiros",
    },
    {
      id: "savingInvesting",
      title: "02 Poupança e Investimento",
    },
    {
      id: "creditDebt",
      title: "03 Crédito e Dívida",
    },
    {
      id: "financialPlanning",
      title: "04 Planejamento Financeiro",
    },
    {
      id: "advancedInvesting",
      title: "05 Investimentos Avançados",
    },
  ];

  const toggleSection = (section) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedSection(expandedSection === section ? null : section);
  };

  const navigateToAnotherPage = (id) => {
    // Navegar para outra página com base no ID selecionado
    navigation.navigate("Quizz", { id }); // Substitua 'NomeDaOutraPagina' pelo nome da sua outra página
  };

  // Simula a conclusão de uma seção (você pode ajustar esta fSunção conforme a lógica de conclusão real das seções)
  const markSectionAsCompleted = (sectionId) => {
    setCompletedSections((prevState) => {
      if (prevState.includes(sectionId)) {
        return prevState;
      } else {
        return [...prevState, sectionId];
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.courseContent}>
        <Image
          source={require("../../assets/Desempenho.png")}
          style={styles.image}
        />
        <Text style={styles.courseSummary}>
          Este curso cobre os fundamentos da programação em Python, incluindo
          sintaxe, variáveis, estruturas de controle e mais.
        </Text>

        {sections.map((section) => (
          <View key={section.id}>
            <TouchableOpacity
              style={styles.sectionHeader}
              onPress={() => {
                navigateToAnotherPage(section.id);
                markSectionAsCompleted(section.id); // Marcar a seção como concluída ao expandir
              }}
            >
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <AntDesign
                name="play"
                size={24}
                color={
                  completedSections.includes(section.id) ? "green" : "black"
                }
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backIcon: {
    marginRight: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  courseContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  courseSummary: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  listItemText: {
    fontSize: 16,
    color: "#666",
    flex: 1,
  },
  icon: {
    marginLeft: 10,
  },
  completedItem: {
    backgroundColor: "#e6ffe6",
  },
  faqSection: {
    marginTop: 20,
  },
  faqTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  // Adicione mais estilos para o FAQ aqui
});

export default Exercicios;
