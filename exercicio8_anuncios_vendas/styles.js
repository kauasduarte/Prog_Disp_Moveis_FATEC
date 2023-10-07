import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
      flex: 1,      
      backgroundColor: '#DD55FF',
    },
  titulo:{
    marginTop: 30,
    marginVertical: 20,
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'darkred',
    textTransform: 'uppercase',
    },
  produto:{
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'darkred',
    textTransform: 'uppercase',
    },
  texto:{
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'purple',
    },
  imagem:{
    width: 100, 
    height: 120, 
    alignSelf: 'center', 
    marginTop: 5, 
    marginBottom:15
  },
  box1:{
    backgroundColor: '#F1D0FA',
    height: 220,
    width: 150,
    padding: 5
  },
  box2:{
    backgroundColor: '#F8ECFB',
    height: 220,
    width: 150,
    padding: 5
  },
 
})

export {styles};