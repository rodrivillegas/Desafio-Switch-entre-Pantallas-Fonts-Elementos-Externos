import { StyleSheet, TextInput, View, Button } from "react-native";
import React from "react";
import Colors from "./constants/Colors";

const NewItemHeader = ({ onChangeText, itemText, addItemToState}) => {
  const checkTextInput = () => {
    if (itemText.length <= 3) {
      alert("Por favor, ingresa el nombre de un Jugador que integró el plantel de la Selección Argentina campeona del Mundial QATAR 2022");
      return;
    }
    addItemToState();
  };


  return (
    <View style={styles.addItemInputContainer}>
      <TextInput
        placeholder="Ingrese aquí su jugador favorito ⭐⭐⭐ "
        placeholderTextColor={Colors.accent}
        style={styles.input}
        onChangeText={onChangeText}
        value={itemText}
        n
        multiline={true}
      />
      <View style={styles.buttonsPrimaryScreen}>
        <View style={styles.buttonPropertys}>
          <Button title="AGREGAR JUGADOR 📃" onPress={checkTextInput} />
        </View>
      </View>
    </View>
  );
};

export default NewItemHeader;

const styles = StyleSheet.create({
  addItemInputContainer: {
    marginTop: 30,
    margin: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: 550,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    fontSize: 30,
    fontStyle: "italic",
    textAlign: "center",
    margin: 20,
    
  },
  buttonsPrimaryScreen: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 15,
  },
  buttonPropertys: {
    borderRadius: 15,
    borderWidth: 3,
    backgroundColor: "#F0F8FF",
    padding:8,
    width: 250,
    opacity: 0.8,
    margin: 20
  },
});
