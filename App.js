import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet, Text } from "react-native";

import { useBoundStore } from "./store/store";

import useCustomFonts from "./hooks/useCustomFonts";

import { COLORS, FONTS, FONT_WEIGHTS } from "./theme";
import { SCREENS } from "./constants";

import { SelectGame, Game, Results } from "./screens";

import { ImageBackground } from "./components";

const Stack = createNativeStackNavigator();

export default function App() {
  const fontsLoaded = useCustomFonts();

  const { getCountries } = useBoundStore((state) => state);

  useEffect(() => {
    getCountries();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <ImageBackground />
      <Text style={styles.appTitle}>COUNTRY QUIZZ</Text>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
          contentStyle: {
            backgroundColor: "transparent",
          },
          statusBarHidden: true,
        }}
      >
        <Stack.Screen name={SCREENS.selectGame} component={SelectGame} />
        <Stack.Screen name={SCREENS.game} component={Game} />
        <Stack.Screen name={SCREENS.results} component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appTitle: {
    fontFamily: FONTS.bold,
    fontSize: 42,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.appTitle,
    textAlign: "center",
    marginVertical: 30,
  },
});

