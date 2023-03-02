import { React } from 'react';
import { Text, TextInput, View, Pressable } from 'react-native';
import { styles } from '../../assets/css/styles.js'

const NewItemHeader = ({
    onChangeText,
    itemText,
    addItem
}) => {
  return (
    <View style={styles.inputContainer}>
        <TextInput
            placeholder="Item de lista"
            style={styles.input}
            onChangeText={onChangeText}
            value={itemText}
        />
        
        {/* 
        Boton por default:
        <Button title="Agregar" onPress={addItem} /> 
        */}

        <Pressable onPress={addItem} style={styles.button}>
        <Text style={styles.textButton}>Agregar</Text>
        </Pressable>
    </View>
  )
}

export default NewItemHeader
