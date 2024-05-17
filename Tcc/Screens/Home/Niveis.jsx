import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import { useNavigation } from '@react-navigation/native';

const levels = [
    {
        id: 1,
        title: 'Iniciante',
        description: 'Conceitos básicos e introduções simples.',
        //icon: require('../../assets/beginner.png') // Descomente isso se os ícones existirem
    },
    {
        id: 2,
        title: 'Intermediário',
        description: 'Aprofunde seu conhecimento e habilidades.',
        //icon: require('../../assets/intermediate.png') // Descomente isso se os ícones existirem
    },
    {
        id: 3,
        title: 'Avançado',
        description: 'Desafios complexos e conceitos avançados.',
        //icon: require('../../assets/advanced.png') // Descomente isso se os ícones existirem
    }
];

const HomeNiveis = ({ navigation }) => {
    const handleSelectLevel = (levelId) => {
        navigation.navigate('LoadingScreen');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Escolha Seu Nível</Text>
                </View>
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

const LoadingScreen = ({ navigation }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(currentProgress => {
                const nextProgress = currentProgress + 0.1;
                if (nextProgress >= 1) {
                    clearInterval(interval);
                    navigation.replace('Home'); // Substitui a tela atual pela Home
                }
                return nextProgress;
            });
        }, 200);
        return () => clearInterval(interval);
    }, [navigation]);
    
    return (
        <View style={styles.loadingContainer}>
            <Text>Preparando o seu curso...</Text>
            <ProgressBar styleAttr="Horizontal" color="#2196F3" progress={progress} />
        </View>
    );
};

const HomeScreen = () => {
    return (
        <View style={styles.homeContainer}>
            <Text>Bem-vindo ao Curso!</Text>
        </View>
    );
};

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeNiveis">
                <Stack.Screen name="HomeNiveis" component={HomeNiveis} options={{ title: 'Escolha Seu Nível' }} />
                <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    container: {
        paddingTop: 50,
        paddingBottom: 20,
    },
    header: {
        padding: 20,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.41,
        elevation: 2
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#007aff'
    },
    levelItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
        marginHorizontal: 20,
        marginTop: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
    },
    levelIcon: {
        width: 60,
        height: 60,
        marginRight: 20
    },
    textContainer: {
        flex: 1
    },
    levelTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    levelDescription: {
        fontSize: 16,
        color: '#666'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    homeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default App;
