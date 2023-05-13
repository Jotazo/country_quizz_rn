import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon, IconComponentProvider } from "@react-native-material/core";
import { Text } from "react-native";

import { COLORS, FONTS } from "../theme";

const Lifes = ({ lifes }) => {
  const lifesArr = Array(lifes).fill("diving-scuba-flag");
  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          color: COLORS.white,
        }}
      >
        Intentos:{" "}
        {lifesArr.map((life, index) => (
          <Icon
            name={life}
            key={index}
            size={22}
            style={{ color: COLORS.white }}
          />
        ))}
      </Text>
    </IconComponentProvider>
  );
};

export default Lifes;
