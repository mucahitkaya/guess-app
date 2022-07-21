import { Text, StyleSheet } from "react-native";
function InstructionText({ children }) {
  return <Text style={styles.instructureText}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructureText: {
    color: "white",
    fontSize: 24,
  },
});
