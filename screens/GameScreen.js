import { useState, useEffect, use } from 'react';
import {Text, StyleSheet, View, Alert } from 'react-native';
import TitleComp from '../components/ui/TitleComp';
import NumberContainer from '../components/game/NumberContainer';
import PrimeButton from '../components/ui/PrimeButton';

function generateRandomBetween(min, max, exclude){
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({inputNumber}){
    const initialGuess = generateRandomBetween(1, 100, inputNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    useEffect(() => {
        if(currentGuess === inputNumber){
            Alert.alert('Game Over!', `The number was ${currentGuess}`, [{text: 'Start New Game', style: 'default'}]);
        }
    }, [currentGuess, inputNumber]);

    function nextGuessHandler(direction){
        if((direction === 'lower' && currentGuess < inputNumber) || (direction === 'higher' && currentGuess > inputNumber)){
            Alert.alert("Don't lie!", "You know that this is wrong...", [{text: 'Sorry!', style: 'cancel'}]);
            return;
        }
        if(direction === 'lower'){
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return(
        <View style={styles.screen}>
            <TitleComp> Opponent's Guess </TitleComp>
            <NumberContainer> {currentGuess} </NumberContainer>
        <View>
            <Text> Higher or Lower </Text>
            <View style={{flexDirection: 'row'}}>
            <PrimeButton onPress={nextGuessHandler.bind(this, 'lower')}> Lower </PrimeButton>
            <PrimeButton onPress={nextGuessHandler.bind(this, 'higher')}> Higher </PrimeButton>
            </View>
        </View>
        <View></View>
        </View>

    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    
});