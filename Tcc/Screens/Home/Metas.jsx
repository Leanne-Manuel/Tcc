import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const goals = [
    { id: 1, name: 'Rápido', time: '5 minutos/dia', icon: require('../../assets/Group 61.png') },
    { id: 2, name: 'Médio', time: '10 minutos/dia', icon: require('../../assets/Group 62.png') },
    { id: 3, name: 'Longo', time: '15 minutos/dia', icon: require('../../assets/Group 63.png') },
    { id: 4, name: 'Avançado', time: '20 minutos/dia', icon: require('../../assets/Group 65.png') }
];

const GoalSelectionScreen = () => {
    const [selectedGoal, setSelectedGoal] = useState(null);

    const handleSelectGoal = (goalId) => {
        setSelectedGoal(goalId);
    };

    return (
        <ScrollView style={styles.container}>
            <Header />
            {goals.map(goal => (
                <GoalItem
                    key={goal.id}
                    goal={goal}
                    isSelected={selectedGoal === goal.id}
                    onSelect={() => handleSelectGoal(goal.id)}
                />
            ))}
        </ScrollView>
    );
};

const Header = () => (
    <View style={styles.header}>
        <Icon name="arrow-left" size={24} color="#007aff" onPress={() => console.log('Back pressed')} />
        <Text style={styles.headerTitle}>Escolha sua Meta</Text>
    </View>
);

const GoalItem = ({ goal, isSelected, onSelect }) => {
    return (
        <TouchableOpacity
            style={[styles.goalItem, isSelected && styles.selectedGoal]}
            onPress={onSelect}
            activeOpacity={0.7}
        >
            <Image source={goal.icon} style={styles.goalIcon} />
            <View style={styles.textContainer}>
                <Text style={styles.goalName}>{goal.name}</Text>
                <Text style={styles.goalTime}>{goal.time}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#ffffff',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1.41,
        elevation: 2
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#007aff',
        flex: 1,
        textAlign: 'center'
    },
    goalItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginHorizontal: 20,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
    },
    selectedGoal: {
        backgroundColor: '#e6f7ff',
        borderColor: '#007aff',
        borderWidth: 2
    },
    goalIcon: {
        width: 60,
        height: 60,
        marginRight: 20
    },
    textContainer: {
        flex: 1
    },
    goalName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    goalTime: {
        fontSize: 16,
        color: '#666'
    }
});

export default GoalSelectionScreen;
