import React from "react";

import { View, ActivityIndicator } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export const Load: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};
