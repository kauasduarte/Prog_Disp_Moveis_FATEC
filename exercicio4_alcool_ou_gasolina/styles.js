import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'black',
    },
    titulo:{
      marginTop: 50,
      marginVertical: 20,
      fontSize: 22,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'orange',
      textTransform: 'uppercase',      
    },
    input:{
      height: 45,
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: '#1C1C1C',
      marginVertical: 10,
      marginHorizontal: 40,
      fontSize: 20,
      color: 'white',
      padding: 10,
    },
    botao:{
      height: 40,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: 'white',
      backgroundColor: '#48AD4C',
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
      color: 'white'
    },
    textobot:{
      textAlign: 'center',
      lineHeight: 20,
      fontSize: 20,
      color: 'white'
    }
  });

  export {styles};