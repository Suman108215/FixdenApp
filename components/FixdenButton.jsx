import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const FixdenButton = ({
  title,
  onPress,
  width = 111,
  height = 48,
  backgroundColor = "#77C7A2",
  borderColor = "#77C7A2",
  textColor = "#fff",
  borderRadius = 100,
  fontSize = 16,
  activeOpacity = 0.6,
  mode = "contained", // Options: "contained", "outlined", "text"
}) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        style={[
          styles.button,
          {
            width,
            height,

            borderRadius,
            backgroundColor:
              mode === "contained" ? backgroundColor : "transparent",
            borderColor: mode === "outlined" ? borderColor : "transparent",
            borderWidth: mode === "outlined" ? 2 : 0,
          },
        ]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: textColor, fontSize }]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FixdenButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Brockmann-Regular",
    lineHeight: 16,
  },
});
