import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { styles } from './styles';

function App(){

  let foto1 = 'https://www.directdtg.com.br/796/camiseta-raglan-personalizada.jpg';
  let foto2 = 'https://vulcabras.vtexassets.com/arquivos/ids/241741/Tenis-Olympikus-Ultraleve-232G-Masculino.jpg';
  let foto3 = 'https://images.tcdn.com.br/img/img_prod/777980/bone_americano_personalizado_em_tecido_tactel_com_regulador_de_plastico_37_1_20220214141406.jpg';
  let foto4 = 'https://d3j5co0eaxk0el.cloudfront.net/Custom/Content/Products/18/60/1860286_calca-cianita-elastic-32sa5198_z5_638194252260270364.jpg';
  let foto5 = 'https://ae01.alicdn.com/kf/S389ce78563fc465aa45a6a769450bdacm/Saia-de-malha-com-bordado-pesado-saia-inchada-borboleta-3d.jpg';
  let foto6 = 'https://images.tcdn.com.br/img/img_prod/828101/short_diesel_00sxlh0kdaa_3121_1_3d781d8ad7c9d7831da1565594987eac.jpg';
  let foto7 = 'https://thumbs.dreamstime.com/b/vestido-vermelho-no-gancho-isolado-19604777.jpg';
  let foto8 = 'https://sc04.alicdn.com/kf/A9a177dae867948c9803b9dd8c5750d9e0.jpg';
  
    
  return(    
    
    <View style={styles.container}>      
      <Text style={styles.titulo}>Anúncios</Text>  
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.box1}>
          <Image
          source={{ uri: foto1 }}
          style={styles.imagem}
      /> 
          <Text style={styles.produto}>Camiseta HM</Text>
          <Text style={styles.texto}>Branca e preta</Text>
          <Text style={styles.texto}>R$30,00</Text> 
        </View>
        <View style={styles.box2}>
          <Image
          source={{ uri: foto2 }}
          style={styles.imagem}
      /> 
          <Text style={styles.produto}>TÊnis Olympikus</Text>
          <Text style={styles.texto}>Tamanhos: 37, 39, 41</Text>
          <Text style={styles.texto}>R$190,90</Text> 
        </View>
        <View style={styles.box1}>
          <Image
          source={{ uri: foto3 }}
          style={styles.imagem}
      /> 
          <Text style={styles.produto}>Boné U.S.A.</Text>
          <Text style={styles.texto}>Amarelo e Verde</Text>
          <Text style={styles.texto}>R$90,00</Text> 
        </View>
        <View style={styles.box2}>
          <Image
          source={{ uri: foto4 }}
          style={styles.imagem}
      /> 
          <Text style={styles.produto}>Calça preta</Text>
          <Text style={styles.texto}>Tamanhos: 36, 38, 40</Text>
          <Text style={styles.texto}>R$120,00</Text> 
        </View>
        <View style={styles.box1}>
          <Image
          source={{ uri: foto5 }}
          style={styles.imagem}
      /> 
          <Text style={styles.produto}>Saia estampada</Text>
          <Text style={styles.texto}>Borboletas</Text>
          <Text style={styles.texto}>R$110,00</Text> 
        </View>
        <View style={styles.box2}>
          <Image
          source={{ uri: foto6 }}
          style={styles.imagem}
      /> 
          <Text style={styles.produto}>Shorts esportivo</Text>
          <Text style={styles.texto}>Unisex</Text>
          <Text style={styles.texto}>R$75,00</Text> 
        </View>
        <View style={styles.box1}>
          <Image
          source={{ uri: foto7 }}
          style={styles.imagem}
      /> 
          <Text style={styles.produto}>Vestido vermelho</Text>
          <Text style={styles.texto}>Coquetel</Text>
          <Text style={styles.texto}>R$160,00</Text> 
        </View>
        <View style={styles.box2}>
          <Image
          source={{ uri: foto8 }}
          style={styles.imagem}
      /> 
          <Text style={styles.produto}>Casaco feio</Text>
          <Text style={styles.texto}>Tamanho G</Text>
          <Text style={styles.texto}>R$170,00</Text> 
        </View>
      </ScrollView>
    </View>
  )
}


export default App;
