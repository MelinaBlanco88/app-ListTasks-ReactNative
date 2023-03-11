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
            placeholder="Tarea (Máx. 20 caracteres)"
            style={styles.input}
            maxLength={20}
            onChangeText={onChangeText}
            value={itemText}
        />
      
        <Pressable onPress={addItem} style={styles.button}>
        <Text style={styles.colorWhite}>Agregar</Text>
        </Pressable>
    </View>
  )
}

export default NewItemHeader
