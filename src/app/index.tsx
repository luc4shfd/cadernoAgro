import { StyleSheet, Text, View } from 'react-native';

export default function Index(){

    return(
        <View style={Styles.container}>
           

            <Text style={Styles.card}> A sua home sobre os seus gastos e o plantio.
                <Text style={Styles.safra}></Text>
            </Text>
        </View>
    );

}


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    card: {
        
    },
    safra:{
        
    }
})