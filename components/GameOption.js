import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useBoundStore } from "../store/store";

import { COLORS, FONTS } from "../theme";

const GameOption = ({ item, answerSelected }) => {
  const { country, letter, isCorrect } = item;

  const {
    successfulAnswer,
    setAnswerSelected,
    stopTimer,
    substractLife,
    addHit,
  } = useBoundStore((state) => state);

  const handlePressOpt = () => {
    if (answerSelected) return;

    stopTimer();
    setAnswerSelected(item);

    const isPressedOptionCorrect = successfulAnswer?.country === country;

    if (!isPressedOptionCorrect) substractLife();
    else addHit();
  };

  const isThisOptionPressed =
    answerSelected && answerSelected.country === country;

  const isCorrectAnswer = answerSelected && isCorrect;

  const iconName = isCorrectAnswer
    ? "check-circle-outline"
    : "close-circle-outline";

  const gameOptionLetterStyles = [
    styles.letter,
    (isThisOptionPressed || isCorrectAnswer) && styles.withSelectedTextColor,
  ];

  const gameOptionTextStyles = [
    styles.country,
    (isThisOptionPressed || isCorrectAnswer) && styles.withSelectedTextColor,
  ];

  const gameOptionButtonStyles = [
    styles.button,
    (isThisOptionPressed || isCorrectAnswer) && styles.borderTransparent,
    isCorrectAnswer && styles.success,
    isThisOptionPressed && !isCorrect && styles.error,
  ];

  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <TouchableOpacity onPress={handlePressOpt} style={gameOptionButtonStyles}>
        <Text style={gameOptionLetterStyles}>{letter}</Text>
        <Text style={gameOptionTextStyles}>{country}</Text>
        {answerSelected && (
          <Icon
            size={24}
            style={{ marginLeft: "auto" }}
            name={iconName}
            color="white"
          />
        )}
      </TouchableOpacity>
    </IconComponentProvider>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    borderColor: COLORS.option.border,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  letter: {
    fontSize: 20,
    fontFamily: FONTS.regular,
    color: COLORS.option.text,
  },
  country: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.option.text,
    marginLeft: 40,
  },
  withSelectedTextColor: {
    color: COLORS.white,
  },
  borderTransparent: {
    borderColor: "transparent",
  },
  success: {
    backgroundColor: COLORS.green,
  },
  error: {
    backgroundColor: COLORS.red,
  },
});

export default GameOption;
