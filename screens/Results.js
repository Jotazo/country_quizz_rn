import { View, Text, Image, StyleSheet } from "react-native";

import winImage from "../assets/images/win.png";

import { useBoundStore } from "../store/store";

import { COLORS, FONTS, FONT_WEIGHTS } from "../theme";
import { SCREENS } from "../constants";

import { Card, Button } from "../components";

const Results = ({ navigation }) => {
  const { hits, resetGameState } = useBoundStore((state) => state);

  return (
    <Card>
      <View style={styles.container}>
        <Image source={winImage} />
        <View style={styles.textContainer}>
          <Text style={styles.results}>Resultados</Text>
          <Text style={styles.text}>
            Has obtenido <Text style={styles.numText}>{hits}</Text> aciertos
          </Text>
        </View>
        <Button
          text="Reiniciar"
          variant="outline"
          onPress={() => {
            resetGameState();
            navigation.navigate(SCREENS.selectGame);
          }}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", gap: 54 },
  textContainer: { gap: 6 },
  results: {
    fontFamily: FONTS.bold,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.results,
    fontSize: 42,
    textAlign: "center",
  },
  text: {
    fontFamily: FONTS.regular,
    fontWeight: FONT_WEIGHTS.regular,
    color: COLORS.results,
    textAlign: "center",
  },
  numText: {
    color: COLORS.green,
    fontWeight: FONT_WEIGHTS.bold,
    fontSize: 26,
  },
});

export default Results;
