import { View, Text, Image } from 'react-native';

function App(){
    let img = 'https://i1.rgstatic.net/ii/profile.image/474045029326848-1490032550135_Q128/Kaua-Duarte-2.jpg';


  return(
    <View style={{margin: 20}}>    
      <Image
          source={{ uri: img }}
          style={{ width: 200, height: 200, alignSelf: 'center', marginTop: 30, marginBottom:20}}
      /> 
      <Text style={{color: '#FF0000', fontSize: 25 }}>Dados Pessoais</Text>
      <Text style={{fontSize: 20 }}>Kauã da Silva Duarte</Text>
      <Text style={{fontSize: 18 }}>33 anos</Text>
      <Text> </Text>
      <Text style={{color: '#FF0000', fontSize: 25 }}>Formação</Text>
      <Text style={{fontSize: 20 }}>Análise e Desenvolvimento de Sistemas </Text>
      <Text style={{fontSize: 15 }}>(2021-Em andamento)</Text>
      <Text> </Text>
      <Text style={{fontSize: 20 }}>Ciências Biológicas</Text>
      <Text style={{fontSize: 15 }}>(2021-Em andamento)</Text>
      <Text> </Text>
      <Text style={{color: '#FF0000', fontSize: 25 }}>Experiência</Text>
      <Text style={{fontSize: 20 }}>Professor de Ciências - Fundamental II </Text>
      <Text style={{fontSize: 15 }}>(2018-Atual)</Text>
      <Text> </Text>
      <Text style={{color: '#FF0000', fontSize: 25 }}>Projetos</Text>
      <Text> https://github.com/kauasduarte</Text>
      </View>
  )
}

export default App;