import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function JuniorTi() {
  return (
    <View style={estilo.container}>
      <View style={estilo.fundotitulo}>
        <Text style={estilo.titulo}> Função de um Junior em TI </Text>
      </View>

      <Text style={estilo.conceito}>
        No nível júnior, estão os cargos com complexidade menor de tarefas, sem
        tantas exigências de competências profissionais e normalmente sem
        autonomia para decisões. É aqui que começa a carreira de um profissional
        em determinada área. Tem até 5 anos de experiência na area
      </Text>

      <Image
        style={estilo.imagem}
        resizeMode={'contain'}
        source={require('../assets/junior.jpg')}
      />

      <Text style={estilo.subtitulo}> Empregos: </Text>

      <View style={estilo.fundo}>
        <Text style={estilo.topicos}>
          <AntDesign name="doubleright" size={15} color="black" />
          Programador nível Junior
        </Text>
        <Text style={estilo.topicos}>
          <AntDesign name="doubleright" size={15} color="black" />
          Desenvolvedor front-end nível Junior
        </Text>
        <Text style={estilo.topicos}>
          <AntDesign name="doubleright" size={15} color="black" />
          Desenvolvedor back-end nível Junior
        </Text>
        <Text style={estilo.topicos}>
          <AntDesign name="doubleright" size={15} color="black" />
          Analise de dados nível Junior
        </Text>
        <Text style={estilo.topicos}>
          <AntDesign name="doubleright" size={15} color="black" />
          Cloud nível Junior
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
