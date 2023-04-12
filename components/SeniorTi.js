import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function SeniorTi() {
  return (
    <View style={estilo.container}>
      <View style={estilo.fundotitulo}>
        <Text style={estilo.titulo}> Função de um Senior em TI </Text>
      </View>

      <Text style={estilo.conceito}>
        No nível sênior, o profissional se depara com uma ampla complexidade de
        tarefas. É esperado que ele tem maturidade profissional e emocional,
        poder de decisão e também capacidade para assumir funções de liderança.
      </Text>

      <Image
        style={estilo.imagem}
        resizeMode={'contain'}
        source={require('../assets/senior.jpg')}
      />

      <Text style={estilo.subtitulo}> Empregos: </Text>

      <View style={estilo.fundo}>
        <Text style={estilo.topicos}>
          <AntDesign name="doubleright" size={15} color="black" />
          Programador nível Senior
        </Text>
        <Text style={estilo.topicos}>
          <AntDesign name="doubleright" size={15} color="black" />
          Desenvolvedor front-end nível Senior
        </Text>
        <Text style={estilo.topicos}>
          <AntDesign name="doubleright" size={15} color="black" />
          Desenvolvedor back-end nível Senior
        </Text>
        <Text style={estilo.topicos}>
          <AntDesign name="doubleright" size={15} color="black" />
          Analise de dados nível Senior
        </Text>
        <Text style={estilo.topicos}>
          <AntDesign name="doubleright" size={15} color="black" />
          Cloud nível Senior
        </Text>
      </View>
    </View>
  );
}

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 0,
  },
  fundotitulo: {
    backgroundColor: '#00BFFF',
    flex: 1,
    flexGrow: 1,
  },
  titulo: {
    marginTop: 35,
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  conceito: {
    fontSize: 18,
    tectAlign: 'justify',
    margin: 15,
  },
  imagem: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    borderRadius: 20,
    margin: 10,
  },
  subtitulo: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 10,
  },
  topicos: {
    fontSize: 15,
    marginLeft: 20,
    marginBottom: 2,
  },
  fundo: {
    backgroundColor: '#00BFFF',
    borderRadius: 20,
    marginHorizontal: 20,
  },
});