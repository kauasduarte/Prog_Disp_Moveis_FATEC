import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { styles } from './styles';

function App(){

    
  return(
    
    
    <View style={styles.container}>

      
      <Text style={styles.titulo}>Vagas</Text>  

      <View style={styles.anuncios}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.box1}>
            <Text style={styles.vagas}>Desenvolvedor Front-end Sênior</Text>
            <Text style={styles.texto}>Salário: R$ 8.000</Text>
            <Text style={styles.texto}>Descrição: Front-end experiente, HTML/CSS/JS.</Text> 
            <Text style={styles.texto}>Contato: recrutamento@empresa.com.br</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.vagas}>Analista de Marketing Digital</Text>
            <Text style={styles.texto}>Salário: R$ 4.500</Text>
            <Text style={styles.texto}>Descrição: Marketing digital, mídias sociais, SEO.</Text> 
            <Text style={styles.texto}>Contato: rh@companhiafantasia.com</Text>
          </View>
          <View style={styles.box1}>
            <Text style={styles.vagas}>Gerente de Projetos de TI</Text>
            <Text style={styles.texto}>Salário: R$ 12.000</Text>
            <Text style={styles.texto}>Descrição: Gerente de projetos de TI para liderar nossa equipe de desenvolvimento.</Text> 
            <Text style={styles.texto}>Contato: carreiras@tecnosolucoes.com</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.vagas}>Enfermeiro(a) Hospitalar</Text>
            <Text style={styles.texto}>Salário: R$ 3.800</Text>
            <Text style={styles.texto}>Descrição: Responsável por garantir o bem-estar geral dos pacientes.</Text> 
            <Text style={styles.texto}>Contato: recrutamento@hospitalvida.com</Text>
          </View>
          <View style={styles.box1}>
            <Text style={styles.vagas}>Analista Financeiro Júnior</Text>
            <Text style={styles.texto}>Salário: R$ 3.000</Text>
            <Text style={styles.texto}>Descrição: Atividades de contabilidade, análise de custos e orçamento.</Text> 
            <Text style={styles.texto}>Contato: financeiro@empresaabc.com</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.vagas}>Assistente Administrativo</Text>
            <Text style={styles.texto}>Salário: R$ 2.500</Text>
            <Text style={styles.texto}>Descrição: Organização de documentos e suporte administrativo geral.</Text> 
            <Text style={styles.texto}>Contato: adm@companhia.com.br</Text>
          </View>
          <View style={styles.box1}>
            <Text style={styles.vagas}>Chef de Cozinha</Text>
            <Text style={styles.texto}>Salário: R$ 4.000</Text>
            <Text style={styles.texto}>Descrição: Criar e executar menus, mantendo os padrões de qualidade.</Text> 
            <Text style={styles.texto}>Contato: chef@restaurantedelicias.com</Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.vagas}>Designer Gráfico Freelancer</Text>
            <Text style={styles.texto}>Salário: Por projeto</Text>
            <Text style={styles.texto}>Descrição: Design de logotipos, materiais de marketing e ilustrações.</Text> 
            <Text style={styles.texto}>Contato: designfreelance@email.com</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}




export default App;
