import { Text, Pressable, View } from "react-native";
import React from "react";
import { styles } from "../../../assets/css/styles";

const Item = ({ itemData, openModal, onComplete }) => {
  return (
    <>
    <View style={styles.itemContainer}>
      <Text style={styles.item}>
        {itemData.item.value}
      </Text>

      <Pressable
        onPress={() => {
          onComplete(itemData.item.id);
        } }

        style = {[ itemData.item.isChecked ? styles.itemCompleted : styles.itemIncomplete ]}
      >
      
        <Text>Completado</Text>
      </Pressable>

      <Pressable
        style={styles.buttonDelete}
        onPress={() => {
          openModal(itemData.item);
        }}
      >
        <Text style={styles.colorWhite}>X</Text>
      </Pressable>

      
    </View>
    </>
  );
};

export default Item;
