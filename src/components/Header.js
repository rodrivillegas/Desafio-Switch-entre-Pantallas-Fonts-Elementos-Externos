import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "./constants/Colors";
import { textoApp } from "./constants/TextStyles";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    paddingTop: 10,
    backgroundColor: Colors.secundary,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
  },
  title: {
    ...textoApp,
  },
});
