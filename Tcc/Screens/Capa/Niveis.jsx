// HomeNiveis.js
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const levels = [
  {
    id: 1,
    title: "Iniciante",
    description: "Conceitos básicos e introduções simples.",
    icon: require("../../assets/Exames.png"),
  },
  {
    id: 2,
    title: "Intermediário",
    description: "Aprofunde seu conhecimento e habilidades.",
    icon: require("../../assets/Exames.png"),
  },
  {
    id: 3,
    title: "Avançado",
    description: "Desafios complexos e conceitos avançados.",
    icon: require("../../assets/Exames.png"),
  },
];

const HomeNiveis = ({ navigation }) => {
  const handleSelectLevel = (levelId) => {
    navigation.navigate("HomeLoading");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {levels.map((level) => (
          <TouchableOpacity
            key={level.id}
            style={styles.levelItem}
            onPress={() => handleSelectLevel(level.id)}
          >
            <Image source={level.icon} style={styles.levelIcon} />
            <View style={styles.textContainer}>
              <Text style={styles.levelTitle}>{level.title}</Text>
              <Text style={styles.levelDescription}>{level.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  container: {
    paddingTop: 50,
    paddingBottom: 20,
  },
  levelItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  levelIcon: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  levelTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  levelDescription: {
    fontSize: 16,
    color: "#666",
  },
});

export default HomeNiveis;
