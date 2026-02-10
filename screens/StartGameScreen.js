import React, { useState } from 'react';
import { Alert, Button, View, TextInput, StyleSheet } from 'react-native';
import PrimeButton from '../components/ui/PrimeButton';

export default function StartGameScren({selectedNumber}){
    const [enteredNumber, setEnteredNumber] = useState('');
    const numInputHandler =(enteredText) =>{setEnteredNumber(enteredText);}
    const resetInputHandler = () =>{setEnteredNumber('');}
    function conInHandler(){
        const chosenNum = parseInt(enteredNumber);
        if(isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99){
            Alert.alert('Invalid Number!', 'Number has to be between 1 and 99.', 
                [{text: 'Alright', style: 'default', onPress: resetInputHandler}]);
            return;
        }
         selectedNumber(chosenNum);
    }
    return(
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.numInput} 
            maxLength={2} 
            keyboardType='numeric' 
            value={enteredNumber} 
            onChangeText={numInputHandler}/>
            <View style={{flexDirection: 'row'}}>
                <View style={{width: 100}}>
            <PrimeButton onPress={resetInputHandler}>Reset</PrimeButton>
                </View>
                <View style={{width: 100}}>
            <PrimeButton onPress={conInHandler}>Confirm</PrimeButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
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
});