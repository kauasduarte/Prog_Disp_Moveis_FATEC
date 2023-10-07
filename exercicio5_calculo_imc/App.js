import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image, } from 'react-native';
import { styles } from './styles';

function App(){
  const [imc, setIMC] = useState(0)
  const [resultado, setResultado] = useState('')
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  let img = 'https://s2.glbimg.com/JeR39NqY4t3aM8q2ttZLHWNHxv0=/s.glbimg.com/jo/g1/f/original/2016/06/12/peso_na_balanca.jpg'

  function calcular(){
    
    if (peso === '' || altura == ''){
      alert('Digite os dois valores')
      return;
    }

    const imcCalculado = peso / (altura * altura);
    setIMC(imcCalculado);

    if(imcCalculado < 18.5){
      setResultado('Classificação: Abaixo do Peso')}
    else if(imcCalculado < 24.9) {
      setResultado('Classificação: Peso Normal') }
    else if(imcCalculado < 29.9) {
      setResultado('Classificação: Sobrepeso') }
    else if(imcCalculado < 34.9) {
      setResultado('Classificação: Obesidade Grau I') }
    else if(imcCalculado < 39.9) {
      setResultado('Classificação: Obesidade Grau II') }
    else {
      setResultado('Classificação: Obesidade Grau III ou Mórbida') }
  }  

  return(
    <View style={styles.container}>

    <Text style={styles.titulo}>
     Cálculo do IMC
    </Text>

    <View>
     <Image
          source={{ uri: img }}
          style={{ width: 250, height: 180, alignSelf: 'center', marginTop: 5, marginBottom:15}}
      /> 
    </View>

    <TextInput
    style={styles.input}
    placeholder="Peso"
    onChangeText={setPeso}
    />

    <TextInput
    style={styles.input}
    placeholder="Altura"
    onChangeText={setAltura}
    />  

  <Pressable style={styles.botao} onPress={calcular}>
        <Text style={styles.textobot}>Verificar</Text>
        </Pressable>
    
    <Text style={styles.texto}>IMC = {imc.toFixed(2)} </Text>
    <Text style={styles.texto}> {resultado} </Text>
  

    </View>
  );
}


export default App;

