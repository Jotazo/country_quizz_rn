import { Image, StyleSheet, Text, View } from "react-native";

import { useBoundStore } from "../store/store";

import { COLORS, FONTS, FONT_WEIGHTS } from "../theme";

import { GAMES, SCREENS } from "../constants";

import Button from "./Button";
import CardGameHeader from "./CardGameHeader";
import GameOption from "./GameOption";

const CardGame = ({ game, gameType, navigation }) => {
  const {
    successfulAnswer,
    answerSelected,
    lifes,
    time,
    createRandomGame,
    finishGame,
  } = useBoundStore((state) => state);

  const isCapital = gameType === GAMES.capitales;

  const capitalText = `${successfulAnswer.capital} es la capital de...`;
  const flagText = "¿A que país pertenece ésta bandera?";
  const questionText = isCapital ? capitalText : flagText;

  const handleNext = () => {
    const isPressedOptionCorrect =
      time > 0 ? successfulAnswer?.country === answerSelected?.country : false;

    if (lifes === 0 && !isPressedOptionCorrect) {
      finishGame();
      return navigation.navigate(SCREENS.results);
    }

    createRandomGame();
  };

  return (
    <>
      <CardGameHeader />
      {!isCapital && (
        <Image style={styles.flag} source={{ uri: successfulAnswer.flag }} />
      )}
      <Text style={styles.questionText}>{questionText}</Text>
      <View style={styles.optionsList}>
        {game.map((gameItem) => (
          <GameOption
            answerSelected={answerSelected}
            item={gameItem}
            key={gameItem.country}
          />
        ))}
      </View>
      {answerSelected && (
        <Button text="Siguiente" variant="orange" onPress={handleNext} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  questionText: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.question,
  },
  optionsList: {
    gap: 15,
  },
  flag: {
    width: 150,
    height: 85,
    resizeMode: "contain",
    borderWidth: 1,
    borderColor: "#000",
  },
});

export default CardGame;
