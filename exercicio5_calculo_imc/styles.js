import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    titulo:{
      marginTop: 50,
      marginVertical: 20,
      fontSize: 22,
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#5783CB',      
    },
    input:{
      height: 45,
      borderWidth: 2,
      borderColor: '#5783CB',
      borderRadius: 5,
      backgroundColor: 'lightblue',
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
      borderColor: 'darkblue',
      backgroundColor: '#5783CB',
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
      color: 'darkblue'
    },
    textobot:{
      textAlign: 'center',
      lineHeight: 20,
      fontSize: 20,
      color: 'white'
    }
  });

  export {styles};