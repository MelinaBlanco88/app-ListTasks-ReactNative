import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { styles } from '../../assets/css/styles';
import Header from '../../src/components/Header.js';

const Home = ( { navigation } ) => {
    return (
        <>
            <Header title='App lista de tareas' />
            <View style={styles.screen}>
                <Pressable onPress={() => { 
                    navigation.navigate('TaskList') 
                }} style={styles.button}>
                    <Text style={styles.colorWhite}>Login</Text>
                </Pressable>
            </View>
        </>
    );
}

export default Home;
