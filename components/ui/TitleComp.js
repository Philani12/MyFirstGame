import { StyleSheet, Text } from 'react-native';

export default function TitleComp({children}){
    return(
        <Text style={styles.title}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#007480',
        textAlign: 'center',
        marginBottom: 24,
        borderWidth: 2,
        borderColor: '#007480',
        padding: 12,    
    },
});