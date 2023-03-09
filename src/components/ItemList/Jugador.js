import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { textoApp } from "../constants/TextStyles";

const Jugador = ({ toHome }) => {
  return (
    <View>
      <Text style={styles.textoJugador}>TU CAMPEÓN FAVORITO</Text>
      <Image
        style={styles.imagenJugador}
        source={{
          uri: "https://imagenpng.com/wp-content/uploads/2015/09/imagenes-png.png",
        }}
      />
      <View style={styles.buttonToHome}>
        <Button title="Regresar al 🏠" onPress={toHome} />
      </View>
    </View>
  );
};

export default Jugador;

const styles = StyleSheet.create({
  textoJugador: {
    ...textoApp,
    textAlign: "center",
    padding: 30,
    fontSize: 60,
  },
  imagenJugador: {
    width: 900,
    height: 800,
    resizeMode: "stretch",
  },

  buttonToHome: {
    borderRadius: 20,
    borderWidth: 5,
    borderBottomColor: "black",
    backgroundColor: Colors.accent,
    padding: 8,
    width: "100%",
    opacity: 0.9,
  },
});
