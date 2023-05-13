import { useFonts } from "expo-font";

const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    PoppinsMD: require("../assets/fonts/poppins/Poppins-Medium.ttf"),
    PoppinsSB: require("../assets/fonts/poppins/Poppins-SemiBold.ttf"),
    PoppinsB: require("../assets/fonts/poppins/Poppins-Bold.ttf"),
  });

  return fontsLoaded;
};

export default useCustomFonts;
