import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image, } from 'react-native';
import { styles } from './styles';


function App(){
  const [resultado, setResultado] = useState('')
  const [alcool, setAlcool] = useState('')
  const [gasolina, setGasolina] = useState('')
  let img = 'https://wp-midia-nova.bidu.com.br/uploads/2017/01/05175045/%C3%A1lcool.png'


  function calcular(){
    if (alcool === '' || gasolina == ''){
      alert('Digite os dois valores')
      return;
    }
    if(alcool/gasolina <= 0.7){
      setResultado('Combustível mais vantajoso: Álcool')}
    else{
      setResultado('Combustível mais vantajoso: Gasolina')
    }
  }

  return(
    <View style={styles.container}>

    <Text style={styles.titulo}>
      Álcool ou Gasolina
    </Text>

    <View>
     <Image
          source={{ uri: img }}
          style={{ width: 250, height: 140, alignSelf: 'center', marginTop: 5, marginBottom:15}}
      /> 
    </View>

    <TextInput
    style={styles.input}
    placeholder="Preço do Álcool"
    onChangeText={setAlcool}
    />

    <TextInput
    style={styles.input}
    placeholder="Preço da Gasolina"
    onChangeText={setGasolina}
    />

  <Pressable style={styles.botao} onPress={calcular}>
        <Text style={styles.textobot}>Verificar</Text>
        </Pressable>

    <Text style={styles.texto}> {resultado} </Text> 

    </View>
  );
}


export default App;

