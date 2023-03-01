import { FlatList } from "react-native";
import React from "react";
import Item from "./Item";

const ListItem = ({ items, openModal, onComplete, itemComplete }) => {
  return (
    <FlatList
      data={items}
      renderItem={(itemData) => {
        return (
        
        <Item 
          itemData={itemData} 
          openModal={openModal} 
          onComplete={onComplete}
          itemComplete={itemComplete}
        />
        );
      }}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ListItem;