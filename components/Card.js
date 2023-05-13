import { StyleSheet, View } from "react-native";

import { COLORS } from "../theme";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    padding: 20,
    margin: 15,
    borderRadius: 10,
    gap: 10,
  },
});

export default Card;
