import { View, Text, StyleSheet } from 'react-native';

export default function NumberContainer({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.numtext}> {children} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    borderWidth: 4,
    borderColor: '#17881c',
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
},
numtext:{
    color: '#17881c',
    fontSize: 36,
    fontWeight: 'bold',
},
});