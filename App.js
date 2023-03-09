import React, { useState } from "react";
import { StyleSheet, View, ImageBackground, Button } from "react-native";
import { ListItem, NewItemHeader, Modal, Colors } from "./src/components";
import Header from "./src/components/Header";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Jugador from "./src/components/ItemList/Jugador";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    fontApp: require("./assets/fonts/RobotoCondensed-BoldItalic.ttf"),
  });

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItemToState = () => {
    const newArr = [...items, { id: Date.now(), value: itemText }];
    setItems(newArr);
    setItemText("");
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  const onDeleteModal = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  const [home, SetHome] = React.useState(true);

  const perfilJugador = () => {
    SetHome(false);
  };
  const toHome = () => {
    SetHome(true);
    setModalVisible(false);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.screen}>
      {home ? (
        <ImageBackground
          source={require("./assets/seleccionDesafioCoder.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <Header title='"Bienvenidos a la App del Campéon Mundial QATAR 2022"' />
          <NewItemHeader
            onChangeText={onChangeText}
            itemText={itemText}
            addItemToState={addItemToState}
          ></NewItemHeader>
          <ListItem items={items} openModal={openModal} />
          <Modal
            modalVisible={modalVisible}
            selectedItem={selectedItem}
            onCancelModal={onCancelModal}
            onDeleteModal={onDeleteModal}
            perfilJugador={perfilJugador}
          />
        </ImageBackground>
      ) : (
        <Jugador perfilJugador={perfilJugador} toHome={toHome}></Jugador>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 25,
    flex: 1,
    backgroundColor: Colors.primary,
  },
  image: {
    height: "100%",
    borderWidth: 1,
  },
});

export default App;
