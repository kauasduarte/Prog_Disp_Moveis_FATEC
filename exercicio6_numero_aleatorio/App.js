import React, { Component, useState , useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image} from 'react-native';
import { styles } from './styles';

function App(){
  const [resultado, setResultado] = useState('')
  const [aleatorio, setAleatorio] = useState('')
  const [numero, setNumero] = useState('')
  let img = 'https://contosparadormir.com.br/wp-content/uploads/2020/04/interroga%C3%A7%C3%B5es-3.png'

  useEffect(() => {
    if (aleatorio === '' || numero === '') {
      return;
    }

    if (parseInt(aleatorio) === parseInt(numero)) {
      setResultado('Acertou! O nº sorteado foi: ' + aleatorio);
    } else {
      setResultado('Errou! O nº sorteado foi: ' + aleatorio);
    }
  }, [aleatorio, numero]);

  function gerar() {
    if (numero === '') {
      alert('Digite um nº de 0 a 10');
      return;
    }

    setAleatorio(Math.floor(Math.random() * 11));
  }

  return(
    <View style={styles.container}>

    <Text style={styles.titulo}>
     Jogo do Nº Aleatório
    </Text>

    <View>
     <Image
          source={{ uri: img }}
          style={{ width: 250, height: 150, alignSelf: 'center', marginTop: 5, marginBottom:15}}
      /> 
    </View>

    <Text style={styles.texto}>
     Pense em um nº de 0 a 10
    </Text>

    <TextInput
    style={styles.input}
    placeholder="Escreva aqui seu nº"
    onChangeText={setNumero}
    />  

  <Pressable style={styles.botao} onPress={gerar}>
        <Text style={styles.textobot}>Descobrir</Text>
        </Pressable>

    <Text style={styles.texto}> {resultado} </Text>  

    </View>
  );
}


export default App;

