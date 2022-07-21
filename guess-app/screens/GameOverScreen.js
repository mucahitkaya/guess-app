import { Text, StyleSheet } from "react-native";
function GameOverScreen() {
  return <Text style={styles.textContainer}>Game Oveerr</Text>;
}

export default GameOverScreen;

const styles = StyleSheet.create({
  textContainer: {
    paddingTop: 80,
    color: "black",
  },
});
