import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid } from 'react-native';

const infoP = {
  n1: 0,
  n2: 0,
  puntos: 0};

export default function App() {
  const [ronda, setRonda] = useState(1);
  const [puntos, setPuntos] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Preguntas Matemáticas</Text>
      <Text>
        <CreatNum index={1} />
        <Text> y </Text>
        <CreatNum index={2} />
        <Text>?</Text>
      </Text>
      <TextInput
        style={{ height: 40, borderColor: "black", }}
        placeholder="Ingrese el resultado"
        keyboardType="number-pad"
        onEndEditing={pRespuesta => {
          checkResult(parseInt(pRespuesta.nativeEvent.text));
          setRonda(ronda + 1);
          setPuntos(infoP.puntos);
        }}
        editable={ronda < 10}
      />
      <View
        style={
          ronda < 10
            ? { display: "none" }
            : { display: "flex" }
        }>
        <Text style={{ color: "red" }}> Fin</Text>
      </View>
      <View style={{ justifyContent: "flex-end" }}>
        <Text>Ronda: {ronda} de 10</Text>
        <Text>Puntos: {puntos}</Text>
      </View>
    </View>
  )
}

const CreatNum = (props) => {
  const numAl = Math.floor((Math.random() * 100));
  if (props.index === 1) {
    infoP.n1 = numAl;
  } else {
    infoP.n2 = numAl;
  }
  return (
    <Text>{numAl}</Text>
  )
}

const checkResult = (nRespuesta) => {
  const tResultado = infoP.n1 + infoP.n2;

  console.log(nRespuesta);
  console.log(tResultado);

  if (nRespuesta === tResultado) {
    ToastAndroid.show("Correcta", ToastAndroid.LONG);
    infoP.puntos += 10;
  } else {
    ToastAndroid.show("Incorrecta", ToastAndroid.LONG);
    infoP.puntos -= 5;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});