import React, { Component, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable, Switch} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { styles } from './styles';
import Slider from '@react-native-community/slider';

function App() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState('')
  const [escolaridade, setEscolaridade] = useState('')
  const [limite, setLimite] = useState(1200)
  const [brasileiro, setBrasileiro] = useState(true)
  const [dadosConfirmados, setDadosConfirmados] = useState(false);

// Inputs temporarios
  const [nomeInput, setNomeInput] = useState('');
  const [idadeInput, setIdadeInput] = useState('');
  const [sexoInput, setSexoInput] = useState('');
  const [escolaridadeInput, setEscolaridadeInput] = useState('');
  const [limiteInput, setLimiteInput] = useState(1200)
  const [brasileiroInput, setBrasileiroInput] = useState(true)


  // Função para confirmar os dados
  function confirmarDados() {
    if (!nomeInput || !idadeInput || !sexoInput || !escolaridadeInput) {
      alert('Preencha todos os campos!');
      return;
    }
    setDadosConfirmados(true);
    setNome(nomeInput);
    setIdade(idadeInput);
    setSexo(sexoInput);
    setEscolaridade(escolaridadeInput);
    setLimite(limiteInput);
    setBrasileiro(brasileiroInput);
  }

  return (
    <View style={styles.container}>
    
      <Text style={styles.titulo}>Abertura de Conta</Text>  

      <View style={styles.inputContainer}>
        <Text style={styles.texto}>Nome: </Text>
        <TextInput style={styles.input} placeholder="" onChangeText={setNomeInput}
          />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.texto}>Idade: </Text>
        <TextInput style={styles.input} placeholder="" onChangeText={setIdadeInput}
          />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.texto}>Sexo: </Text>
        <Picker
          selectedValue={sexoInput}
          onValueChange={ sexoValue => setSexoInput(sexoValue) }
          style={{ width: 200, marginLeft: 5, backgroundColor: '#F0F0F0' }}  
          >
          <Picker.Item key={1} value={0} label="" />
          <Picker.Item key={1} value={'Masculino'} label="Masculino" />
          <Picker.Item key={2} value={"Feminino"} label="Feminino" />
          <Picker.Item key={3} value={"Outro"} label="Outro" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.texto}>Escolaridade: </Text>
        <Picker
          selectedValue={escolaridadeInput}
          onValueChange={ itemValue => setEscolaridadeInput(itemValue) }
          style={{ width: 200, marginLeft: 5, backgroundColor: '#F0F0F0' }}  
          >
          <Picker.Item key={0} value={0} label="" />
          <Picker.Item key={1} value={"Ensino Fundamental"} label="Ensino Fundamental" />
          <Picker.Item key={2} value={"Ensino Médio"} label="Ensino Médio" />
          <Picker.Item key={3} value={"Ensino Superior"} label="Ensino Superior" />
          <Picker.Item key={3} value={"Pós Graduação"} label="Pós Graduação" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.texto}>Limite: </Text>
        <View style={{ alignItems: 'center' }}>
          <Slider
            style={{ width: 220 }}  
            minimumValue={200}
            maximumValue={4000}
            onValueChange={ (limiteSelecionado) => setLimiteInput(limiteSelecionado) }
            value={limite}
            step={10}
            minimumTrackTintColor='orange'
            //maximumTrackTintColor='green'
            thumbTintColor='orange'
          />
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.sliderValue}>{limiteInput}</Text>
          </View>
        </View>
      </View>

      <View style={styles.inputContainer}>
          <Text style={styles.texto}>Brasileiro: </Text>
          <Switch
            value={brasileiroInput}
            onValueChange={ (valorSwitch) => setBrasileiroInput(valorSwitch) }
          />

      </View>

      <Pressable style={styles.botao} onPress={confirmarDados}>
        <Text style={styles.textobot}>Confirmar</Text>
        </Pressable>
      
      {dadosConfirmados && (
        <View style={styles.cartao}>
          <Text style={styles.cartaoTitulo}>Dados informados:</Text>            
          <Text style={styles.cartaoTexto}>Nome: {dadosConfirmados ? nome : ''}</Text>
          <Text style={styles.cartaoTexto}>Idade: {idade}</Text>
          <Text style={styles.cartaoTexto}>Sexo: {sexo}</Text>
          <Text style={styles.cartaoTexto}>Escolaridade: {escolaridade}</Text>
          <Text style={styles.cartaoTexto}>Limite: {limite}</Text>
          <Text style={styles.cartaoTexto}>
            Brasileiro: {brasileiro ? 'Sim' : 'Não'}</Text>         
        </View>
      )}
    </View>
    );
}


export default App
