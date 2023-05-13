import { View, Text, StyleSheet } from "react-native";
import { useBoundStore } from "../store/store";
import { COLORS, FONTS } from "../theme";

const Timer = () => {
  const time = useBoundStore((state) => state.time);
  return (
    <View>
      <Text style={styles.text}>Tiempo restante: {time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: 14,
  },
});

export default Timer;
