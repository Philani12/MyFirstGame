import { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Modal, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TitleComp from '../components/ui/TitleComp';
import NumberContainer from '../components/game/NumberContainer';
import PrimeButton from '../components/ui/PrimeButton';

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ inputNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, inputNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        if (currentGuess === inputNumber) {
            setGameOver(true);
        }
    }, [currentGuess, inputNumber]);

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < inputNumber) ||
            (direction === 'higher' && currentGuess > inputNumber)
        ) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [
                { text: 'Sorry!', style: 'cancel' },
            ]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds((prevRounds) => [newRndNumber, ...prevRounds]);
    }

    function restartGameHandler() {
        minBoundary = 1;
        maxBoundary = 100;
        setGameOver(false);
        onGameOver();
    }

    return (
        <View style={styles.screen}>
            <TitleComp>Opponent's Guess</TitleComp>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View styles={styles.bottomSection}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.headerText}>Higher or Lower</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimeButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="remove-circle-sharp" size={40} color="#00c972" />
                    </PrimeButton>
                    <PrimeButton onPress={nextGuessHandler.bind(this, 'higher')}>
                        <Ionicons name="add-circle-sharp" size={40} color="#00c972" />
                    </PrimeButton>
                </View>
            </View>

            <Modal visible={gameOver} animationType="slide">
                <View style={styles.modalContainer}>
                    <TitleComp>Game Over!</TitleComp>
                    <Text style={styles.modalText}>
                        The number was: <Text style={styles.highlight}>{inputNumber}</Text>
                    </Text>
                    <Text style={styles.modalText}>
                        Number of guesses: <Text style={styles.highlight}>{guessRounds.length}</Text>
                    </Text>
                    <PrimeButton onPress={restartGameHandler}>Start New Game</PrimeButton>
                </View>
            </Modal>
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%', // Reduced width to bring buttons closer together
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    headerText: {
        fontSize: 22, // Increased font size
        color: '#007480',
        marginBottom: 10,
    },
    modalText: {
        fontSize: 18,
        marginVertical: 10,
    },
    highlight: {
        fontWeight: 'bold',
        color: '#007480',
    },
    bottomSection: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 50,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#2bc9fb',
        elevation: 5,
    },
});