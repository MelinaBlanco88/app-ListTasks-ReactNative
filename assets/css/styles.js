import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      padding: 30,
    },

    container: {
      marginTop: 20,
    },
  
    inputContainer: {
      flexDirection: 'row',
      marginTop: 30,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  
    input: {
      borderBottomColor:'black',
      minWidth: 200,
      borderBottomWidth:1,
      height: 50
    },

    button: {
      backgroundColor: '#5D3891',
      paddingLeft: 20,
      paddingRight: 20,
      height: 50,
      borderRadius: 5,
      marginTop: 10,
      alignItems: 'center',
      display: 'block',
      justifyContent: 'center'
    },

    buttonDelete: {
      backgroundColor: '#ff6161',
      color: "#FFFFFF",
      padding: 8,
    },

    warning: {
      backgroundColor: '#ff6161',
      color: "#FFFFFF",
    },

    textButton: {
      color: '#ffffff',
    },

    contentList: {
      marginTop: 20,
      padding: 10,
      margin: 0,
      backgroundColor: "#c5f7f0",
    },

    itemContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 30,
      margin: 10,
      padding: 10,
      borderRadius: 5,
      backgroundColor: "#ccc",
    },

    item: {
      padding: 10,
      textAlign: "center",
    },

    modalContainer: {
      height: 400,
      width: 300,
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
      textDecorationColor: "line-through",
      backgroundColor: "green",
      padding: 5,
    }

  });
  