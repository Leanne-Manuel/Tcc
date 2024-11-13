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
import { AntDesign } from "@expo/vector-icons";

// Habilitar animações no Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Exames = ({ navigation }) => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [completedSections, setCompletedSections] = useState([]);

  // Dados de exemplo para seções e temas
  const sections = [
    { id: "financialBasics", title: "01 Fundamentos Financeiros" },
    { id: "savingInvesting", title: "02 Poupança e Investimento" },
    { id: "creditDebt", title: "03 Crédito e Dívida" },
    { id: "financialPlanning", title: "04 Planejamento Financeiro" },
    { id: "advancedInvesting", title: "05 Investimentos Avançados" },
  ];

  const toggleSection = (section) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedSection(expandedSection === section ? null : section);
  };

  const navigateToExercises = (id) => {
    // Navegar para ContExercicios com o ID do tema selecionado
    navigation.navigate("ContExercicios", { temaId: id });
    markSectionAsCompleted(id);
  };

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
          <TouchableOpacity
            key={section.id}
            style={styles.sectionHeader}
            onPress={() => navigateToExercises(section.id)}
          >
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <AntDesign
              name="play"
              size={24}
              color={completedSections.includes(section.id) ? "green" : "black"}
            />
          </TouchableOpacity>
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
  courseContent: {
    padding: 20,
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
    marginTop: 20,
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
});

export default Exames;
