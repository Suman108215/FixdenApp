import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import FixdenButton from "@/components/FixdenButton";

const index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/homeScreen.png")}
        style={styles.image}
      >
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require("@/assets/images/FixDenLogo.png")}
          />
          <FixdenButton title={"Log In"} mode="outlined"></FixdenButton>
        </View>
      </ImageBackground>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 547,
    flexShrink: 0,
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // or 'contain' based on your preference
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16, // Adjust the padding as needed
    marginTop: 28, // Add a margin of 28 pixels from the top
  },
  logo: {
    width: 130,
    height: 47,
  },
});
