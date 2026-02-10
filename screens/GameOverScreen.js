import { Text, StyleSheet, View } from 'react-native';
import TitleComp from '../components/ui/TitleComp';
import NumberContainer from '../components/game/NumberContainer';
import PrimeButton from '../components/ui/PrimeButton';

export default function GameOverScreen({roundsNumber, userNumber}){
    return(
        <View style={styles.container}>
            <TitleComp>Game Over!</TitleComp>
            <NumberContainer>{userNumber}</NumberContainer>
            <Text>Number of rounds: {roundsNumber}</Text>
            <PrimeButton onPress={() => console.log('Start New Game!')}>Start New Game</PrimeButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
