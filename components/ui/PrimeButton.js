import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/colors';

export default function PrimeButton({ children, onPress }){
    const pressHandler = () => {
        console.log('Pressed!');
        if(onPress){
            onPress();
        }
    }

    return(
        <View style={styles.bOutContainer}>
        <Pressable onPress={onPress} style={({pressed}) => [styles.bInContainer, pressed && styles.pressed]} android_ripple={{color: '#fff'}}>
            <Text style={styles.bText}>{children}</Text>
        </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    bOutContainer: {
        borderRadius: 30,
        margin: 5,
        overflow: 'hidden',
    },
    bInContainer: {
        backgroundColor: '#00a8e1',
        paddingHorizontal: 10,
        paddingVertical: 5,
        elevation: 5,
    },
    bText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    },
})