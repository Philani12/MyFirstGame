import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.container}>  
    <ImageBackground source={require('./assets/Marbles.png')} resizeMode='cover' style={{flex: 1}} imageStyle={{opacity: 0.25}}>  
    <StartGameScreen />
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
