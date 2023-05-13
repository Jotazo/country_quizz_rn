import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { COLORS, FONT_WEIGHTS, FONTS } from "../theme";

const Button = ({ text, variant, onPress }) => {
  const btnStyles = [
    styles.btn,
    variant === "orange" && styles.btnNext,
    variant === "outline" && styles.btnTryAgain,
  ];

  const textStyles = [
    styles.btnText,
    variant === "orange" && styles.btnTextNext,
    variant === "outline" && styles.btnTextTryAgain,
  ];

  return (
    <TouchableOpacity style={btnStyles} onPress={onPress}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 13,
    borderWidth: 1,
    borderRadius: 12,
  },
  btnNext: {
    backgroundColor: COLORS.orange,
    paddingHorizontal: 28,
    borderColor: COLORS.orange,
    alignSelf: "flex-end",
  },
  btnTryAgain: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 40,
    borderColor: COLORS.results,
    borderWidth: 2,
    alignSelf: "center",
  },
  btnText: {
    fontFamily: FONTS.semiBold,
    fontWeight: FONT_WEIGHTS.semiBold,
  },
  btnTextNext: {
    color: COLORS.white,
  },
  btnTextTryAgain: {
    color: COLORS.results,
  },
});

export default Button;
