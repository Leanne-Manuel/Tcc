import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Habilitar animações no Android
if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CourseContent = ({navigation}) => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [completedPhrases, setCompletedPhrases] = useState([]);

  // Dados de exemplo para seções e frases
   const sections = [
    {
      id: 'financialBasics',
      title: '01 Fundamentos Financeiros',
      phrases: [
        { id: '1', text: 'O que é Educação Financeira?' },
        { id: '2', text: 'Importância do Orçamento Pessoal' },
        { id: '3', text: 'Entendendo Receitas e Despesas' },
      ],
    },
    {
      id: 'savingInvesting',
      title: '02 Poupança e Investimento',
      phrases: [
        { id: '4', text: 'Princípios da Poupança' },
        { id: '5', text: 'Introdução aos Investimentos' },
        { id: '6', text: 'Diferença entre Poupar e Investir' },
        { id: '7', text: 'Tipos de Investimentos' },
      ],
    },
    {
      id: 'creditDebt',
      title: '03 Crédito e Dívida',
      phrases: [
        { id: '8', text: 'Como Funciona o Crédito' },
        { id: '9', text: 'Gerenciando Dívidas Eficientemente' },
        { id: '10', text: 'Entendendo o Score de Crédito' },
      ],
    },
    {
      id: 'financialPlanning',
      title: '04 Planejamento Financeiro',
      phrases: [
        { id: '11', text: 'Definindo Metas Financeiras' },
        { id: '12', text: 'Construindo seu Fundo de Emergência' },
        { id: '13', text: 'Seguro: Protegendo seu Patrimônio' },
      ],
    },
    {
      id: 'advancedInvesting',
      title: '05 Investimentos Avançados',
      phrases: [
        { id: '14', text: 'Investindo em Ações' },
        { id: '15', text: 'Fundos de Investimento' },
        { id: '16', text: 'Criptomoedas e Outros Investimentos Alternativos' },
      ],
    },
  ];
  
      

  const toggleSection = (section) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleCompleted = (id) => {
    setCompletedPhrases((current) =>
      current.includes(id) ? current.filter(item => item !== id) : [...current, id]
    );
  };

  const navigateToAnotherPage = (id) => {
    // Navegar para outra página com base no ID selecionado
    navigation.navigate('CursoConteudo', { id }); // Substitua 'NomeDaOutraPagina' pelo nome da sua outra página
  };
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.courseContent}>
      
       {/* <Text style={styles.subtitle}>By Tubeguruji</Text>*/}
        <Image source={require('../../assets/Desempenho.png')} style={styles.image} />
        
        <Text style={styles.courseSummary}>This course covers the fundamentals of Python programming, including syntax, variables, control structures, and more.</Text>
        
        {sections.map((section) => (
          <View key={section.id}>
            <TouchableOpacity style={styles.sectionHeader} onPress={() => toggleSection(section.id)}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              {expandedSection === section.id ? <Icon name="chevron-up" size={18} color="#666" /> : <Icon name="chevron-down" size={18} color="#666" />}
            </TouchableOpacity>
            {expandedSection === section.id && (
              <FlatList
                data={section.phrases}
                renderItem={({ item }) => (
                  <TouchableOpacity style={[styles.listItem, completedPhrases.includes(item.id) ? styles.completedItem : {}]} onPress={() => navigateToAnotherPage(item.id)}>
                    <Text style={styles.listItemText}>{item.text}</Text>
                    <Icon name="play-circle" size={24} color="#666" style={styles.icon} />
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
            )}
          </View>
        ))}
        
        <View style={styles.faqSection}>
         {/* <Text style={styles.faqTitle}>FAQ</Text>
           Adicione as perguntas e respostas do FAQ aqui */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backIcon: {
    marginRight: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  courseContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  courseSummary: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  listItemText: {
    fontSize: 16,
    color: '#666',
    flex: 1,
  },
  icon: {
    marginLeft: 10,
  },
  completedItem: {
    backgroundColor: '#e6ffe6',
  },
  faqSection: {
    marginTop: 20,
  },
  faqTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  // Adicione mais estilos para o FAQ aqui
});

export default CourseContent;


