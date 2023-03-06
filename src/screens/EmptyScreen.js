import React from 'react';
import { styles } from '../../assets/css/styles.js';
import { Text, View } from 'react-native';

export const EmptyScreen = ({title}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.instructions}>{title}</Text>
    </View>
  )
}

export default EmptyScreen;