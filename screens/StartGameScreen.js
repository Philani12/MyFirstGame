import React, { useState } from 'react';
import { Alert, View, Text, TextInput, StyleSheet } from 'react-native';
import PrimeButton from '../components/ui/PrimeButton';
import TitleComp from '../components/ui/TitleComp';

export default function StartGameScreen({ selectedNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const numInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    };

    const resetInputHandler = () => {
        setEnteredNumber('');
    };

    const conInHandler = () => {
        const chosenNum = parseInt(enteredNumber);
        if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
            Alert.alert(
                'Invalid Number!',
                'Number has to be between 1 and 99.',
                [{ text: 'Alright', style: 'default', onPress: resetInputHandler }]
            );
            return;
        }
        selectedNumber(chosenNum);
    };

    return (
        <View style={styles.rootContainer}>
            <TitleComp>Enter Your Number</TitleComp>
            <View style={styles.inputContainer}>
            <Text style={styles.headerText}>Enter a Number</Text>
                <TextInput
                    style={styles.numInput}
                    maxLength={2}
                    keyboardType="numeric"
                    value={enteredNumber}
                    onChangeText={numInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <PrimeButton onPress={resetInputHandler}>Reset</PrimeButton>
                    </View>
                    <View style={styles.button}>
                        <PrimeButton onPress={conInHandler}>Confirm</PrimeButton>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 50,
    },
    headerText: {
        fontSize: 18,
        color: '#007480',
        marginBottom: 10,
    },
    inputContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 50,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#2bc9fb',
        elevation: 5,
    },
    numInput: {
        height: 60,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#17881c',
        borderBottomWidth: 1,
        color: '#007480',
        marginVertical: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        width: 100,
    },
});