import { View, Button, ScrollView, Pressable, Text } from 'react-native';
import React, { useState } from 'react';

import { styles } from '../../assets/css/styles';
import NewItemHeader from '../../src/components/NewItemHeader.js';
import ListItem from '../../src/components/ItemList/List.js';
import Modal from '../../src/components/Modal.js';
import Header from '../../src/components/Header.js';
import EmptyScreen from "../../src/screens/EmptyScreen.js";

const TaskList = ({ navigation }) => {
    const [itemText, setItemText] = useState("");
    const [items, setItems] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const resetInputHandler = () => {
    setItems('');
    }

    const [itemComplete, setItemComplete] = useState(false);

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
        <View>
            <ScrollView>
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

                <Pressable onPress={() => {
                    navigation.navigate('Home') 
                }} style={[styles.button, styles.warning]}>
                    <Text style={styles.colorWhite}>Cerrar sesión</Text>
                </Pressable>
            </ScrollView>
        </View>
    );
}

export default TaskList;
