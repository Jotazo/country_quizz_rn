import { Image, StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  imageBackground: (width, height) => ({
    width,
    height,
    position: "absolute",
  }),
});

const ImageBackground = () => {
  const { width, height } = Dimensions.get("screen");

  return (
    <Image
      source={require("../assets/images/background.png")}
      style={styles.imageBackground(width, height)}
    />
  );
};

export default ImageBackground;
