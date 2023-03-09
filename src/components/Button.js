import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const Button = ({ styleButtonType, onPress, title }) => {
  return (
    <Pressable style={[styles.button, styleButtonType]} onPress={onPress}>
      <Text style={[styles.textBoton]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 20,
    marginTop: 15,
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: "black",
  },
  textBoton: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
