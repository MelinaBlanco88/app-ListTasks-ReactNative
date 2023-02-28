import { React } from 'react';
import { Text, View, Pressable, Modal as RNmodal } from 'react-native';
import { styles } from '../../assets/css/styles.js';

const Modal = ({
    modalVisible,
    selectedItem,
    onCancelModal,
    onDeleteModal,
}) => {
  return (
    <RNmodal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
        <View style={styles.modalContainer}>
            <View styles={styles.modalTitle}>
                <Text style={{
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                }}>Eliminar Item</Text>
            </View>
            <View styles={styles.modalContent}>
                <Text styles={styles.marginBottom}>¿Está seguro que desea eliminar el item {selectedItem?.value}?</Text>
            </View>
            
            <View styles={styles.modalActions}>
                <Pressable onPress={onCancelModal} style={styles.button}>
                    <Text style={styles.textButton}>Cancelar</Text>
                </Pressable>

                <Pressable onPress={() => {
                    onDeleteModal(selectedItem.id);
                }} style={[styles.button, styles.warning]}>
                    <Text style={styles.textButton}>Eliminar</Text>
                </Pressable>
            </View>
        </View>
    </RNmodal>
  )
}

export default Modal;