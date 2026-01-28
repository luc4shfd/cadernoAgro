import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Novo() {
  return (
    <View style={styles.container}>

      {/* TÍTULO */}
      <Text style={styles.title}>➕ Novo Registro</Text>
      <Text style={styles.subtitle}>
        Cadastre um novo plantio
      </Text>

      {/* FORMULÁRIO */}
      <View style={styles.form}>

        <Text style={styles.label}>Cultura</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Milho"
        />

        <Text style={styles.label}>Área (hectares)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 5"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Data do plantio</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 10/03/2026"
        />

        <Text style={styles.label}>Observações</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Anotações gerais"
          multiline
          numberOfLines={4}
        />

      </View>

      {/* BOTÃO */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Salvar Registro</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F8E9",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E7D32",
  },

  subtitle: {
    fontSize: 14,
    color: "#558B2F",
    marginBottom: 24,
  },

  form: {
    gap: 12,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2E7D32",
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 14,
    fontSize: 14,
    elevation: 2,
  },

  textArea: {
    height: 100,
    textAlignVertical: "top",
  },

  button: {
    marginTop: 24,
    backgroundColor: "#2E7D32",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

