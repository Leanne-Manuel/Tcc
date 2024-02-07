import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image source={require('../../assets/teste.png')} style={styles.logo} />
          <Text style={styles.headerText}>Bem-vindo de volta!</Text>
          <Text style={styles.subHeaderText}>Vamos fazer seu login</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email ou Número de Telefone"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#808080"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            autoCapitalize="none"
            placeholderTextColor="#808080"
          />
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3b5998' }]}>
            <FontAwesome name="facebook" size={24} color="white" />
            <Text style={styles.socialButtonText}>Entrar com Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#db4a39' }]}>
            <FontAwesome name="google" size={24} color="white" />
            <Text style={styles.socialButtonText}>Entrar com Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#1da1f2' }]}>
            <Feather name="twitter" size={24} color="white" />
            <Text style={styles.socialButtonText}>Entrar com Twitter</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.registerContainer}>
          <TouchableOpacity style={[styles.registerButton, { backgroundColor: '#FFA500' }]}>
            <Text style={styles.registerButtonText}>Não tem uma conta? Registre-se agora</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  subHeaderText: {
    fontSize: 18,
    color: '#808080',
    marginTop: 10,
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 15,
    fontSize: 16,
    color: '#333',
  },
  forgotPasswordText: {
    color: '#0000FF',
    fontSize: 16,
    textAlign: 'right',
    marginTop: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  socialButtonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  registerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  registerButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;