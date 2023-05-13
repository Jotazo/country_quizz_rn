import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../theme";

const Option = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    borderColor: COLORS.option.border,
    borderWidth: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: FONTS.semiBold,
    color: COLORS.question,
  },
});

export default Option;
