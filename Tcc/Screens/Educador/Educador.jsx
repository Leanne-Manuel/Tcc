import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const HomeAdmin = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Dashboard do Administrador</Text>
      </View>

      {/* Seção de Gerenciamento de Usuários */}
      <TouchableOpacity style={styles.section} onPress={() => setSelectedSection('userManagement')}>
        <Text style={styles.sectionTitle}>Gerenciar Usuários</Text>
        <Text style={styles.sectionDescription}>Adicione, remova e edite usuários da plataforma.</Text>
      </TouchableOpacity>

      {/* Detalhes ao clicar na seção */}
      {selectedSection === 'userManagement' && (
        <View style={styles.detailsBox}>
          <Text style={styles.detailsTitle}>Gerenciamento de Usuários</Text>
          <Text style={styles.detailsText}>Aqui você pode adicionar, editar ou excluir usuários da plataforma.</Text>
          <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedSection(null)}>
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Seção de Relatórios de Uso */}
      <TouchableOpacity style={styles.section} onPress={() => setSelectedSection('usageReports')}>
        <Text style={styles.sectionTitle}>Relatórios de Uso</Text>
        <Text style={styles.sectionDescription}>Visualize os dados de utilização da plataforma.</Text>
      </TouchableOpacity>

      {selectedSection === 'usageReports' && (
        <View style={styles.detailsBox}>
          <Text style={styles.detailsTitle}>Relatórios de Uso</Text>
          <Text style={styles.detailsText}>Relatórios detalhados sobre a interação dos usuários com a plataforma.</Text>
          <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedSection(null)}>
            <Text style={styles.buttonText}>Abrir</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Seção de Configurações da Plataforma */}
      <TouchableOpacity style={styles.section} onPress={() => setSelectedSection('platformSettings')}>
        <Text style={styles.sectionTitle}>Configurações da Plataforma</Text>
        <Text style={styles.sectionDescription}>Ajuste configurações gerais da plataforma.</Text>
      </TouchableOpacity>

      {selectedSection === 'platformSettings' && (
        <View style={styles.detailsBox}>
          <Text style={styles.detailsTitle}>Configurações da Plataforma</Text>
          <Text style={styles.detailsText}>Gerencie as configurações gerais da plataforma.</Text>
          <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedSection(null)}>
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8' },
  header: {
    backgroundColor: '#2c3e50',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  headerText: { fontSize: 24, fontWeight: 'bold', color: 'white', textAlign: 'center' },
  section: { padding: 20, backgroundColor: 'white', marginVertical: 10, borderRadius: 10, elevation: 4 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#2c3e50' },
  sectionDescription: { fontSize: 16, color: '#7f8c8d' },
  detailsBox: {
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 4,
  },
  detailsTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 5 },
  detailsText: { fontSize: 16, color: '#666' },
  closeButton: {
    backgroundColor: '#2c3e50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: { color: 'white', fontWeight: 'bold' },
});

export default HomeAdmin;
