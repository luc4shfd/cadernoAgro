import { StyleSheet, Text, View } from 'react-native';

export default function Plantios() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plantios 🌱</Text>
      <Text>Em breve você vai registrar seus plantios aqui.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
