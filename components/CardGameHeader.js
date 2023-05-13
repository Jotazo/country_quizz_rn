import { StyleSheet, Text } from "react-native";

import { useBoundStore } from "../store/store";

import { COLORS, FONTS } from "../theme";

const CardGameHeader = () => {
  const hits = useBoundStore((state) => state.hits);

  return <Text style={styles.text}>Aciertos: {hits}</Text>;
};

export default CardGameHeader;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontFamily: FONTS.semiBold,
    fontSize: 16,
    color: COLORS.question,
  },
});
