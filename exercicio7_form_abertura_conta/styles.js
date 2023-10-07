import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginTop: 20
    },
    titulo:{
      marginVertical: 20,
      fontSize: 22,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'darkred',      
    },
    input:{
      width: 250,
      height: 25,
      borderWidth: 1,
      borderColor: 'black',
      borderTopWidth: 0, // Remover a borda superior
      borderLeftWidth: 0, // Remover a borda esquerda
      borderRightWidth: 0, // Remover a borda direita
      margin: 0,
      fontSize: 16,
      color: 'black',
      textAlign: 'left',
      padding: 4,
    },
    botao:{
      height: 40,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: 'darkblue',
      backgroundColor: '#5783CB',
      marginVertical: 10,
      marginHorizontal: 90,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      color: 'white',
      padding: 10,
    },
    texto:{
      fontSize: 16,
      color: 'darkblue',
      marginLeft: 10
    },
    textobot:{
      textAlign: 'center',
      lineHeight: 20,
      fontSize: 20,
      color: 'white'
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    sliderValue: {
      fontSize: 15,
      textAlign: 'center',
      marginTop: 1,
    },
    cartao:{
      margin: 20,
      backgroundColor: 'lightblue',
      borderRadius: 10,
      borderColor: 'darkblue',
      borderWidth: 3,
      padding: 5
    },
    cartaoTitulo:{
      marginVertical: 5,
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'darkblue',
      textTransform: 'uppercase',
    },
    cartaoTexto:{
      fontSize: 16,
      color: 'darkblue'
    }

  });

  export {styles};