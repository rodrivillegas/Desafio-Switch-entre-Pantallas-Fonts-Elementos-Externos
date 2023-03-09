import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { jugadorStyle, textoApp } from "../constants/TextStyles";

const Item = ({ itemData, openModal }) => {
  return (
    <Pressable
      style={styles.itemContainer}
      onPress={() => {
        openModal(itemData.item);
      }}
    >
      <Text style={styles.item}>⚽ {itemData.item.value}</Text>
    </Pressable>
  );
};

export default Item;

const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
    padding: 2,
    borderRadius: 50,
    backgroundColor: Colors.secundary,
    opacity: 0.85,
    width: "80%",
  },

  item: {
    padding: 2,
    margin: 20,
    textAlign: "left",
    ...textoApp,
  },
});
