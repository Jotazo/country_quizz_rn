import { useEffect } from "react";
import { View, StyleSheet, BackHandler, Alert } from "react-native";

import { useBoundStore } from "../store/store";

import { Card, CardGame, Lifes, Timer } from "../components";

import { SCREENS } from "../constants";

const Game = ({ navigation, route }) => {
  const { game: gameType } = route.params;

  const { lifes, finished, randomGame, createRandomGame, resetGameState } =
    useBoundStore((state) => state);

  useEffect(() => {
    createRandomGame();
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        Alert.alert("Salir", "¿Desea salir del juego?", [
          { text: "Cancelar", onPress: () => null, style: "cancel" },
          {
            text: "Salir",
            onPress: () => {
              resetGameState();
              navigation.navigate(SCREENS.selectGame);
              BackHandler.exitApp();
            },
          },
        ]);
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);

  if (!randomGame || finished) return null;

  return (
    <View style={styles.container}>
      <View style={styles.gameHeaderContainer}>
        <Lifes lifes={lifes} />
        <Timer />
      </View>
      <Card>
        <CardGame
          game={randomGame}
          gameType={gameType}
          navigation={navigation}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gameHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 18,
  },
});

export default Game;
