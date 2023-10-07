import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
      flex: 1,      
      backgroundColor: '#E56161',
    },
  titulo:{
    marginTop: 30,
    marginVertical: 20,
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
    },
  vagas:{
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'darkred',
    textTransform: 'uppercase',
    },
  texto:{
    marginVertical: 5,
    fontSize: 16,
    textAlign: 'left',
    color: 'black',
    },
  anuncios:{
    height: 400,
    backgroundColor: 'white',
    padding: 10,
  },
  box1:{
    borderWidth: 1,
    borderColor: '#E56161',
    backgroundColor: '#FCE4E4',
    height: 150,
    marginVertical: 5,
    padding: 5
  },
  box2:{
    borderWidth: 1,
    borderColor: '#E56161',
    backgroundColor: '#FBB6B6',
    height: 150,
    marginVertical: 5,
    padding: 5
  },
 
})

export {styles};