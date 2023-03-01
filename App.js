import { View } from 'react-native';
import { React, useState } from 'react';
import { styles } from './assets/css/styles.js';
import NewItemHeader from './src/components/NewItemHeader.js';
import ListItem from './src/components/ItemList/List.js';
import Modal from './src/components/Modal.js';

export default function App() {
  const [itemText, setItemText] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const [itemComplete, setItemComplete] = useState(false);

  const onComplete = () => {
    setItemComplete(itemComplete => itemComplete(true));
  };

  const onChangeText = (text) => {
    setItemText(text);
  };

  const addItem = () => {
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

  return (
    <View style={styles.screen}>
       {/* Add Item component */}
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

  );
};

