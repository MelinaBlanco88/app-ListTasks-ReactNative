import { StyleSheet } from "react-native";
import Colors from "../../src/constants/Colors";

export const styles = StyleSheet.create({
    colorWhite: {
      color: Colors.white
    },

    fontBold: {
      fontWeight: 'bold',
      fontFamily: 'open-sans-bold',
    },

    header: {
      height: 90,
      paddingTop: 36,
      backgroundColor: Colors.accent,
      alignItems: 'center', 
      justifyContent: 'center'
    },

    textHeader: {
      color: Colors.white,
      fontFamily: 'open-sans',
      fontSize: 24,
    },

    screen: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
      paddingBottom: 10,
    },

    container: {
      marginTop: 20,
    },
  
    inputContainer: {
      flexDirection: 'row',
      marginTop: 30,
      marginBottom: 20,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
    input: {
      borderBottomColor: Colors.black,
      minWidth: 200,
      maxWidth: 300,
      borderBottomWidth:1,
      height: 50
    },

    button: {
      backgroundColor: Colors.primary,
      paddingLeft: 20,
      paddingRight: 20,
      height: 50,
      borderRadius: 5,
      marginTop: 10,
      alignItems: 'center',
      maxWidth: 200,
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block',
      justifyContent: 'center'
    },

    buttonDelete: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.alert,
      color: Colors.white,
      borderRadius: '50%',
      width: 30,
      height: 30,
      
    },

    warning: {
      backgroundColor: Colors.alert,
      color: Colors.white,
      fontFamily: 'open-sans',
    },

    contentList: {
      marginTop: 20,
      padding: 10,
      margin: 0,
    },

    itemContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 30,
      marginTop: 5,
      marginBottom: 5,
      padding: 8,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: Colors.accent,
      borderStyle: 'solid',
    },

    item: {
      fontFamily: 'open-sans-bold',
      padding: 10,
      textAlign: "center",
    },

    modalContainer: {
      height: '100%',
      width: '100%',
      marginTop: 100,
      alignSelf: 'center',
      backgroundColor: '#fffaeb',
      padding: 50,
    },

    marginBottom: {
      marginBottom: 50,
    },

    modalActions: {
      display: "flex",
      flexDirection: "row",
      marginTop: 50,
    },

    itemCompleted: {
      backgroundColor: Colors.primary,
      borderRadius: 5,
      padding: 8,
    },

    itemIncomplete: {
      padding: 8,
    },

    instructions: {
      fontSize: 18,
      textAlign: 'center'
    }
  });
  