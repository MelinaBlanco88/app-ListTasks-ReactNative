import React from 'react';
import { styles } from '../../assets/css/styles.js';
import { Text, View } from 'react-native';

export const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>{title}</Text>
    </View>
  )
}

export default Header;
