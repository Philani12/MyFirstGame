import { ImageBackground, StyleSheet, Text, View, Alert } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const selectedNumberHandler = (selectedNumber) => { setUserNumber(selectedNumber); setGameIsOver(false);} 
  const gameOverHandler = () => {setGameIsOver(true); setUserNumber(null);}
  let screen = <StartGameScreen selectedNumber={selectedNumberHandler} />;
  
  if (userNumber) {
    screen = <GameScreen inputNumber={userNumber} onGameOver={gameOverHandler}/>;
  }
  if (gameIsOver && userNumber) {
    screen = <StartGameScreen selectedNumber={selectedNumberHandler} />;
  }

  function conInHandler() {
    const chosenNum = parseInt(enteredNumber);
    console.log('Entered Number:', chosenNum); // Debugging log
    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
        Alert.alert('Invalid Number!', 'Number has to be between 1 and 99.', 
            [{ text: 'Alright', style: 'default', onPress: resetInputHandler }]);
        return;
    }
    console.log('Calling selectedNumber with:', chosenNum); // Debugging log
    selectedNumber(chosenNum);
  }

  return (
    <View style={styles.container}>  
     <ImageBackground source={require('./assets/Marbles.png')} resizeMode='cover' style={{flex: 1}} imageStyle={{opacity: 0.25}}>  
    <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </ImageBackground>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c5e2ff',
    alignItems: 'center',
  },
});
