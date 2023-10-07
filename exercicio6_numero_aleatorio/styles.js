import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    titulo:{
      marginTop: 50,
      marginVertical: 20,
      fontSize: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'darkred',      
    },
    input:{
      height: 45,
      borderWidth: 2,
      borderColor: 'darkred',
      borderRadius: 1,      
      borderTopWidth: 0, 
      borderLeftWidth: 0, 
      borderRightWidth: 0,
      marginVertical: 10,
      marginHorizontal: 40,
      fontSize: 20,
      color: 'red',
      textAlign: 'center',
      padding: 10,
    },
    botao:{
      height: 40,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: 'darkblue',
      backgroundColor: 'darkred',
      marginVertical: 10,
      marginHorizontal: 90,
      justifyContent: 'center',
      fontSize: 20,
      color: 'white',
      padding: 10,
    },
    texto:{
      textAlign: 'center',
      fontSize: 22,
      color: 'darkred'
    },
    textobot:{
      textAlign: 'center',
      lineHeight: 20,
      fontSize: 20,
      color: 'white'
    }
  });


  export {styles};