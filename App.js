import { View, Button } from 'react-native';
import React, { useState, useCallback, Text } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import { styles } from './assets/css/styles.js';
import NewItemHeader from './src/components/NewItemHeader.js';
import ListItem from './src/components/ItemList/List.js';
import Modal from './src/components/Modal.js';
import Header from './src/components/Header.js';
import EmptyScreen from "./src/screens/EmptyScreen.js";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const resetInputHandler = () => {
    setItems('');
  }

  const [itemComplete, setItemComplete] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItem = () => {
    const newArr = [...items, {  id: Date.now(), value: itemText, isChecked: false }];
    setItems(newArr);
    setItemText("");
  }; 

  const onComplete = (id) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    })
    setItems(newItems);
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

  return (
    <View onLayout={onLayoutRootView}>
     <Header title='Mi lista de tareas' />

     <View style={styles.screen}>
      <NewItemHeader
        onChangeText={onChangeText}
        itemText={itemText}
        addItem={addItem}
      />

      {/* List component */}
      <ListItem 
        items={items} 
        openModal={openModal} 
        itemComplete={itemComplete}
        setItemComplete={setItemComplete}
        onComplete={onComplete}
      />

      {/* Modal component */} 
      <Modal 
        modalVisible={modalVisible}
        selectedItem={selectedItem}
        onCancelModal={onCancelModal}
        onDeleteModal={onDeleteModal}
      />
    </View>

     { items.length === 0 
        ? <EmptyScreen title='Comienza a crear tu lista' />
        : 
        <>
        <EmptyScreen title='Selecciona la palabra "Completado" para marcar como realizada' />
        <Button title="Limpiar lista" onPress={resetInputHandler} />
        </>
      }
    </View>
  );
};

