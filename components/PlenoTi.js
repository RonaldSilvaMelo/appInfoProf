import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function PlenoTi() {
  return (
    <View style={estilo.container}>
      <View style={estilo.fundotitulo}>
        <Text style={estilo.titulo}> Função de um Pleno em TI </Text>
      </View>

      <Text style={estilo.conceito}>
        No nível pleno, existe uma maior complexidade de tarefas. Aqui , o
        profissional precisa ter maior maturidade e também mais capacidade de
        tomar de decisões, o que era raramente é exigido no nível júnior.
      </Text>

      <Image
        style={estilo.imagem}
        resizeMode={'contain'}
        source={require('../assets/pleno.jpg')}
      />

      <Text style={estilo.subtitulo}> Empregos: </Text>

      <View style={estilo.fundo}>
        <Text style={estilo.topicos}>
          <AntDesign name="doubleright" size={15} color="black" />
          Programador nível Pleno
        </Text>
        <Text style={estilo.topicos}>
          <AntDesign name="doubleright" size={15} color="black" />
          Desenvolvedor front-end nível Pleno
        </Text>
        <Text style={estilo.topicos}>
          <AntDesign name="doubleright" size={15} color="black" />
          Desenvolvedor back-end nível Pleno
        </Text>
        <Text style={estilo.topicos}>
          <AntDesign name="doubleright" size={15} color="black" />
          Analise de dados nível Pleno
        </Text>
        <Text style={estilo.topicos}>
          <AntDesign name="doubleright" size={15} color="black" />
          Cloud nível Pleno
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