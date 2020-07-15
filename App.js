import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Picker} from 'react-native';

export default function App() {
  const [selectedValue, setSelectedValue] = useState("1");
  const [respuesta, setRespuesta] = useState('')
  return (
    <View style={styles.container}>
      <TextInput
      style={{ height: 40, borderColor: "black", }}
      placeholder="Ingrese el número a convertir"
      keyboardType="decimal-pad"
      onChangeText={text => setRespuesta(pConversor(parseFloat(text),selectedValue))}
      defaultValue={respuesta}
      />
      <Text>{respuesta}</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Metros a Kilometros" value="1" />
        <Picker.Item label="Metros a Centimetros" value="2" />
        <Picker.Item label="Kilometros a Centimetros" value="3" />
        <Picker.Item label="Kilometros a Metros" value="4" />
        <Picker.Item label="Centimetros a Metros" value="5" />
        <Picker.Item label="Centimetros a Kilometros" value="6" />
      </Picker>
    </View>
  );
}

const pConversor = (respuesta,selectedValue) => {
  if(selectedValue === "1"){
    respuesta = respuesta / 1000;
  }else if(selectedValue === "2"){
    respuesta = respuesta * 100;
  }
  else if(selectedValue === "3"){
    respuesta = respuesta * 100000;
  }
  else if(selectedValue === "4"){
    respuesta = respuesta * 1000;
  }
  else if(selectedValue === "5"){
    respuesta = respuesta / 100;
  }
  else if(selectedValue === "6"){
    respuesta = respuesta / 100000;
  }
  return respuesta
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});