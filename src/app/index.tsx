import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (

    <ScrollView>
      <View style = {styles.container}>

        <Text style= {styles.welcome}>Olá!!</Text>
        <Text style= {styles.subtitle}>Bem vindo ao Caderno Agro</Text>


        <View style= {styles.summaryBox}>
          <View style= {styles.summaryItem}>
            <Text style= {styles.summaryNumber}>3</Text>
            <Text style= {styles.summaryLabel}>Plantis Ativos</Text>
          </View>

          <View style= {styles.summaryItem}>
            <Text style={styles.summaryNumber}>15 dias</Text>
            <Text style={styles.summaryLabel}>Próx Colheita</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.mainButton}>
          <Text style={styles.mainButtonText}>Novo pantio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Ver Mercado - Em Breve</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F8E9",
    padding: 20,
  },

  welcome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1B5E20",
    marginTop: 10,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#4CAF50",
    marginBottom: 20,
  },

  summaryBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  summaryItem: {
    backgroundColor: "#FFFFFF",
    width: "48%",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },

  summaryNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2E7D32",
  },

  summaryLabel: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },

  mainButton: {
    backgroundColor: "#2E7D32",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },

  mainButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  secondaryButton: {
    backgroundColor: "#A5D6A7",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },

  secondaryButtonText: {
    color: "#1B5E20",
    fontSize: 16,
    fontWeight: "bold",
  },
});

