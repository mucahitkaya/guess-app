import { Image, Text, StyleSheet, View, Dimensions } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        ></Image>
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  textContainer: {
    paddingTop: 80,
    color: "black",
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: deviceWidth < 380 ? 159 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderWidth: deviceWidth < 380 ? 4 : 8,
    borderColor: "black",
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    marginBottom: 24,
    fontFamily: "open-sans",
    color: "black",
    fontSize: 22,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "open-sans-bold",
  },
});
