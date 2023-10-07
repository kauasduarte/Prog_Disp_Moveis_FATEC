import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { styles } from './styles';


function App(){
  const [resultado, setResultado] = useState('')
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')


  function multiplicar(){
    if (input1 === '' || input2 == ''){
      alert('Digite os dois números')
      return;
    }
    setResultado('Resultado: '+ input1*input2);
  }

  return(
    <View style={styles.container}>

    <Text style={styles.titulo}>
      Multiplicador de números
    </Text>


    <TextInput
    style={styles.input}
    placeholder="Digite o primeiro nº"
    onChangeText={setInput1}
    />

    <Text style={styles.texto}>
      X
    </Text>
    <TextInput
    style={styles.input}
    placeholder="Digite o segundo nº"
    onChangeText={setInput2}
    />

    <Button title="Calcular" onPress={multiplicar} />

    <Text style={styles.texto}> {resultado} </Text>
    </View>
  );
}


export default App;

