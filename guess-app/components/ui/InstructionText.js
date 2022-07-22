import { Text, StyleSheet } from "react-native";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructureText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructureText: {
    color: "white",
    fontSize: 24,
  },
});
