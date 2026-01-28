import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Plantios() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>Meus Plantios</Text>

      {/* CARD 1 */}
      <View style={styles.card}>
        <Text style={styles.crop}>🌽 Milho</Text>

        <Text style={styles.info}>Área: 10 hectares</Text>
        <Text style={styles.info}>Plantio: 12/01/2026</Text>
        <Text style={styles.info}>Status: Em crescimento</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="eye-outline" size={18} color="#FFFFFF" />
            <Text style={styles.buttonText}>Ver</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSecondary}>
            <Ionicons name="create-outline" size={18} color="#2E7D32" />
            <Text style={styles.buttonSecondaryText}>Editar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* CARD 2 */}
      <View style={styles.card}>
        <Text style={styles.crop}>🌱 Soja</Text>

        <Text style={styles.info}>Área: 25 hectares</Text>
        <Text style={styles.info}>Plantio: 05/11/2025</Text>
        <Text style={styles.info}>Status: Colheita próxima</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="eye-outline" size={18} color="#FFFFFF" />
            <Text style={styles.buttonText}>Ver</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSecondary}>
            <Ionicons name="create-outline" size={18} color="#2E7D32" />
            <Text style={styles.buttonSecondaryText}>Editar</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F8E9",
    padding: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 16,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },

  crop: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1B5E20",
    marginBottom: 8,
  },

  info: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },

  actions: {
    flexDirection: "row",
    marginTop: 12,
    gap: 12,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#2E7D32",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },

  buttonSecondary: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderColor: "#2E7D32",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },

  buttonSecondaryText: {
    color: "#2E7D32",
    fontSize: 14,
    fontWeight: "600",
  },
});
