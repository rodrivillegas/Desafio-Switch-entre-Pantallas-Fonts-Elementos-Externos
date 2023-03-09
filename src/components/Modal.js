import { StyleSheet, Text, View, Modal as RNmodal } from "react-native";
import React from "react";
import Button from "./Button";
import Colors from "./constants/Colors";

const Modal = ({
  modalVisible,
  selectedItem,
  onCancelModal,
  onDeleteModal,
  perfilJugador,
}) => {
  return (
    <RNmodal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalMainView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>
            ¿Desea conocer más sobre el jugador "{""}
            <Text style={styles.modalBoldText}>{selectedItem?.value}</Text>" ?
          </Text>

          <View style={styles.modalActions}>
          <Button
              styleButtonType={styles.buttonDelete}
              title="No me interesa 🚮"
              onPress={() => {
                onDeleteModal(selectedItem.id);
              }}
            />
            <Button
              styleButtonType={styles.buttonCancel}
              title="Quizás mas tarde 🏠"
              onPress={onCancelModal}
            />
            <Button
              styleButtonType={styles.buttonInspeccionar}
              title="YA!!! 🔎"
              onPress={perfilJugador}
            />
          </View>
        </View>
      </View>
    </RNmodal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalMainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.accent,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 4,
  },
  modalTitle: {
    padding: 10,
    borderRadius: 5,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
  },
  modalBoldText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: Colors.primary,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  buttonCancel: {
    backgroundColor: Colors.secundary,
  },
  buttonDelete: {
    backgroundColor: Colors.cancelar,
  },
  buttonInspeccionar: {
    backgroundColor: Colors.primary,
  },
});
