import { View, Text, StyleSheet } from "react-native";

import Option from "../components/Option";

import { COLORS, FONTS } from "../theme";
import { GAMES_LIST, SCREENS } from "../constants";

const SelectGame = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona un tipo de juego</Text>
      <View style={styles.optionsContainer}>
        {GAMES_LIST.map((game) => (
          <Option
            onPress={() => navigation.navigate(SCREENS.game, { game })}
            text={game}
            key={game}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 32 },
  title: {
    fontFamily: FONTS.regular,
    textAlign: "center",
    fontSize: 20,
    color: COLORS.white,
  },
  optionsContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    gap: 10,
  },
});

export default SelectGame;
