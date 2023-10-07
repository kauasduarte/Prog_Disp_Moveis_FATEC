import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
  titulo: {
    marginTop: 40,
    fontSize: 28, 
    color: 'orange', 
    textAlign: 'center',
    fontWeight: 'bold',
  },
  contador: {
    justifyContent: 'center',
    marginTop: 30,
    marginHorizontal: 50,
    marginBottom: 30,
    height: 175,
    width: 175,
    backgroundColor: '#E2DADA',
    borderWidth: 5,
    borderColor: 'grey',
    borderRadius: 20,
  },
  textoContador: {
    fontSize: 70, 
    color: 'darkred', 
    textAlign: 'center',
  },
  botaoAdicionar:{    
    justifyContent: 'center',
    width: 100,
    height: 80,
    margin: 10,
    backgroundColor: 'lightgreen',
    borderWidth: 5,
    borderColor: 'green',
    borderRadius: 10
  },
  botaoReduzir:{
    justifyContent: 'center',
    width: 100,
    height: 80,
    margin: 10,
    backgroundColor: '#FD8181',
    borderWidth: 5,
    borderColor: 'darkred',
    borderRadius: 10    
  },
  textoBotao:{
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    lineHeight: 50,
  }
});

export {styles};