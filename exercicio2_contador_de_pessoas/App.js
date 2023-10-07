import React, { useState } from 'react';
import { View, Text, Button, Pressable, StyleSheet} from 'react-native';
import { styles } from './styles';


export default function App(){
  const [contador, setContador] = useState(0)


  function adicionar() {
    setContador((contador + 1))
  }

 function reduzir() {
   if (contador>0){
    setContador((contador - 1))}
  }

  return(
    <View style={ styles.container }>
              
        <Text style={ styles.titulo}>
          Contador de Pessoas
        </Text>
      <View style={ styles.contador}>
        <Text style={ styles.textoContador }>
          {contador}
        </Text>
      </View>
    
      <View>
        <Pressable style={styles.botaoAdicionar} onPress={adicionar}>
        <Text style={[styles.textoBotao ,{color:'darkgreen'}]}>+</Text>
        </Pressable>

        <Pressable style={styles.botaoReduzir} onPress={reduzir}>
        <Text style={[styles.textoBotao ,{color:'darkred'}]}>-</Text>
        </Pressable> 
      </View>
    </View>

  )
}

