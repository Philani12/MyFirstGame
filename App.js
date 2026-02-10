import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const selectedNumberHandler = (selectedNumber) => { setUserNumber(selectedNumber); }
  let screen = <StartGameScreen selectedNumber={selectedNumberHandler} />;
  
  if (userNumber) {
    screen = <GameScreen inputNumber={userNumber} />;
  }
  if (gameIsOver && userNumber) {
    screen = <StartGameScreen selectedNumber={selectedNumberHandler} />;
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
    justifyContent: 'center',
  },
});
