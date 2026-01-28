import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Perfil() {
  return (
    <View style={styles.container}>

      {/* TOPO / AVATAR */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://i.pravatar.cc/150"
          }}
          style={styles.avatar}
        />

        <Text style={styles.name}>Produtor Rural</Text>
        <Text style={styles.email}>usuario@email.com</Text>
      </View>

      {/* OPÇÕES */}
      <View style={styles.menu}>

        <TouchableOpacity style={styles.item}>
          <Ionicons name="person-outline" size={22} color="#2E7D32" />
          <Text style={styles.itemText}>Meus dados</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Ionicons name="leaf-outline" size={22} color="#2E7D32" />
          <Text style={styles.itemText}>Meus plantios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Ionicons name="settings-outline" size={22} color="#2E7D32" />
          <Text style={styles.itemText}>Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Ionicons name="log-out-outline" size={22} color="#C62828" />
          <Text style={[styles.itemText, { color: "#C62828" }]}>
            Sair
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F8E9",
  },

  header: {
    alignItems: "center",
    paddingVertical: 32,
    backgroundColor: "#2E7D32",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FFFFFF",
    marginBottom: 12,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  email: {
    fontSize: 14,
    color: "#E8F5E9",
  },

  menu: {
    padding: 20,
    gap: 12,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    gap: 12,
    elevation: 2,
  },

  itemText: {
    fontSize: 16,
    color: "#2E7D32",
    fontWeight: "500",
  },
});

